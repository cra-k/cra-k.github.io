(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(c.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},c=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,c=e.hasQuery,s=void 0!==c&&c;return n||r&&s}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(n,r,c):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(a=n("Xuae"))&&a.__esModule?a:{default:a},s=n("lwAK"),i=n("FYa8"),o=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var c=!0,s=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){s=!0;var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?c=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?c=!1:t.add(r.type);break;case"meta":for(var o=0,l=f.length;o<l;o++){var u=f[o];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?c=!1:n.add(u);else{var d=r.props[u],p=a[u]||new Set;"name"===u&&s||!p.has(d)?(p.add(d),a[u]=p):c=!1}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(s.AmpStateContext),a=(0,r.useContext)(i.HeadManagerContext);return r.default.createElement(c.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,o.isInAmpMode)(n)},t)}h.rewind=function(){};var j=h;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),c=n("ZhPi"),s=n("Bnag");e.exports=function(e){return a(e)||r(e)||c(e)||s()}},WCZw:function(e,t,n){"use strict";function a(e){localStorage.setItem("theme",e),document.documentElement.className=e,"theme-light"===e?document.querySelectorAll("img[data-theme='switch']").forEach((function(e){e.src=e.src.replace("dark","light")})):document.querySelectorAll("img[data-theme='switch']").forEach((function(e){e.src=e.src.replace("light","dark")}))}function r(){"theme-dark"===localStorage.getItem("theme")?a("theme-light"):a("theme-dark")}function c(){var e=document.querySelector("#slider");e&&("theme-light"===localStorage.getItem("theme")?(a("theme-light"),e.checked=!1):(a("theme-dark"),e.checked=!0),e.addEventListener("change",r))}n.d(t,"a",(function(){return c}))},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),c=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),i=n("a1gu"),o=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){s(n,e);var t=l(n);function n(e){var c;return r(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(a(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},bYb9:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return N}));var a=n("nKUr"),r=n("g4pe"),c=n.n(r),s=n("YFqc"),i=n.n(s);function o(e){var t=e.navigation,n=e.isArticle,r=t||{prev:"/#",next:"/#"},c={previous:{link:r.prev,title:"Go to previous page",text:"Pr\xe9c\xe9dent",className:"prev-btn",icon:"fa fa-arrow-left"},next:{link:r.next,title:"Go to next page",text:"Suivant",className:"next-btn",icon:"fa fa-arrow-right"}};return Object(a.jsx)(N,{condition:n,children:Object(a.jsx)("nav",{className:"nav-btn-wrapper flex",children:Object.values(c).map((function(e){var t="/#"===e.link?"hidden":" ",n="".concat(e.className," ").concat(t);return n+=' nav-btn-item flex"',Object(a.jsx)(i.a,{href:e.link,children:Object(a.jsxs)("a",{className:n,title:e.title,children:[Object(a.jsx)("i",{className:e.icon,"aria-hidden":"true"}),Object(a.jsx)("span",{className:"nav-btn-text",children:e.text})]})},e.className)}))})})}function l(e){var t=e.isArticle;return Object(a.jsx)(N,{condition:t,children:Object(a.jsxs)("label",{className:"burger-wrapper",children:[Object(a.jsx)("input",{className:"burger-check hidden",type:"checkbox"}),Object(a.jsx)("div",{className:"burger-menu"})]})})}var u={facebook:"https://www.facebook.com/Club-de-Recherche-Acad%C3%A9mique-310130176356323/",github:"https://github.com/faouziMohamed",githubRepo:function(){return"".concat(this.github,"/cra")}};function d(){var e={facebook:{link:u.facebook,className:"cra-social-fb",icon:"fab fa-facebook-f"},github:{link:u.github,className:"cra-social-github",icon:"fab fa-github"}};return Object(a.jsxs)("section",{className:"app-footer-useful-link app-footer-section",children:[Object(a.jsx)("h1",{className:"useful-link-title app-footer-section-title",children:"Liens utiles"}),Object(a.jsx)("ul",{className:"cra-social-links-wrapper flex",children:Object.values(e).map((function(e){return Object(a.jsx)("li",{className:"cra-social-link-item",children:Object(a.jsx)(i.a,{href:e.link,children:Object(a.jsx)("a",{className:"".concat(e.className," a-cra-social-link"),children:Object(a.jsx)("i",{className:e.icon})})})},e.className)}))})]})}function f(){return Object(a.jsxs)("section",{className:"app-footer-github-related app-footer-section",children:[Object(a.jsx)("h1",{className:"github-related-title app-footer-section-title",children:"Am\xe9liorer cette page"}),Object(a.jsxs)("p",{className:"issues-text",children:["Reporter les erreurs du site sur"," ",Object(a.jsx)(i.a,{href:"".concat(u.githubRepo(),"/issues"),children:Object(a.jsx)("a",{className:"issue-github",children:"github/issues"})}),"."]}),Object(a.jsxs)("p",{className:"pull-request-text",children:["Pour contribuer \xe0 l'am\xe9lioration du site reportez-vous sur"," ",Object(a.jsx)(i.a,{href:"".concat(u.githubRepo(),"/pulls"),children:Object(a.jsx)("a",{className:"pull-request-github",children:"github/pull request"})}),"."]})]})}function p(){return Object(a.jsx)("aside",{className:"app-footer-copyright footer-top-item",children:Object(a.jsxs)("p",{children:["CRA - ACEM K\xe9nitra \xa9",Object(a.jsx)("span",{className:"app-footer-year","data-current-year":(new Date).getFullYear(),children:(new Date).getFullYear()})]})})}function h(){return Object(a.jsxs)("footer",{className:"app-footer flex",children:[Object(a.jsxs)("div",{className:"app-footer-content-wrapper footer-top-item flex",children:[Object(a.jsx)(d,{}),Object(a.jsx)(f,{})]}),Object(a.jsx)(p,{})]})}function j(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{className:"app-header",children:Object(a.jsxs)("nav",{className:"app-header-nav flex",children:[Object(a.jsx)(i.a,{href:"/",children:Object(a.jsx)("a",{className:"app-header-left-items flex",children:Object(a.jsx)(m,{})})}),Object(a.jsx)("div",{className:"app-header-right-items-parent flex",children:Object(a.jsx)(b,{})})]})})})}function m(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:"/images/cra-icon.png",alt:"CRA's logo",className:"acem-icon"}),Object(a.jsxs)("div",{className:"app-nav-title flex",children:[Object(a.jsx)("span",{className:"app-nav-title-item cra",children:"CRA"}),Object(a.jsx)("span",{className:"app-nav-title-item acem",children:"ACEM"}),Object(a.jsx)("span",{className:"app-nav-title-item kenitra",children:"KENITRA"})]})]})}function b(){return Object(a.jsxs)("div",{className:"app-header-right-items flex",children:[Object(a.jsxs)("label",{id:"switch",className:"switch flex",children:[Object(a.jsx)("input",{type:"checkbox",id:"slider",className:"hidden"}),Object(a.jsx)("span",{className:"slider round flex"})]}),Object(a.jsx)(i.a,{href:u.githubRepo(),children:Object(a.jsx)("a",{className:"app-header-github-btn",id:"app-github-link",children:Object(a.jsx)("i",{className:"app-header-github-icon fab fa-github"})})})]})}function x(e){var t=e.isArticle;return Object(a.jsx)(N,{condition:t,children:Object(a.jsx)("section",{id:"app-left-side",className:"app-left-side app-table-of-content",children:Object(a.jsxs)("div",{className:"toc-wrapper flex",children:[Object(a.jsx)("h1",{className:"table-of-content-title",children:"Les Grandes lignes"}),Object(a.jsx)("nav",{className:"table-of-content-nav",children:Object(a.jsx)("ul",{id:"table-of-content-list",className:"table-of-content-list"})})]})})})}function v(e){var t=e.article,n=e.children,r=e.metadata,c=e.navigation,s=void 0!==t;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{metadata:r}),Object(a.jsx)(j,{}),Object(a.jsx)(l,{isArticle:s}),Object(a.jsxs)("main",{className:"app-content main-content flex",children:[Object(a.jsx)(x,{isArticle:s}),Object(a.jsxs)("div",{className:"content-wrapper",children:[Object(a.jsx)("span",{id:"top"}),Object(a.jsxs)("article",{className:"main-article flex",children:[Object(a.jsx)(O,{titles:r}),n,Object(a.jsx)(o,{navigation:c,isArticle:s}),Object(a.jsx)(h,{}),Object(a.jsx)("a",{className:"to-top",alt:"Monter en haut de la page",href:"#top",children:""})]})]})]}),Object(a.jsx)(y,{})]})}function g(e){var t=e.metadata;t.ogImg||(t.ogImg="/images/dwIcons/acem-logo-white.svg");var n=t.path,r="https://cra-acem.tech".concat(n);return Object(a.jsxs)(c.a,{children:[Object(a.jsx)("meta",{charSet:"UTF-8"}),Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(a.jsx)("meta",{name:"author",content:t.authors}),Object(a.jsx)("meta",{name:"keywords",content:t.keywords}),Object(a.jsx)("meta",{name:"description",content:t.description}),Object(a.jsx)("meta",{name:"color-scheme",content:"dark light"}),Object(a.jsx)("meta",{name:"theme-color",content:"#4285f4"}),Object(a.jsx)("link",{rel:"canonical",href:r}),Object(a.jsx)("meta",{property:"og:url",content:r}),Object(a.jsx)("meta",{property:"og:title",content:t.title}),Object(a.jsx)("meta",{property:"og:description",content:t.description}),Object(a.jsx)("meta",{property:"og:image",content:t.ogImg}),Object(a.jsx)("meta",{property:"og:type",content:"article"}),Object(a.jsx)("meta",{property:"og:locale",content:"fr_FR"}),Object(a.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/images/favicon.ico"}),Object(a.jsx)("noscript",{children:Object(a.jsx)("link",{rel:"stylesheet",href:"./style/noscript.css"})})]})}function O(e){var t=e.titles;return Object(a.jsxs)("header",{className:"main-header",children:[Object(a.jsx)("h1",{className:"main-title",children:t.pageTitle}),Object(a.jsx)("p",{className:"main-sub-title",children:t.pageSubtitle})]})}function y(){return Object(a.jsx)("noscript",{children:Object(a.jsx)("div",{className:"noscript-layout",children:Object(a.jsxs)("p",{className:"no-script-text",children:[Object(a.jsx)("i",{className:"fas fa-exclamation-triangle"}),Object(a.jsx)("span",{children:"La page web fonctionne bien avec javascript activ\xe9"})]})})})}function N(e){var t=e.condition,n=e.children;return t&&Object(a.jsx)(a.Fragment,{children:n})}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var c=r(n("q1tI")),s=n("elyg"),i=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,a){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),r=n&&n.pathname||"/",d=c.default.useMemo((function(){var t=(0,s.resolveHref)(r,e.href,!0),n=a(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,s.resolveHref)(r,e.as):i||c}}),[r,e.href,e.as]),f=d.href,p=d.as,h=e.children,j=e.replace,m=e.shallow,b=e.scroll,x=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var v=c.Children.only(h),g=v&&"object"===typeof v&&v.ref,O=(0,o.useIntersection)({rootMargin:"200px"}),y=a(O,2),N=y[0],k=y[1],w=c.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,c.useEffect)((function(){var e=k&&t&&(0,s.isLocalURL)(f),a="undefined"!==typeof x?x:n&&n.locale,r=l[f+"%"+p+(a?"%"+a:"")];e&&!r&&u(n,f,p,{locale:a})}),[p,f,k,x,t,n]);var M={ref:w,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,c,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:c,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,f,p,j,m,b,x)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var A="undefined"!==typeof x?x:n&&n.locale,I=(0,s.getDomainLocale)(p,A,n&&n.locales,n&&n.domainLocales);M.href=I||(0,s.addBasePath)((0,s.addLocale)(p,A,n&&n.defaultLocale))}return c.default.cloneElement(v,M)};t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},vNVm:function(e,t,n){"use strict";var a=n("J4zp"),r=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,r=(0,c.useRef)(),l=(0,c.useState)(!1),u=a(l,2),d=u[0],f=u[1],p=(0,c.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),n||d||e&&e.tagName&&(r.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,c=a.observer,s=a.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,c.useEffect)((function(){i||d||(0,s.default)((function(){return f(!0)}))}),[d]),[p,d]};var c=n("q1tI"),s=r(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var o=new Map}}]);