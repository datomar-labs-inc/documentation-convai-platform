/*! For license information please see c4f5d8e4.0529db21.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{141:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),l=a.n(r),c=a(165),o=a.n(c),s=a(167),i=a(166),u=a(163),d=a(164),m=a(142),h=a.n(m);const f=[{title:l.a.createElement(l.a.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:l.a.createElement(l.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:l.a.createElement(l.a.Fragment,null,"Focus on What Matters"),imageUrl:"img/undraw_docusaurus_tree.svg",description:l.a.createElement(l.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",l.a.createElement("code",null,"docs")," directory.")},{title:l.a.createElement(l.a.Fragment,null,"Powered by React"),imageUrl:"img/undraw_docusaurus_react.svg",description:l.a.createElement(l.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function v({imageUrl:e,title:t,description:a}){const n=Object(d.a)(e);return l.a.createElement("div",{className:o()("col col--4",h.a.feature)},n&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:h.a.featureImage,src:n,alt:t})),l.a.createElement("h3",null,t),l.a.createElement("p",null,a))}t.default=function(){const e=Object(u.a)(),{siteConfig:t={}}=e;return l.a.createElement(s.a,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},l.a.createElement("header",{className:o()("hero hero--primary",h.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("p",{className:"hero__subtitle"},t.tagline),l.a.createElement("div",{className:h.a.buttons},l.a.createElement(i.a,{className:o()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(d.a)("docs/doc1")},"Get Started")))),l.a.createElement("main",null,f&&f.length&&l.a.createElement("section",{className:h.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},f.map((e,t)=>l.a.createElement(v,Object(n.a)({key:t},e))))))))}},165:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(172),c=a(163),o=a(164),s=a(1),i=a(166),u=()=>null,d=a(168),m=a.n(d),h=a(165),f=a.n(h),v=a(84),g=a.n(v);const p=()=>r.a.createElement("span",{className:f()(g.a.toggle,g.a.moon)}),b=()=>r.a.createElement("span",{className:f()(g.a.toggle,g.a.sun)});var E=function(e){const{isClient:t}=Object(c.a)();return r.a.createElement(m.a,Object(s.a)({disabled:!t,icons:{checked:r.a.createElement(p,null),unchecked:r.a.createElement(b,null)}},e))};var k=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):"");n.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]),n.useEffect(()=>{try{const e=localStorage.getItem("theme");null!==e&&t(e)}catch(e){console.error(e)}},[t]);const a=n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t]);return[e,a]};var y=e=>{const[t,a]=Object(n.useState)(!0),[r,l]=Object(n.useState)(0),[c,o]=Object(n.useState)(0),s=Object(n.useCallback)(e=>{null!==e&&o(e.getBoundingClientRect().height)},[]),i=()=>{const e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-c,n=window.innerHeight;e<c||(r&&e>r?a(!1):e+n<t&&a(!0),l(e))};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[r,c]),{navbarRef:s,isNavbarVisible:t}},_=a(85),w=a.n(_);function N({to:e,href:t,label:a,position:n,...l}){const c=Object(o.a)(e);return r.a.createElement(i.a,Object(s.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:c},l),a)}var O=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:l={}}=t,{navbar:d={},disableDarkMode:m=!1}=l,{title:h,logo:v={},links:g=[],hideOnScroll:p=!1}=d,[b,_]=Object(n.useState)(!1),[O,j]=Object(n.useState)(!1),[C,S]=k(),{navbarRef:x,isNavbarVisible:T}=y(p),M=Object(n.useCallback)(()=>{document.body.style.overflow="hidden",_(!0)},[_]),F=Object(n.useCallback)(()=>{document.body.style.overflow="visible",_(!1)},[_]),P=Object(n.useCallback)(e=>S(e.target.checked?"dark":""),[S]),B=Object(o.a)(v.src);return r.a.createElement("nav",{ref:x,className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":b,[w.a.navbarHideable]:p,[w.a.navbarHidden]:!T})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:a},null!=v&&r.a.createElement("img",{className:"navbar__logo",src:B,alt:v.alt}),null!=h&&r.a.createElement("strong",{className:O?w.a.hideLogoText:""},h)),g.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(N,Object(s.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},g.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(N,Object(s.a)({},e,{key:t}))),!m&&r.a.createElement(E,{className:w.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===C,onChange:P}),r.a.createElement(u,{handleSearchBarToggle:j,isSearchBarExpanded:O}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:F,to:a},null!=v&&r.a.createElement("img",{className:"navbar__logo",src:B,alt:v.alt}),null!=h&&r.a.createElement("strong",null,h)),!m&&b&&r.a.createElement(E,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===C,onChange:P})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},g.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(N,Object(s.a)({className:"menu__link"},e,{onClick:F})))))))))},j=a(86),C=a.n(j);function S({to:e,href:t,label:a,...n}){const l=Object(o.a)(e);return r.a.createElement(i.a,Object(s.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:l},n),a)}const x=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var T=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:l,links:s=[],logo:i={}}=n||{},u=Object(o.a)(i.src);return n?r.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(S,e)))):null))),(i||l)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},r.a.createElement(x,{alt:i.alt,url:u})):r.a.createElement(x,{alt:i.alt,url:u})),l))):null};a(87);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:n,title:s,themeConfig:{image:i},url:u}=t,{children:d,title:m,noFooter:h,description:f,image:v,keywords:g,permalink:p,version:b}=e,E=m||`${s} \xb7 ${n}`,k=v||i,y=u+Object(o.a)(k),_=Object(o.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),a&&r.a.createElement("link",{rel:"shortcut icon",href:_}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),b&&r.a.createElement("meta",{name:"docsearch:version",content:b}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:y}),k&&r.a.createElement("meta",{property:"twitter:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),p&&r.a.createElement("meta",{property:"og:url",content:u+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(O,null),r.a.createElement("div",{className:"main-wrapper"},d),!h&&r.a.createElement(T,null))}},168:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=m(l),o=m(a(165)),s=m(a(8)),i=m(a(169)),u=m(a(170)),d=a(171);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(i.default,null),unchecked:c.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},171:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);