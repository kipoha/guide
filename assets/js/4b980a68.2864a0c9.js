"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={description:"An article on the various ways you can install disnake.",keywords:["disnake","bot","guide","tutorial","install","python"],hide_table_of_contents:!0},o="Installing disnake",l={unversionedId:"prerequisites/installing-disnake",id:"prerequisites/installing-disnake",title:"Installing disnake",description:"An article on the various ways you can install disnake.",source:"@site/docs/prerequisites/installing-disnake.mdx",sourceDirName:"prerequisites",slug:"/prerequisites/installing-disnake",permalink:"/prerequisites/installing-disnake",draft:!1,editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/prerequisites/installing-disnake.mdx",tags:[],version:"current",lastUpdatedBy:"Victor",lastUpdatedAt:1682950341,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{description:"An article on the various ways you can install disnake.",keywords:["disnake","bot","guide","tutorial","install","python"],hide_table_of_contents:!0},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Migrating from discord.py",permalink:"/prerequisites/migrating-from-dpy"}},s={},p=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=d("Tabs"),c=d("TabItem"),m={toc:p};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-disnake"},"Installing disnake"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To use disnake, you'll first need to install ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python"),". Like most other\n",(0,i.kt)("a",{parentName:"p",href:"https://discordpy.readthedocs.io/en/latest"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.py"))," forks, disnake supports Python 3.8 or higher. For a full\nwalkthrough on installing Python, we suggest following\n",(0,i.kt)("a",{parentName:"p",href:"https://realpython.com/installing-python/"},"this Real Python article"),", or\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.python-guide.org/starting/installation/"},"The Hitchhiker's Guide to Python"),".")),(0,i.kt)("p",null,"To use disnake, you'll need to install it via ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),", which is Python's standard package manager. Since pip comes\nstandard with Python 3.4 and above, there is no need to separately install it."),(0,i.kt)("p",null,"To install the library without full voice support, you can just run the following command:"),(0,i.kt)(u,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(c,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"py -3 -m pip install -U disnake\n"))),(0,i.kt)(c,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python3 -m pip install -U disnake\n"))),(0,i.kt)(c,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python3 -m pip install -U disnake\n")))),(0,i.kt)("p",null,"Otherwise to get voice support you should run the following command:"),(0,i.kt)(u,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(c,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'py -3 -m pip install -U "disnake[voice]"\n'))),(0,i.kt)(c,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'python3 -m pip install -U "disnake[voice]"\n'))),(0,i.kt)(c,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'python3 -m pip install -U "disnake[voice]"\n')))),(0,i.kt)("p",null,"To install the development version, do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pip install -U git+https://github.com/DisnakeDev/disnake#egg=disnake[speed,voice]\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"While installing voice on Linux, you must install the following packages via your favourite package manager (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"dnf"),", etc.) before running the above commands:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"libffi-dev (or ",(0,i.kt)("inlineCode",{parentName:"li"},"libffi-devel")," on some systems)"),(0,i.kt)("li",{parentName:"ul"},"python-dev (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"python3.6-dev")," for Python 3.6)"))),(0,i.kt)("p",null,"And that's it! With all the necessities installed, you're almost ready to start coding your bot."))}y.isMDXComponent=!0}}]);