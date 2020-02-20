/*! For license information please see 75.56afc37d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{207:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(214),c=a(202),o=a(203),i=a(1),s=a(9),u=a(208),d=function(){return null},h=a(210),m=a.n(h),f=a(207),v=a.n(f),p=a(118),b=a.n(p),g=function(){return r.a.createElement("span",{className:v()(b.a.toggle,b.a.moon)})},k=function(){return r.a.createElement("span",{className:v()(b.a.toggle,b.a.sun)})},E=function(e){var t=Object(c.a)().isClient;return r.a.createElement(m.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(g,null),unchecked:r.a.createElement(k,null)}},e))},y=function(){var e=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):""),t=e[0],a=e[1];n.useEffect((function(){document.documentElement.setAttribute("data-theme",t)}),[t]),n.useEffect((function(){try{var e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}}),[a]);var r=n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a]);return[t,r]},_=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],l=Object(n.useState)(0),c=l[0],o=l[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]),h=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-s,a=window.innerHeight;e<s||(c&&e>c?r(!1):e+a<t&&r(!0),o(e))};return Object(n.useEffect)((function(){if(e)return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[c,s]),{navbarRef:d,isNavbarVisible:a}},w=a(119),N=a.n(w);function O(e){var t=e.to,a=e.href,n=e.label,l=(e.position,Object(s.a)(e,["to","href","label","position"])),c=Object(o.a)(t);return r.a.createElement(u.a,Object(i.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:c},l),n)}var j=function(){var e,t=Object(c.a)().siteConfig,a=void 0===t?{}:t,l=a.baseUrl,s=a.themeConfig,h=void 0===s?{}:s,m=h.navbar,f=void 0===m?{}:m,p=h.disableDarkMode,b=void 0!==p&&p,g=f.title,k=f.logo,w=void 0===k?{}:k,j=f.links,C=void 0===j?[]:j,S=f.hideOnScroll,x=void 0!==S&&S,T=Object(n.useState)(!1),M=T[0],P=T[1],F=Object(n.useState)(!1),B=F[0],L=F[1],X=y(),I=X[0],D=X[1],R=_(x),A=R.navbarRef,H=R.isNavbarVisible,U=Object(n.useCallback)((function(){document.body.style.overflow="hidden",P(!0)}),[P]),V=Object(n.useCallback)((function(){document.body.style.overflow="visible",P(!1)}),[P]),Y=Object(n.useCallback)((function(e){return D(e.target.checked?"dark":"")}),[D]),J=Object(o.a)(w.src);return r.a.createElement("nav",{ref:A,className:v()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":M},e[N.a.navbarHideable]=x,e[N.a.navbarHidden]=!H,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,{className:"navbar__brand",to:l},null!=w&&r.a.createElement("img",{className:"navbar__logo",src:J,alt:w.alt}),null!=g&&r.a.createElement("strong",{className:B?N.a.hideLogoText:""},g)),C.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(O,Object(i.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},C.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(O,Object(i.a)({},e,{key:t}))})),!b&&r.a.createElement(E,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===I,onChange:Y}),r.a.createElement(d,{handleSearchBarToggle:L,isSearchBarExpanded:B}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,{className:"navbar__brand",onClick:V,to:l},null!=w&&r.a.createElement("img",{className:"navbar__logo",src:J,alt:w.alt}),null!=g&&r.a.createElement("strong",null,g)),!b&&M&&r.a.createElement(E,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===I,onChange:Y})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},C.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(O,Object(i.a)({className:"menu__link"},e,{onClick:V})))})))))))},C=a(120),S=a.n(C);function x(e){var t=e.to,a=e.href,n=e.label,l=Object(s.a)(e,["to","href","label"]),c=Object(o.a)(t);return r.a.createElement(u.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),n)}var T=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var M=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,h=Object(o.a)(d.src);return a?r.a.createElement("footer",{className:v()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(x,e))}))):null)}))),(d||l)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:S.a.footerLogoLink},r.a.createElement(T,{alt:d.alt,url:h})):r.a.createElement(T,{alt:d.alt,url:h})),l))):null};a(121);t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,m=e.title,f=e.noFooter,v=e.description,p=e.image,b=e.keywords,g=e.permalink,k=e.version,E=m||s+" \xb7 "+i,y=p||u,_=d+Object(o.a)(y),w=Object(o.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),k&&r.a.createElement("meta",{name:"docsearch:version",content:k}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:_}),y&&r.a.createElement("meta",{property:"twitter:image",content:_}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),g&&r.a.createElement("meta",{property:"og:url",content:d+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(j,null),r.a.createElement("div",{className:"main-wrapper"},h),!f&&r.a.createElement(M,null))}},210:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=h(l),o=h(a(207)),i=h(a(11)),s=h(a(211)),u=h(a(212)),d=a(213);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},211:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},212:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},213:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(209);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);