import {assert} from '../util/assert.js';

export const enum TokenType {
  Class = 'class',
  Attribute = 'attribute',
  Id = 'id',
  Type = 'type',
  Universal = 'universal',
  PseudoElement = 'pseudo-element',
  PseudoClass = 'pseudo-class',
  Comma = 'comma',
  Combinator = 'combinator',
}

export interface Token {
  type: string;
  content: string;
  name: string;
  namespace?: string;
  value?: string;
  pos: [number, number];
  operator?: string;
  argument?: string;
  caseSensitive?: 'i';
  /**
   * @internal
   */
  __changed?: boolean;
}

const TOKENS: Record<string, RegExp> = {
  [TokenType.Attribute]:
    /\[\s*(?:(?<namespace>(?:\\.|[-\w\P{ASCII}])+|\*)?\|)?(?<name>(?:\\.|[-\w\P{ASCII}])+)\s*(?:(?<operator>\W?=)\s*(?<value>.+?)\s*(\s(?<caseSensitive>[iIsS]))?\s*)?\]/gu,
  [TokenType.Id]: /#(?<name>(?:\\.|[-\w\P{ASCII}])+)/gu,
  [TokenType.Class]: /\.(?<name>(?:\\.|[-\w\P{ASCII}])+)/gu,
  [TokenType.Comma]: /\s*,\s*/g,
  [TokenType.Combinator]: /\s*(?:>{3,4}|[\s>+~])\s*/g,
  [TokenType.PseudoElement]:
    /::(?<name>(?:\\.|[-\w\P{ASCII}])+)(?:\((?<argument>¶+)\))?/gu,
  [TokenType.PseudoClass]:
    /:(?<name>(?:\\.|[-\w\P{ASCII}])+)(?:\((?<argument>¶+)\))?/gu,
  [TokenType.Universal]: /(?:(?<namespace>\*|(?:\\.|[-\w\P{ASCII}])*)\|)?\*/gu,
  [TokenType.Type]:
    /(?:(?<namespace>\*|(?:\\.|[-\w\P{ASCII}])*)\|)?(?<name>(?:\\.|[-\w\P{ASCII}])+)/gu,
};

const getArgumentPatternByType = (type: string) => {
  switch (type) {
    case TokenType.PseudoElement:
    case TokenType.PseudoClass:
      return new RegExp(
        TOKENS[type]!.source.replace('(?<argument>¶+)', '(?<argument>.+)'),
        'gu'
      );
    default:
      return TOKENS[type];
  }
};

function assertTokenArray(
  tokens: Array<Token | string>
): asserts tokens is Token[] {
  let offset = 0;
  for (const token of tokens) {
    switch (typeof token) {
      case 'string':
        throw new Error(
          `Unexpected sequence ${token} found at index ${offset}`
        );
      case 'object':
        offset += token.content.length;
        token.pos = [offset - token.content.length, offset];
        switch (token.type) {
          case TokenType.Combinator:
          case TokenType.Comma:
            token.content = token.content.trim() || ' ';
            break;
        }
        break;
    }
  }
}

export function tokenize(selector: string, grammar = TOKENS): Token[] {
  if (!selector) {
    return [];
  }
  selector = selector.trim();

  type TokenString = {value: string; offset: number};
  const replacements: TokenString[] = [];

  // Replace strings
  {
    const state: {
      escaped: boolean;
      quoteState?: [quoteType: string, offset: number];
    } = {escaped: false};
    for (let i = 0; i < selector.length; ++i) {
      if (state.escaped) {
        continue;
      }
      switch (selector[i]) {
        case '\\':
          state.escaped = true;
          break;
        case '"':
        case "'": {
          if (!state.quoteState) {
            state.quoteState = [selector[i]!, i];
            continue;
          }
          const quote = state.quoteState[0];
          if (quote !== selector[i]) {
            continue;
          }
          const offset = state.quoteState[1];
          const value = selector.slice(state.quoteState[1], i + 1);
          replacements.push({value, offset});
          const replacement = `${quote}${'§'.repeat(value.length - 2)}${quote}`;
          selector =
            selector.slice(0, offset) +
            replacement +
            selector.slice(offset + value.length);
          break;
        }
      }
    }
  }

  // Replace parentheses
  {
    const state: {
      escaped: boolean;
      nesting: number;
      offset: number;
    } = {escaped: false, nesting: 0, offset: 0};
    for (let i = 0; i < selector.length; ++i) {
      if (state.escaped) {
        continue;
      }
      switch (selector[i]) {
        case '\\':
          state.escaped = true;
          break;
        case '(':
          if (++state.nesting !== 1) {
            continue;
          }
          state.offset = i;
          break;
        case ')': {
          if (--state.nesting !== 0) {
            continue;
          }
          const {offset} = state;
          const value = selector.slice(offset, i + 1);
          replacements.push({value, offset});
          const replacement = `(${'¶'.repeat(value.length - 2)})`;
          selector =
            selector.slice(0, offset) +
            replacement +
            selector.slice(offset + value.length);
          break;
        }
      }
    }
  }

  // Our goal here is basically try each token type on the selector, keeping
  // track of order. Hopefully by the end, we have an array of tokens.
  const tokens: Array<Token | string> = [selector];
  for (const type in grammar) {
    const pattern = grammar[type];
    assert(pattern);
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token !== 'string') {
        continue;
      }

      pattern.lastIndex = 0;
      const match = pattern.exec(token);
      if (!match) {
        continue;
      }

      const from = match.index - 1;
      const args: Array<Token | string> = [];
      const content = match[0];

      const before = token.slice(0, from + 1);
      if (before) {
        args.push(before);
      }

      args.push({
        ...(match.groups as unknown as Token),
        type,
        content,
      });

      const after = token.slice(from + content.length + 1);
      if (after) {
        args.push(after);
      }

      tokens.splice(i, 1, ...args);
    }
  }
  assertTokenArray(tokens);

  // Restore replacements in reverse order.
  for (const replacement of replacements.reverse()) {
    for (const token of tokens) {
      const {offset, value} = replacement;
      if (!(token.pos[0] <= offset && offset + value.length <= token.pos[1])) {
        continue;
      }

      // Invert replacements
      const content = token.content;
      const tokenOffset = offset - token.pos[0];
      token.content =
        content.slice(0, tokenOffset) +
        value +
        content.slice(tokenOffset + value.length);
      token.__changed = token.content !== content;
    }
  }

  // Rematch tokens with changed content.
  for (const token of tokens) {
    if (!token.__changed) {
      continue;
    }
    delete token.__changed;

    const pattern = getArgumentPatternByType(token.type);
    assert(pattern);
    pattern.lastIndex = 0;
    const match = pattern.exec(token.content);
    if (!match) {
      throw new Error("This shouldn't be possible!");
    }
    Object.assign(token, match.groups);
  }

  return tokens;
}
