"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[51],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},l="@qavajs/template",s={unversionedId:"Modules/template",id:"Modules/template",title:"@qavajs/template",description:"Module that allow to define step definitions on Gherkin language.",source:"@site/docs/Modules/template.md",sourceDirName:"Modules",slug:"/Modules/template",permalink:"/docs/Modules/template",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/template.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/docs/category/modules"},next:{title:"Formatters",permalink:"/docs/category/formatters"}},i={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qavajstemplate"},"@qavajs/template"),(0,a.kt)("p",null,"Module that allow to define step definitions on Gherkin language."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install @qavajs/template")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Templates\n\n  Scenario: I login\n    When I open 'https://your-app.com'\n    And I type 'username' to 'Login Form > Username Input'\n    And I type 'password' to 'Login Form > Password Input'\n    And I click 'Login Form > Login Button'\n")),(0,a.kt)("p",null,"Then following template can be called from scenario as simple step"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Auth\n\n  Scenario: Verify that user is able to login\n    When I login\n    Then I expect 'Header' to be visible\n")),(0,a.kt)("p",null,"Templates also can accept parameters as < param> e.g"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Templates\n\n  Scenario: I login as <username> with <password> password\n    When I open 'https://your-app.com'\n    And I type '<username>' to 'Login Form > Username Input'\n    And I type '<password>' to 'Login Form > Password Input'\n    And I click 'Login Form > Login Button'\n")),(0,a.kt)("p",null,"Then following template can be called with actual params"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Auth\n\n  Scenario: Verify that user is able to login\n    When I login as 'admin' with 'admin' password\n    Then I expect 'Header' to be visible\n")),(0,a.kt)("p",null,"To use templates their location need to be passed to templates property of config file and library need to be listed\nin require"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    default: {\n        require: [\n            'node_modules/@qavajs/steps-config-loader'\n        ],\n        requireModule: [\n            '@qavajs/template'\n        ],\n        templates: ['templates/*.feature']\n    }\n}\n")))}u.isMDXComponent=!0}}]);