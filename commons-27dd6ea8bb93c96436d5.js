(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2rMq":function(e,t,n){var r;!function(){"use strict";var A=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:A,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:A&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:A&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var A=n("q1tI"),o=r(A),a=r(n("2rMq")),i=r(n("Gytx"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l=[],s=void 0;function f(){s=e(l.map((function(e){return e.props}))),T.canUseDOM?t(s):n&&(s=n(s))}var T=function(e){function t(){return c(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!i(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},t.prototype.render=function(){return o.createElement(r,this.props)},t}(A.Component);return T.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",T.canUseDOM=a.canUseDOM,T}}},"8ypT":function(e,t,n){},ByQB:function(e,t){e.exports="data:audio/mpeg;base64,SUQzAwAAAAAAFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7TAAAAWdZEj9PYAA0ssa/8fgADO67UxERLbjjjFzQtMD0HAb6HqNXuMNjvhgeRLmCzr/ixY58zkzM0MzMzfw4Eg8TgQER07Es/9gwJ5/iypXEMnoQEwHozg8qSxLEcRCY5CvX3veixZTWztfZf6w8iK4JiO0DcR3ljjZLP4BDJ7+UpOzM7e9/mZnpuvXr77e95YWRHYNCZVe/AYHicGhMiXn7+U6nbe8zMzMzNKdqyk3vNKbTtmaUprFHKBBxRwPnwfP4kOcMffTOS0qTkLCRFlIuJspFsi4KQ3DZH8ZkQbgrp/HOOUcCnL6P06SjYJVjrkt7H83csaqwzfkcd9dj8LRjReWrW5myyz3xJKE1lK7KS7S3bt/9U8NxeVyKHpLJmDPTdvfcu0rK3XaWiu26K6m6AUkcYCvAb1FYC+VJAFN2T03ZGsdl9+MVZ9yBkC7WqM3Z+sWWwbe+nu3rv3LH4b7nnnhhMwdZzkj+4S/vPy13L//f8fi9bsbt2N27FJgymhXbKIy+sGRmMxi9fgHrNN4IdP/0i7Cz0gtASxAAADPQAAt5BkQREREAlEtxJjF/JUd7w7VQ9gp2aDR8rkOgRn0bOGF1bsMSErkOUT86dMUZhinKhqhRJBiFORfjSW1CcqNalEpi5PlFaN2JXE6cl9UKIvyFZewWWzU5MLLBxtFA2g6pVKoW5VMV5VDBXB1F9cS2uMRmwuXTUcyFe2anK0MKdQ17Jd69unkOZk9GnVtV0rVCwsqdbI71lYoyn/+7TATQAZDX07/PeAAfIkYuQ3pbCVWWFlgb8LcLefB1CtZidq1WvZtQn22GbMFlriz58+jSxakZUFcr//////////6rKq3NSikyxyFAINHGFBcZpS1ZL63XFLQZH7gqjRJ8QIn5cDjNUyickqME90ISyhTy5bGNRKfisqlNRQ+KREdIEbmu0ysqku7dyUdiiCoLA8FxIEgyFhCNA6D4MA0CIiGyQ273////lXU8aVTg25pWpwyUanjSqyQeNM39b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+7TAwAA/8AEuAAAAIK4AJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var A=n?n.call(r,e,t):void 0;if(void 0!==A)return!!A;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var u=o[c];if(!i(u))return!1;var l=e[u],s=t[u];if(!1===(A=n?n.call(r,l,s,u):void 0)||void 0===A&&l!==s)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},LbRr:function(e,t,n){"use strict";var r=n("q1tI"),A=n.n(r);n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=function(e,t){void 0===t&&(t={});var a,i=t,c=i.volume,u=void 0===c?1:c,l=i.playbackRate,s=void 0===l?1:l,f=i.soundEnabled,T=void 0===f||f,E=i.interrupt,p=void 0!==E&&E,d=i.onload,y=function(e,t){if(null==e)return{};var n,r,A={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(A[n]=e[n]);return A}(i,["volume","playbackRate","soundEnabled","interrupt","onload"]),h=A.a.useRef(null),m=A.a.useState(!1),S=m[0],b=m[1],v=A.a.useState(null),R=v[0],g=v[1],M=A.a.useState(null),_=M[0],O=M[1],w=function(){"function"==typeof d&&d.call(this),g(1e3*this.duration())};a=function(){n.e(9).then(n.t.bind(null,"HlzF",7)).then((function(t){h.current=t.Howl;var n=new h.current(o({src:[e],volume:u,onload:w},y));O(n)}))},Object(r.useEffect)(a,[]),A.a.useEffect((function(){h.current&&_&&O(new h.current(o({src:[e],volume:u,onload:w},y)))}),[e]),A.a.useEffect((function(){_&&(_.volume(u),_.rate(s))}),[u,s]);var P=A.a.useCallback((function(e){void 0===e&&(e={}),_&&(T||e.forceSoundEnabled)&&(p&&_.stop(),e.playbackRate&&_.rate(e.playbackRate),_.play(e.id),_.once("end",(function(){return b(!1)})),b(!0))}),[_,T,p]),N=A.a.useCallback((function(e){_&&(_.stop(e),b(!1))}),[_]),C=A.a.useCallback((function(e){_&&(_.pause(e),b(!1))}),[_]);return[P,{sound:_,stop:N,pause:C,isPlaying:S,duration:R}]},i=n("ByQB"),c=n.n(i);t.a=function(e){var t=e.title,n=a(c.a)[0],o=Object(r.useState)("light"),i=o[0],u=o[1],l=t?"fixed":"absolute";return A.a.createElement("header",{className:"bg-blog-header h-64 relative"},A.a.createElement("div",{className:"flex flex-col items-center h-64 hero-text justify-center text-center text-blog-bg relative z-10"},A.a.createElement("div",{className:"text-2xl w-3/4 transition-colors duration-500"},t||"Blog by Chetan Raj"),!t&&A.a.createElement("div",{className:"text-lg font-light md:w-2/5 lg:w-3/5 xl:w-2/5 mt-4 mx-6 lg:mx-0 md:mx-0 transition-colors duration-500"},"Web Designer & Developer,"," ",A.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/javascriptessentials/",className:"underline"},"Tech Instagrammer"),", Music, Movies, Gadgets, Iron Man, Batman.")),A.a.createElement("span",{className:"text-blog-bg home"},t?A.a.createElement("a",{className:"pointer transition-colors duration-500",href:"/blog"},A.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-left"},A.a.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),A.a.createElement("polyline",{points:"12 19 5 12 12 5"}))):A.a.createElement("a",{className:"pointer transition-colors duration-500",href:"https://chetanraj.in"},"HOME")),A.a.createElement("button",{className:i+" cursor-pointer z-20 "+l,title:i,onClick:function(){"light"===i?(document.body.className="dark",u("dark")):(document.body.className="light",u("light"))},onMouseUp:function(){n()}},A.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"theme"},"light"===i?A.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}):A.a.createElement(A.a.Fragment,null,A.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),A.a.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),A.a.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),A.a.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),A.a.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),A.a.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),A.a.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),A.a.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),A.a.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})))),A.a.createElement("div",{className:"bg"}))}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n("q1tI")),a=s(n("17x9")),i=s(n("8+s/")),c=s(n("bmMU")),u=n("v1p5"),l=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p,d,y,h=(0,i.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),m=(p=h,y=d=function(e){function t(){return T(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,A=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return r({},A,((t={})[n.type]=[].concat(A[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,A=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(A.type){case l.TAG_NAMES.TITLE:return r({},o,((t={})[A.type]=i,t.titleAttributes=r({},a),t));case l.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},a)})}return r({},o,((n={})[A.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var A;n=r({},n,((A={})[t]=e[t],A))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var A=e.props,o=A.children,a=f(A,["children"]),i=(0,u.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,o),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),A=r({},n);return t&&(A=this.mapChildrenToProps(t,A)),o.default.createElement(p,A)},A(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),d.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=p.peek,d.rewind=function(){var e=p.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);m.renderStatic=m.rewind,t.Helmet=m,t.default=m},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,A=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var i,c,u,l=r(t),s=r(n);if(l&&s){if((c=t.length)!=n.length)return!1;for(i=c;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(l!=s)return!1;var f=t instanceof Date,T=n instanceof Date;if(f!=T)return!1;if(f&&T)return t.getTime()==n.getTime();var E=t instanceof RegExp,p=n instanceof RegExp;if(E!=p)return!1;if(E&&p)return t.toString()==n.toString();var d=A(t);if((c=d.length)!==A(n).length)return!1;for(i=c;0!=i--;)if(!o.call(n,d[i]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(i=c;0!=i--;)if(!("_owner"===(u=d[i])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,A=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?A.call(this):"Invalid Date"}))},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},A=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(A).reduce((function(e,t){return e[A[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n("q1tI")),a=c(n("MgzW")),i=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var u,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(e){var t=d(e,i.TAG_NAMES.TITLE),n=d(e,i.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,i.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return d(e,i.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return A({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[i.TAG_NAMES.BASE]})).map((function(e){return e[i.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),A=0;A<r.length;A++){var o=r[A].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},p=function(e,t,n){var A={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===i.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===i.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==i.TAG_PROPERTIES.INNER_HTML&&c!==i.TAG_PROPERTIES.CSS_TEXT&&c!==i.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return A[n]||(A[n]={}),r[n]||(r[n]={}),!A[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),c=0;c<o.length;c++){var u=o[c],l=(0,a.default)({},A[u],r[u]);A[u]=l}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){y(e)}),0)}),h=function(e){return clearTimeout(e)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,R=function(e,t){var n=e.baseTag,r=e.bodyAttributes,A=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,T=e.titleAttributes;_(i.TAG_NAMES.BODY,r),_(i.TAG_NAMES.HTML,A),M(f,T);var E={baseTag:O(i.TAG_NAMES.BASE,n),linkTags:O(i.TAG_NAMES.LINK,o),metaTags:O(i.TAG_NAMES.META,a),noscriptTags:O(i.TAG_NAMES.NOSCRIPT,c),scriptTags:O(i.TAG_NAMES.SCRIPT,l),styleTags:O(i.TAG_NAMES.STYLE,s)},p={},d={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(d[e]=E[e].oldTags)})),t&&t(),u(e,p,d)},g=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),_(i.TAG_NAMES.TITLE,t)},_=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(i.HELMET_ATTRIBUTE),A=r?r.split(","):[],o=[].concat(A),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===A.indexOf(u)&&A.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);A.length===o.length?n.removeAttribute(i.HELMET_ATTRIBUTE):n.getAttribute(i.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(i.HELMET_ATTRIBUTE,a.join(","))}},O=function(e,t){var n=document.head||document.querySelector(i.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+i.HELMET_ATTRIBUTE+"]"),A=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===i.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===i.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(i.HELMET_ATTRIBUTE,"true"),A.some((function(e,t){return a=t,n.isEqualNode(e)}))?A.splice(a,1):o.push(n)})),A.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:A,newTags:o}},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[i.REACT_TAG_MAP[n]||n]=e[n],t}),t)},N=function(e,t,n){switch(e){case i.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[i.HELMET_ATTRIBUTE]=!0,A=P(n,r),[o.default.createElement(i.TAG_NAMES.TITLE,A,e)];var e,n,r,A},toString:function(){return function(e,t,n,r){var A=w(n),o=g(t);return A?"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+A+">"+l(o,r)+"</"+e+">":"<"+e+" "+i.HELMET_ATTRIBUTE+'="true">'+l(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case i.ATTRIBUTE_NAMES.BODY:case i.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,A=((r={key:n})[i.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=i.REACT_TAG_MAP[e]||e;if(n===i.TAG_PROPERTIES.INNER_HTML||n===i.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;A.dangerouslySetInnerHTML={__html:r}}else A[n]=t[e]})),o.default.createElement(e,A)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var A=Object.keys(r).filter((function(e){return!(e===i.TAG_PROPERTIES.INNER_HTML||e===i.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var A=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+A:A}),""),o=r.innerHTML||r.cssText||"",a=-1===i.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+A+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[i.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&S(v),e.defer?v=m((function(){R(e,(function(){v=null}))})):(R(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,A=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,T=e.titleAttributes;return{base:N(i.TAG_NAMES.BASE,t,r),bodyAttributes:N(i.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(i.ATTRIBUTE_NAMES.HTML,A,r),link:N(i.TAG_NAMES.LINK,o,r),meta:N(i.TAG_NAMES.META,a,r),noscript:N(i.TAG_NAMES.NOSCRIPT,c,r),script:N(i.TAG_NAMES.SCRIPT,u,r),style:N(i.TAG_NAMES.STYLE,l,r),title:N(i.TAG_NAMES.TITLE,{title:f,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:E([i.TAG_PROPERTIES.HREF],e),bodyAttributes:T(i.ATTRIBUTE_NAMES.BODY,e),defer:d(e,i.HELMET_PROPS.DEFER),encode:d(e,i.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(i.ATTRIBUTE_NAMES.HTML,e),linkTags:p(i.TAG_NAMES.LINK,[i.TAG_PROPERTIES.REL,i.TAG_PROPERTIES.HREF],e),metaTags:p(i.TAG_NAMES.META,[i.TAG_PROPERTIES.NAME,i.TAG_PROPERTIES.CHARSET,i.TAG_PROPERTIES.HTTPEQUIV,i.TAG_PROPERTIES.PROPERTY,i.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(i.TAG_NAMES.NOSCRIPT,[i.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:p(i.TAG_NAMES.SCRIPT,[i.TAG_PROPERTIES.SRC,i.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(i.TAG_NAMES.STYLE,[i.TAG_PROPERTIES.CSS_TEXT],e),title:s(e),titleAttributes:T(i.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=m,t.warn=b}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-27dd6ea8bb93c96436d5.js.map