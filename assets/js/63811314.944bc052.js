"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[262],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:2},l="Page Object",i={unversionedId:"Guides/page-object",id:"Guides/page-object",title:"Page Object",description:"Framework provides capability to call getElement method from po object that resolves plain-english selector and return element or array of elements.",source:"@site/docs/Guides/page-object.md",sourceDirName:"Guides",slug:"/Guides/page-object",permalink:"/docs/Guides/page-object",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/page-object.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/docs/Guides/memory"},next:{title:"Composing Steps",permalink:"/docs/Guides/composing-steps"}},c={},s=[{value:"Create page object",id:"create-page-object",level:2},{value:"Working with collection",id:"working-with-collection",level:2},{value:"Ignore hierarchy",id:"ignore-hierarchy",level:2},{value:"Optional selector property",id:"optional-selector-property",level:2},{value:"Immediate option",id:"immediate-option",level:2},{value:"Dynamic selectors",id:"dynamic-selectors",level:2},{value:"Native framework selectors",id:"native-framework-selectors",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"page-object"},"Page Object"),(0,a.kt)("p",null,"Framework provides capability to call getElement method from po object that resolves plain-english selector and return element or array of elements."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { po } = require('@qavajs/po');\n\nWhen(/^click '(.+)'$/, async function (alias) {\n    const element = await po.getElement(alias);\n    await element.waitForClickable();\n    await element.click();\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"When click '#1 of Multiple Component > Child Item'\n")),(0,a.kt)("p",null,"Framework provides capability to get single element from collection by index (#index of Collection) or inner text (#text in Collection)."),(0,a.kt)("h2",{id:"create-page-object"},"Create page object"),(0,a.kt)("p",null,"There are two methods $ and $$ that allow registering elements and collections.\nAn element can be defined as supported selector or as an instance of the component class."),(0,a.kt)("p",null,"Each not top-level component should have selector property or be inherited from Component class and accepted selector in constructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n *  import po depending to selected driver\n *  wdio - @qavajs/po\n *  playwright - @qavajs/po-playwright\n *  testcafe - @qavajs/po-testcafe\n */\nconst { $, $$, Component } = require('@qavajs/po');\n\nclass MultipleComponent extends Component {\n    ChildItem = $('div');\n}\n\nclass SingleComponent {\n    selector = '.container';\n    ChildItem = $('.child-item');\n}\n\nclass App {\n    SingleElement = $('.single-element');\n    List = $$('.list li');\n    SingleComponent = $(new SingleComponent());\n    MultipleComponents = $$(new MultipleComponent('.list-components li'));\n}\n\nmodule.exports = new App();\n")),(0,a.kt)("h2",{id:"working-with-collection"},"Working with collection"),(0,a.kt)("p",null,"Collection elements can be accessed using prefixes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"By index:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"#{index} of Collection")," (access 1st element in collection)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I click '#1 of Collection'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"By partial text:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"#{text} in Collection")," (access first element which text contains {text})"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I click '#some partial text in Collection'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"By exact text:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"@{text} in Collection")," (access first element which text exactly match {text})"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I click '@some exact text in Collection'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"By regexp:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/{regexp}/ in Collection")," (access first element which text match {regexp} regexp)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I click '/^some regexp$/ in Collection'\n")),(0,a.kt)("h2",{id:"ignore-hierarchy"},"Ignore hierarchy"),(0,a.kt)("p",null,"In case if child element and parent component doesn't have hierarchy dependency\nit's possible to pass extra parameter ",(0,a.kt)("em",{parentName:"p"},"ignoreHierarchy")," parameter to start traverse from root"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class ComponentThatDescribesNotWellDesignedDOMTree {\n    selector = '.container';\n    //ignoreHierarchy will ignore component selector .container and start traverse from root\n    ChildItem = $('.child-item', { ignoreHierarchy: true }); \n}\n")),(0,a.kt)("h2",{id:"optional-selector-property"},"Optional selector property"),(0,a.kt)("p",null,"If selector property is not provided for Component then parent element will be returned"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class ParentComponent {\n    selector = '.container';\n    ChildComponent = $(new ChildComponent()); \n}\n\nclass ChildComponent {\n    //Element will be searched in parent .container element\n    Element = $('.someElement');\n}\n")),(0,a.kt)("h2",{id:"immediate-option"},"Immediate option"),(0,a.kt)("p",null,"In order, you don't need to retry query for elements exists you can pass { immediate: true } option"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"When('I wait {string} not to be present', async function (alias) {\n    const element = await po.getElement(alias, { immediate: true }); // in case if element not found dummy not existing element be returned\n    await element.waitForExist({ reverse: true });\n});\n")),(0,a.kt)("h2",{id:"dynamic-selectors"},"Dynamic selectors"),(0,a.kt)("p",null,"In case you need to generate selector based on some data you can use dynamic selectors"),(0,a.kt)("p",null,"e.g"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Selector } = require('@qavajs/po');\n\nclass Component {\n    selector = '.container';\n    Element = $(Selector((index => `div:nth-child(${index})`))); // function should return valid selector \n}\n")),(0,a.kt)("p",null,"Then you can pass parameter to this function from Gherkin file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I click 'Component > Element (2)'\n")),(0,a.kt)("h2",{id:"native-framework-selectors"},"Native framework selectors"),(0,a.kt)("p",null,"It is also possible to use driver-built capabilities to return element. You can pass handler that has access to\ncurrent ",(0,a.kt)("inlineCode",{parentName:"p"},"page")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"browser")," in wdio) object."),(0,a.kt)("p",null,"Playwright example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { NativeSelector } = require('@qavajs/po-playwright');\n\nclass Component {\n    selector = '.container';\n    Element = $(NativeSelector(page => page.getByText(`some text`))); \n}\n")),(0,a.kt)("p",null,"WDIO example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { NativeSelector } = require('@qavajs/po');\n\nclass Component {\n    selector = '.container';\n    Element = $(NativeSelector(browser => browser.$('.single-element'))); \n}\n")))}m.isMDXComponent=!0}}]);