(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),u.canUseDOM?t(c):n&&(c=n(c))}var u=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(u,"canUseDOM",A),u}}},ByQB:function(e,t){e.exports="data:audio/mpeg;base64,SUQzAwAAAAAAFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7TAAAAWdZEj9PYAA0ssa/8fgADO67UxERLbjjjFzQtMD0HAb6HqNXuMNjvhgeRLmCzr/ixY58zkzM0MzMzfw4Eg8TgQER07Es/9gwJ5/iypXEMnoQEwHozg8qSxLEcRCY5CvX3veixZTWztfZf6w8iK4JiO0DcR3ljjZLP4BDJ7+UpOzM7e9/mZnpuvXr77e95YWRHYNCZVe/AYHicGhMiXn7+U6nbe8zMzMzNKdqyk3vNKbTtmaUprFHKBBxRwPnwfP4kOcMffTOS0qTkLCRFlIuJspFsi4KQ3DZH8ZkQbgrp/HOOUcCnL6P06SjYJVjrkt7H83csaqwzfkcd9dj8LRjReWrW5myyz3xJKE1lK7KS7S3bt/9U8NxeVyKHpLJmDPTdvfcu0rK3XaWiu26K6m6AUkcYCvAb1FYC+VJAFN2T03ZGsdl9+MVZ9yBkC7WqM3Z+sWWwbe+nu3rv3LH4b7nnnhhMwdZzkj+4S/vPy13L//f8fi9bsbt2N27FJgymhXbKIy+sGRmMxi9fgHrNN4IdP/0i7Cz0gtASxAAADPQAAt5BkQREREAlEtxJjF/JUd7w7VQ9gp2aDR8rkOgRn0bOGF1bsMSErkOUT86dMUZhinKhqhRJBiFORfjSW1CcqNalEpi5PlFaN2JXE6cl9UKIvyFZewWWzU5MLLBxtFA2g6pVKoW5VMV5VDBXB1F9cS2uMRmwuXTUcyFe2anK0MKdQ17Jd69unkOZk9GnVtV0rVCwsqdbI71lYoyn/+7TATQAZDX07/PeAAfIkYuQ3pbCVWWFlgb8LcLefB1CtZidq1WvZtQn22GbMFlriz58+jSxakZUFcr//////////6rKq3NSikyxyFAINHGFBcZpS1ZL63XFLQZH7gqjRJ8QIn5cDjNUyickqME90ISyhTy5bGNRKfisqlNRQ+KREdIEbmu0ysqku7dyUdiiCoLA8FxIEgyFhCNA6D4MA0CIiGyQ273////lXU8aVTg25pWpwyUanjSqyQeNM39b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+7TAwAA/8AEuAAAAIK4AJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},LbRr:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz");n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A=function(e,t){void 0===t&&(t={});var o,A=t,c=A.volume,l=void 0===c?1:c,s=A.playbackRate,u=void 0===s?1:s,f=A.soundEnabled,p=void 0===f||f,d=A.interrupt,m=void 0!==d&&d,h=A.onload,y=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(A,["volume","playbackRate","soundEnabled","interrupt","onload"]),b=a.a.useRef(null),g=a.a.useState(!1),v=g[0],w=g[1],E=a.a.useState(null),T=E[0],x=E[1],C=a.a.useState(null),k=C[0],S=C[1],O=function(){"function"==typeof h&&h.call(this),x(1e3*this.duration())};o=function(){var t=!1;return n.e(12).then(n.t.bind(null,"HlzF",7)).then((function(n){if(!t){b.current=n.Howl;var r=new b.current(i({src:[e],volume:l,rate:u,onload:O},y));S(r)}})),function(){t=!0}},Object(r.useEffect)(o,[]),a.a.useEffect((function(){b.current&&k&&S(new b.current(i({src:[e],volume:l,onload:O},y)))}),[e]),a.a.useEffect((function(){k&&(k.volume(l),k.rate(u))}),[l,u]);var j=a.a.useCallback((function(e){void 0===e&&(e={}),k&&(p||e.forceSoundEnabled)&&(m&&k.stop(),e.playbackRate&&k.rate(e.playbackRate),k.play(e.id),k.once("end",(function(){return w(!1)})),w(!0))}),[k,p,m]),N=a.a.useCallback((function(e){k&&(k.stop(e),w(!1))}),[k]),L=a.a.useCallback((function(e){k&&(k.pause(e),w(!1))}),[k]);return[j,{sound:k,stop:N,pause:L,isPlaying:v,duration:T}]},c=n("ByQB"),l=n.n(c);t.a=function(e){var t=e.title,n=A(l.a)[0],i=t?"fixed":"absolute",c=Object(r.useState)((function(){var e="undefined"!=typeof window?window.localStorage.getItem("theme"):"light";if("string"==typeof e)return e;var t=window.matchMedia("(prefers-color-scheme: dark)");return"boolean"==typeof t.matches&&t.matches?"dark":"light"})),s=c[0],u=c[1];return a.a.createElement("header",{className:"bg-blog-header h-64 relative"},a.a.createElement("div",{className:"flex flex-col items-center h-64 hero-text justify-center text-center text-blog-bg relative z-10"},a.a.createElement("div",{className:"text-2xl w-3/4 transition-colors duration-500"},t||"Blog by Chetan Raj"),!t&&a.a.createElement("div",{className:"text-lg font-light md:w-2/5 lg:w-3/5 xl:w-2/5 mt-4 mx-6 lg:mx-0 md:mx-0 transition-colors duration-500"},"Web Designer & Developer,"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/javascriptessentials/",className:"underline"},"Tech Instagrammer"),", Music, Movies, Gadgets, Iron Man & Batman lover.")),a.a.createElement("span",{className:"text-blog-bg home"},t?a.a.createElement(o.Link,{className:"pointer transition-colors duration-500",to:"/"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-left"},a.a.createElement("polyline",{points:"12 19 5 12 12 5"}))):a.a.createElement("a",{className:"pointer transition-colors duration-500",href:"https://chetanraj.in"},"HOME")),a.a.createElement("div",{className:"flex "+s+" cursor-pointer z-20 "+i},a.a.createElement("a",{className:"mx-4 hidden md:block",href:"/blog/rss.xml",title:"RSS"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"theme"},a.a.createElement("path",{d:"M4 11a9 9 0 0 1 9 9"}),a.a.createElement("path",{d:"M4 4a16 16 0 0 1 16 16"}),a.a.createElement("circle",{cx:"5",cy:"19",r:"1"}))),a.a.createElement("button",{className:"mx-4",title:s,onClick:function(){"light"===s?(document.body.className="dark",u("dark"),window.localStorage.setItem("theme","dark")):(document.body.className="light",u("light"),window.localStorage.setItem("theme","light"))},onMouseUp:function(){n()}},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"theme"},"light"===s?a.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}):a.a.createElement(a.a.Fragment,null,a.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),a.a.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),a.a.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),a.a.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),a.a.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),a.a.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),a.a.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),a.a.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),a.a.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))))),a.a.createElement("div",{className:"bg"}))}},"W/9C":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),a=n.n(r);function o(){return a.a.createElement("footer",{className:"bg-blog-header"},a.a.createElement("div",{className:"p-6 sm:flex justify-between items-center"},a.a.createElement("div",{className:"left pt-6"},a.a.createElement("a",{className:"text-2xl text-blog-bg pointer transition-colors duration-500",href:"https://chetanraj.in"},"Chetan Raj"),a.a.createElement("div",{className:"opacity-50 text-blog-bg pointer transition-colors duration-500 pt-16 hidden sm:block md:block lg:block xl:block"},"© Chetan Raj. All Rights Reserved.")),a.a.createElement("div",{className:"right pt-10 sm:pt-0 flex"},a.a.createElement("div",{className:"pr-20 social"},a.a.createElement("h4",{className:"opacity-50 text-blog-bg pointer transition-colors duration-500"},"Social"),a.a.createElement("div",{className:"grid grid-cols-1  pt-4 w-full"},a.a.createElement("a",{className:"text-blog-bg pointer transition-colors duration-500",href:"https://twitter.com/chetan_raj"},"Twitter"),a.a.createElement("a",{className:"text-blog-bg pointer transition-colors duration-500 pt-2",href:"https://github.com/chetanraj"},"GitHub"),a.a.createElement("a",{className:"text-blog-bg pointer transition-colors duration-500 pt-2",href:"https://www.instagram.com/thecjstream/"},"Instagram"))),a.a.createElement("div",{className:"links"},a.a.createElement("h4",{className:"opacity-50 text-blog-bg pointer transition-colors duration-500"},"Links"),a.a.createElement("div",{className:"grid grid-cols-1  pt-4 w-full"},a.a.createElement("a",{className:"text-blog-bg pointer transition-colors duration-500",href:"https://snpt.netlify.app/"},a.a.createElement("span",{className:"mr-2",role:"img","aria-label":"laptop"},"💻"),"Snpt"),a.a.createElement("a",{className:"text-blog-bg pointer transition-colors duration-500 pt-2",href:"https://esexplorer.netlify.app/"},a.a.createElement("span",{className:"mr-2",role:"img","aria-label":"magnifying glass"},"🔍"),"ES Explorer"),a.a.createElement("a",{className:"text-blog-bg pointer transition-colors duration-500 pt-2",href:"https://www.instagram.com/javascriptessentials/"},a.a.createElement("span",{className:"mr-2",role:"img","aria-label":"globe"},"🌏"),"JavaScript Essentials")))),a.a.createElement("div",{className:"opacity-50 text-blog-bg pointer transition-colors duration-500 pt-16 block sm:hidden md:hidden lg:hidden xl:hidden"},"© Chetan Raj. All Rights Reserved.")))}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var A,c,l,s=r(t),u=r(n);if(s&&u){if((c=t.length)!=n.length)return!1;for(A=c;0!=A--;)if(!e(t[A],n[A]))return!1;return!0}if(s!=u)return!1;var f=t instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==n.getTime();var d=t instanceof RegExp,m=n instanceof RegExp;if(d!=m)return!1;if(d&&m)return t.toString()==n.toString();var h=a(t);if((c=h.length)!==a(n).length)return!1;for(A=c;0!=A--;)if(!o.call(n,h[A]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(A=c;0!=A--;)if(!("_owner"===(l=h[A])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,A=n("17x9"),c=n.n(A),l=n("8+s/"),s=n.n(l),u=n("bmMU"),f=n.n(u),p=n("q1tI"),d=n.n(p),m=n("MgzW"),h=n.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",T="href",x="http-equiv",C="innerHTML",k="itemprop",S="name",O="property",j="rel",N="src",L="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",I="defer",P="encodeSpecialCharacters",F="onChangeClientState",q="titleTemplate",H=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),W=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=_(e,v.TITLE),n=_(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,M);return t||r||void 0},V=function(e){return _(e,F)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var A=o[i],c=A.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(A)||A!==C&&A!==E&&A!==k||(n=A)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var A=o[i],c=h()({},r[A],a[A]);r[A]=c}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,A=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,u=e.title,f=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,a),Ae(u,f);var p={baseTag:le(v.BASE,n),linkTags:le(v.LINK,o),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,A),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},d={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,d,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},Ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),A=0;A<i.length;A++){var c=i[A],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var u=o.length-1;u>=0;u--)n.removeAttribute(o[u]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var A=void 0===t[r]?"":t[r];n.setAttribute(r,A)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=ue(n,r),[d.a.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return ue(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=R[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===W.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,A=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,u=void 0===s?"":s,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(b,a,r),link:fe(v.LINK,o,r),meta:fe(v.META,i,r),noscript:fe(v.NOSCRIPT,A,r),script:fe(v.SCRIPT,c,r),style:fe(v.STYLE,l,r),title:fe(v.TITLE,{title:u,titleAttributes:f},r)}},de=s()((function(e){return{baseTag:G([T,L],e),bodyAttributes:Q(y,e),defer:_(e,I),encode:_(e,P),htmlAttributes:Q(b,e),linkTags:X(v.LINK,[j,T],e),metaTags:X(v.META,[S,w,x,O,k],e),noscriptTags:X(v.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:X(v.SCRIPT,[N,C],e),styleTags:X(v.STYLE,[E],e),title:J(e),titleAttributes:Q(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),me=(a=de,i=o=function(e){function t(){return K(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return U({},a,((t={})[r.type]=i,t.titleAttributes=U({},o),t));case v.BODY:return U({},a,{bodyAttributes:U({},o)});case v.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-b7e2d22f43323b96d450.js.map