"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18765],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),o=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=o(a),k=n,c=s["".concat(m,".").concat(k)]||s[k]||d[k]||l;return a?r.createElement(c,p(p({ref:t},u),{},{components:a})):r.createElement(c,p({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},76016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={sidebar_label:"Frame"},p="Frame class",i={unversionedId:"api/puppeteer.frame",id:"api/puppeteer.frame",title:"Frame class",description:"Represents a DOM frame.",source:"@site/../docs/api/puppeteer.frame.md",sourceDirName:"api",slug:"/api/puppeteer.frame",permalink:"/next/api/puppeteer.frame",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Frame"},sidebar:"sidebar",previous:{title:"Frame.isOOPFrame",permalink:"/next/api/puppeteer.frame.isoopframe"},next:{title:"Frame.name",permalink:"/next/api/puppeteer.frame.name"}},m={},o=[{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Methods",id:"methods",level:2}],u={toc:o};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frame-class"},"Frame class"),(0,n.kt)("p",null,"Represents a DOM frame."),(0,n.kt)("p",null,"To understand frames, you can think of frames as ",(0,n.kt)("inlineCode",{parentName:"p"},"<iframe>")," elements. Just like iframes, frames can be nested, and when JavaScript is executed in a frame, the JavaScript does not effect frames inside the ambient frame the JavaScript executes in."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Frame\n")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Frame lifecycles are controlled by three events that are all dispatched on the parent ",(0,n.kt)("a",{parentName:"p",href:"/next/api/puppeteer.frame.page"},"page"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/api/puppeteer.pageemittedevents"},"PageEmittedEvents.FrameAttached")," - ",(0,n.kt)("a",{parentName:"li",href:"/next/api/puppeteer.pageemittedevents"},"PageEmittedEvents.FrameNavigated")," - ",(0,n.kt)("a",{parentName:"li",href:"/next/api/puppeteer.pageemittedevents"},"PageEmittedEvents.FrameDetached"))),(0,n.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"Frame")," class."),(0,n.kt)("h2",{id:"example-1"},"Example 1"),(0,n.kt)("p",null,"At any point in time, ",(0,n.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page"},"pages")," expose their current frame tree via the ",(0,n.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.mainframe"},"Page.mainFrame()")," and ",(0,n.kt)("a",{parentName:"p",href:"/next/api/puppeteer.frame.childframes"},"Frame.childFrames()")," methods."),(0,n.kt)("h2",{id:"example-2"},"Example 2"),(0,n.kt)("p",null,"An example of dumping frame tree:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com/chrome/browser/canary.html');\n  dumpFrameTree(page.mainFrame(), '');\n  await browser.close();\n\n  function dumpFrameTree(frame, indent) {\n    console.log(indent + frame.url());\n    for (const child of frame.childFrames()) {\n      dumpFrameTree(child, indent + '  ');\n    }\n  }\n})();\n")),(0,n.kt)("h2",{id:"example-3"},"Example 3"),(0,n.kt)("p",null,"An example of getting text from an iframe element:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const frame = page.frames().find(frame => frame.name() === 'myframe');\nconst text = await frame.$eval('.selector', element => element.textContent);\nconsole.log(text);\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame._"},"$(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Queries the frame for an element matching the given selector.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.__"},"$$(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Queries the frame for all elements matching the given selector.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.__eval"},"$$eval(selector, pageFunction, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Runs the given function on an array of elements matching the given selector in the frame."),(0,n.kt)("p",null,"If the given function returns a promise, then this method will wait till the promise resolves."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame._eval"},"$eval(selector, pageFunction, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Runs the given function on the first element matching the given selector in the frame."),(0,n.kt)("p",null,"If the given function returns a promise, then this method will wait till the promise resolves."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame._x"},"$x(expression)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.addscripttag"},"addScriptTag(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Adds a ",(0,n.kt)("code",null,"<","script",">")," tag into the page with the desired url or content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.addstyletag"},"addStyleTag(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Adds a ",(0,n.kt)("code",null,"<","link rel=",'"',"stylesheet",'"',">")," tag into the page with the desired url or a ",(0,n.kt)("code",null,"<","style type=",'"',"text/css",'"',">")," tag with the content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.childframes"},"childFrames()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.click"},"click(selector, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Clicks the first element found that matches ",(0,n.kt)("code",null,"selector"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.content"},"content()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.evaluate"},"evaluate(pageFunction, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Behaves identically to ",(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.page.evaluate"},"Page.evaluate()")," except it's run within the the context of this frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.evaluatehandle"},"evaluateHandle(pageFunction, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Behaves identically to ",(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.page.evaluatehandle"},"Page.evaluateHandle()")," except it's run within the context of this frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.executioncontext"},"executionContext()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.focus"},"focus(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Focuses the first element that matches the ",(0,n.kt)("code",null,"selector"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.goto"},"goto(url, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Navigates a frame to the given url.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.hover"},"hover(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Hovers the pointer over the center of the first element that matches the ",(0,n.kt)("code",null,"selector"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.isdetached"},"isDetached()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.isoopframe"},"isOOPFrame()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.name"},"name()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.page"},"page()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.parentframe"},"parentFrame()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.select"},"select(selector, values)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Selects a set of value on the first ",(0,n.kt)("code",null,"<","select",">")," element that matches the ",(0,n.kt)("code",null,"selector"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.setcontent"},"setContent(html, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Set the content of the frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.tap"},"tap(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Taps the first element that matches the ",(0,n.kt)("code",null,"selector"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.title"},"title()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.type"},"type(selector, text, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Sends a ",(0,n.kt)("code",null,"keydown"),", ",(0,n.kt)("code",null,"keypress"),"/",(0,n.kt)("code",null,"input"),", and ",(0,n.kt)("code",null,"keyup")," event for each character in the text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.url"},"url()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.waitforfunction"},"waitForFunction(pageFunction, options, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.waitfornavigation"},"waitForNavigation(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Waits for the frame to navigate. It is useful for when you run code which will indirectly cause the frame to navigate."),(0,n.kt)("p",null,"Usage of the ",(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"History API")," to change the URL is considered a navigation."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.waitforselector"},"waitForSelector(selector, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,"Waits for an element matching the given selector to appear in the frame."),(0,n.kt)("p",null,"This method works across navigations."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.waitfortimeout"},"waitForTimeout(milliseconds)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Causes your script to wait for the given number of milliseconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frame.waitforxpath"},"waitForXPath(xpath, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);