"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3011],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),i=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=i(r),y=o,v=f["".concat(a,".").concat(y)]||f[y]||s[y]||p;return r?n.createElement(v,l(l({ref:t},u),{},{components:r})):n.createElement(v,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,l=new Array(p);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<p;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={sidebar_label:"ProtocolLifeCycleEvent"},c="ProtocolLifeCycleEvent type",a={unversionedId:"api/puppeteer.protocollifecycleevent",id:"version-18.0.4/api/puppeteer.protocollifecycleevent",title:"ProtocolLifeCycleEvent type",description:"Signature:",source:"@site/versioned_docs/version-18.0.4/api/puppeteer.protocollifecycleevent.md",sourceDirName:"api",slug:"/api/puppeteer.protocollifecycleevent",permalink:"/api/puppeteer.protocollifecycleevent",draft:!1,tags:[],version:"18.0.4",frontMatter:{sidebar_label:"ProtocolLifeCycleEvent"},sidebar:"sidebar",previous:{title:"ProtocolError.originalMessage",permalink:"/api/puppeteer.protocolerror.originalmessage"},next:{title:"PuppeteerErrors",permalink:"/api/puppeteer.puppeteererrors"}},i={},u=[],s={toc:u};function f(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"protocollifecycleevent-type"}),"ProtocolLifeCycleEvent type"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export declare type ProtocolLifeCycleEvent =\n  | 'load'\n  | 'DOMContentLoaded'\n  | 'networkIdle'\n  | 'networkAlmostIdle';\n")))}f.isMDXComponent=!0}}]);