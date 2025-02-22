---
sidebar_label: BrowserContextOptions
---

# BrowserContextOptions interface

BrowserContext options.

#### Signature:

```typescript
export interface BrowserContextOptions
```

## Properties

| Property                                                                 | Modifiers | Type       | Description                                                                                                                               | Default |
| ------------------------------------------------------------------------ | --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| [proxyBypassList?](./puppeteer.browsercontextoptions.proxybypasslist.md) |           | string\[\] | _(Optional)_ Bypass the proxy for the given list of hosts.                                                                                |         |
| [proxyServer?](./puppeteer.browsercontextoptions.proxyserver.md)         |           | string     | _(Optional)_ Proxy server with optional port to use for all requests. Username and password can be set in <code>Page.authenticate</code>. |         |
