"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Get Started",l={unversionedId:"intro",id:"intro",title:"Get Started",description:"@qavajs",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Steps",permalink:"/docs/category/steps"}},s={},c=[{value:"@qavajs",id:"qavajs",level:2},{value:"Installation",id:"installation",level:3},{value:"Test execution",id:"test-execution",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-started"},"Get Started"),(0,a.kt)("h2",{id:"qavajs"},"@qavajs"),(0,a.kt)("p",null,"@qavajs framework is a solution that allow to significantly reduces automation project setup time due to set of predefined steps, built-in page object solution and OOB integrations with other test related stuff (like EPAM ReportPortal etc.)"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install @qavajs/cli")),(0,a.kt)("p",null,"Then run"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npx qavajs install")),(0,a.kt)("p",null,"and select modules to install. The system will generate config file based on your answers."),(0,a.kt)("h3",{id:"test-execution"},"Test execution"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npx qavajs run --config <config> --profile <profile>")),(0,a.kt)("p",null,"default config is cucumber.js"),(0,a.kt)("p",null,"default profile is default"))}p.isMDXComponent=!0}}]);