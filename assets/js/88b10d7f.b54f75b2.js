"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54611],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},872:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={sidebar_label:"BrowserContext.clearPermissionOverrides"},a="BrowserContext.clearPermissionOverrides() method",p={unversionedId:"api/puppeteer.browsercontext.clearpermissionoverrides",id:"version-18.0.4/api/puppeteer.browsercontext.clearpermissionoverrides",title:"BrowserContext.clearPermissionOverrides() method",description:"Clears all permission overrides for the browser context.",source:"@site/versioned_docs/version-18.0.4/api/puppeteer.browsercontext.clearpermissionoverrides.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.clearpermissionoverrides",permalink:"/api/puppeteer.browsercontext.clearpermissionoverrides",draft:!1,tags:[],version:"18.0.4",frontMatter:{sidebar_label:"BrowserContext.clearPermissionOverrides"},sidebar:"sidebar",previous:{title:"BrowserContext.browser",permalink:"/api/puppeteer.browsercontext.browser"},next:{title:"BrowserContext.close",permalink:"/api/puppeteer.browsercontext.close"}},l={},c=[{value:"Example",id:"example",level:2}],u={toc:c};function m(e){var{components:r}=e,t=s(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"browsercontextclearpermissionoverrides-method"}),"BrowserContext.clearPermissionOverrides() method"),(0,n.kt)("p",null,"Clears all permission overrides for the browser context."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class BrowserContext {\n  clearPermissionOverrides(): Promise<void>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",o({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"const context = browser.defaultBrowserContext();\ncontext.overridePermissions('https://example.com', ['clipboard-read']);\n// do stuff ..\ncontext.clearPermissionOverrides();\n")))}m.isMDXComponent=!0}}]);