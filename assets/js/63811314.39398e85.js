"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},l="Page Object",i={unversionedId:"Guides/page-object",id:"Guides/page-object",title:"Page Object",description:"Framework provides capability to call getElement method from po object that resolves plain-english selector and return element or array of elements.",source:"@site/docs/Guides/page-object.md",sourceDirName:"Guides",slug:"/Guides/page-object",permalink:"/docs/Guides/page-object",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/page-object.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/docs/Guides/memory"},next:{title:"Parallel Execution",permalink:"/docs/Guides/parallel"}},c={},p=[{value:"Create page object",id:"create-page-object",level:2},{value:"Working with collection",id:"working-with-collection",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"page-object"},"Page Object"),(0,o.kt)("p",null,"Framework provides capability to call getElement method from po object that resolves plain-english selector and return element or array of elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { po } = require('@qavajs/po');\n\nWhen(/^click '(.+)'$/, async function (alias) {\n    const element = await po.getElement(alias);\n    await element.waitForClickable();\n    await element.click();\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"When click '#1 of Multiple Component > Child Item'\n")),(0,o.kt)("p",null,"Framework provides capability to get single element from collection by index (#index of Collection) or inner text (#text in Collection)."),(0,o.kt)("h2",{id:"create-page-object"},"Create page object"),(0,o.kt)("p",null,"There are two methods $ and $$ that allow registering elements and collections.\nAn element can be defined as supported selector or as an instance of the component class."),(0,o.kt)("p",null,"Each not top-level component should have selector property or be inherited from Component class and accepted selector in constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n *  import po depending to selected driver\n *  wdio - @qavajs/po\n *  playwright - @qavajs/po-playwright\n *  testcafe - @qavajs/po-testcafe\n */\nconst { $, $$, Component } = require('@qavajs/po');\n\nclass MultipleComponent extends Component {\n    ChildItem = $('div');\n}\n\nclass SingleComponent {\n    selector = '.container';\n    ChildItem = $('.child-item');\n}\n\nclass App {\n    SingleElement = $('.single-element');\n    List = $$('.list li');\n    SingleComponent = $(new SingleComponent());\n    MultipleComponents = $$(new MultipleComponent('.list-components li'));\n}\n\nmodule.exports = new App();\n")),(0,o.kt)("h2",{id:"working-with-collection"},"Working with collection"),(0,o.kt)("p",null,"Collection elements can be accessed using prefixes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"By index:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"#{index} of Collection")," (access 1st element in collection)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I click '#1 of Collection'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"By partial text:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"#{text} in Collection")," (access first element which text contains {text})"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I click '#some partial text in Collection'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"By exact text:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"@{text} in Collection")," (access first element which text exactly match {text})"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I click '@some exact text in Collection'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"By regexp:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/{regexp}/ in Collection")," (access first element which text match {regexp} regexp)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I click '/^some regexp$/ in Collection'\n")))}m.isMDXComponent=!0}}]);