"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[476],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(v,o(o({ref:r},l),{},{components:t})):n.createElement(v,o({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5882:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const a={sidebar_position:4},o="WDIO Adapter",c={unversionedId:"Guides/wdio-adapter",id:"Guides/wdio-adapter",title:"WDIO Adapter",description:"@qavajs/cli comes with wdioAdapter function that allow to use wdio services e.g selenium-service, appium-service, etc.",source:"@site/docs/Guides/wdio-adapter.md",sourceDirName:"Guides",slug:"/Guides/wdio-adapter",permalink:"/docs/Guides/wdio-adapter",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/wdio-adapter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Parallel Execution",permalink:"/docs/Guides/parallel"},next:{title:"Typescript",permalink:"/docs/Guides/typescript"}},s={},p=[],l={toc:p};function d(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wdio-adapter"},"WDIO Adapter"),(0,i.kt)("p",null,"@qavajs/cli comes with wdioAdapter function that allow to use wdio services e.g selenium-service, appium-service, etc.\nService defintion may be string with module path or configuration tuple [modulePath, options, capabilities, config"),(0,i.kt)("p",null,"simple use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const wdioService = require('@qavajs/wdio-service-adapter');\n\nmodule.exports = {\n    default: {\n        service: [\n            wdioService('@wdio/selenium-standalone-service')\n        ],\n    }\n}\n")),(0,i.kt)("p",null,"use with params"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const wdioService = require('@qavajs/wdio-service-adapter');\n\nmodule.exports = {\n    default: {\n        service: [\n            wdioService([\n                '@wdio/appium-service',\n                {\n                    args: {\n                        chromedriverExecutable: resolve('node_modules/chromedriver/lib/chromedriver/chromedriver.exe')\n                    }\n                }\n            ])\n        ],\n    }\n}\n")))}d.isMDXComponent=!0}}]);