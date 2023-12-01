"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[40],{4137:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6349:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(7462),a=(t(7294),t(4137));const o={sidebar_position:3},s="Parallel Execution",i={unversionedId:"Guides/parallel",id:"Guides/parallel",title:"Parallel Execution",description:"Framework support parallel execution out of the box.",source:"@site/docs/Guides/parallel.md",sourceDirName:"Guides",slug:"/Guides/parallel",permalink:"/docs/Guides/parallel",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/parallel.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Composing Steps",permalink:"/docs/Guides/composing-steps"},next:{title:"WDIO Adapter",permalink:"/docs/Guides/wdio-adapter"}},l={},u=[{value:"Test Sharding",id:"test-sharding",level:3}],p={toc:u};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parallel-execution"},"Parallel Execution"),(0,a.kt)("p",null,"Framework support parallel execution out of the box.\nNumber of parallel threads can be set in config file (by default it is config.js)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nmodule.exports = {\n    default: {\n        parallel: 6\n    }\n}\n\n")),(0,a.kt)("h1",{id:"distributing-uniq-user-per-thread"},"Distributing uniq user per thread"),(0,a.kt)("p",null,"The simplest way to assign uniq user is to use memory capabilities and environment variable produced by Cucumber (or use util function - parallel)."),(0,a.kt)("p",null,"Here is example of memory file (by default it is memory/index.js):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { parallel } = require('@qavajs/memory/utils');\n\nclass Memory {\n    user = parallel([\n        { username: 'user1', password: 'password' },\n        { username: 'user2', password: 'password' }\n    ]);\n}\n\nmodule.exports = Memory;\n")),(0,a.kt)("p",null,"Then values can be used in Gherkin scripts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Parallel\n  \n  Scenario: Verify that user is able to login\n    When I type '$user.username' to 'Username Input'\n    And I type '$user.password' to 'Password Input'\n")),(0,a.kt)("h3",{id:"test-sharding"},"Test Sharding"),(0,a.kt)("p",null,"qavajs provides ability to shard your tests between different machines. To do so pass ",(0,a.kt)("inlineCode",{parentName:"p"},"--shard x/y")," parameter in CLI,\nwhere x - current shard, y - total number of shards."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx qavajs run --config config.js --shard 1/2\nnpx qavajs run --config config.js --shard 2/2\n")))}c.isMDXComponent=!0}}]);