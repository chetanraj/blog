(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/e88":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6VaU":function(t,e,n){"use strict";var r=n("XKFU"),a=n("xF/b"),i=n("S/j/"),o=n("ne8i"),l=n("2OiF"),c=n("zRwo");r(r.P,"Array",{flatMap:function(t){var e,n,r=i(this);return l(t),e=o(r.length),n=c(r,0),a(n,r,r,e,0,1,t,arguments[1]),n}}),n("nGyu")("flatMap")},"7VC1":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padEnd:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"9XZr":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},AphP:function(t,e,n){"use strict";var r=n("XKFU"),a=n("S/j/"),i=n("apmT");r(r.P+r.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=a(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},FLlr:function(t,e,n){var r=n("XKFU");r(r.P,"String",{repeat:n("l0Rn")})},I74W:function(t,e,n){"use strict";n("qncB")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},INYr:function(t,e,n){"use strict";var r=n("XKFU"),a=n("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(i)},Lgjv:function(t,e,n){var r=n("ne8i"),a=n("l0Rn"),i=n("vhPU");t.exports=function(t,e,n,o){var l=String(i(t)),c=l.length,s=void 0===n?" ":String(n),u=r(e);if(u<=c||""==s)return l;var m=u-c,f=a.call(s,Math.ceil(m/s.length));return f.length>m&&(f=f.slice(0,m)),o?f+l:l+f}},Nr18:function(t,e,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");t.exports=function(t){for(var e=r(this),n=i(e.length),o=arguments.length,l=a(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,s=void 0===c?n:a(c,n);s>l;)e[l++]=t;return e}},SPin:function(t,e,n){"use strict";var r=n("XKFU"),a=n("eyMr");r(r.P+r.F*!n("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(t){return a(this,t,arguments.length,arguments[1],!0)}})},Tze0:function(t,e,n){"use strict";n("qncB")("trim",(function(t){return function(){return t(this,3)}}))},YuTi:function(t,e,n){n("HAE/"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},bHtr:function(t,e,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},fA63:function(t,e,n){"use strict";n("qncB")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},l0Rn:function(t,e,n){"use strict";var r=n("RYi7"),a=n("vhPU");t.exports=function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},mGWK:function(t,e,n){"use strict";var r=n("XKFU"),a=n("aCFj"),i=n("RYi7"),o=n("ne8i"),l=[].lastIndexOf,c=!!l&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n("LyE8")(l)),"Array",{lastIndexOf:function(t){if(c)return l.apply(this,arguments)||0;var e=a(this),n=o(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},qncB:function(t,e,n){var r=n("XKFU"),a=n("vhPU"),i=n("eeVq"),o=n("/e88"),l="["+o+"]",c=RegExp("^"+l+l+"*"),s=RegExp(l+l+"*$"),u=function(t,e,n){var a={},l=i((function(){return!!o[t]()||"​"!="​"[t]()})),c=a[t]=l?e(m):o[t];n&&(a[n]=c),r(r.P+r.F*l,"String",a)},m=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(s,"")),t};t.exports=u},xCRD:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return f}));var r=n("q1tI"),a=n.n(r),i=n("TJpk"),o=n.n(i),l=n("Wbzz"),c=n("LbRr"),s=n("W/9C"),u=(n("8ypT"),n("LvDl"));var m=function(t){var e=Object(r.useState)(0)[1],n=0,a=Object(u.throttle)((function(){var r=(document.documentElement||document.body).scrollTop;e((function(t){return n=t,r})),t({previousScrollTop:n,currentScrollTop:r})}),250);Object(r.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[a])},f=(e.default=function(t){var e=t.data,n=t.pageContext,i=e.markdownRemark,u=e.markdownRemark.fields.readingTime,f=n.previous,p=n.next,d=Object(r.useState)(!1),g=d[0],h=d[1];m((function(t){var e=t.currentScrollTop;h(e>256)}));var v=g?"sticky opacity-100":"opacity-0";return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:i.frontmatter.title}),a.a.createElement("div",{className:"blog-post-container relative"},a.a.createElement(o.a,null,a.a.createElement("title",null,""+i.frontmatter.title),a.a.createElement("meta",{name:"description",content:""+i.frontmatter.description}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:title",content:""+i.frontmatter.title}),a.a.createElement("meta",{property:"og:url",content:"https://chetanraj.in/blog"+i.frontmatter.path+"/"}),a.a.createElement("meta",{property:"og:description",content:""+i.frontmatter.description}),a.a.createElement("meta",{property:"og:image",content:"https://chetanraj.in/blog/icons/icon-512x512.png"}),a.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{property:"twitter:url",content:"https://chetanraj.in/blog"+i.frontmatter.path+"/"}),a.a.createElement("meta",{property:"twitter:title",content:""+i.frontmatter.title}),a.a.createElement("meta",{property:"twitter:description",content:""+i.frontmatter.description}),a.a.createElement("meta",{property:"twitter:image",content:"https://chetanraj.in/blog/icons/icon-512x512.png"})),a.a.createElement("header",{className:"sticky-header h-16 "+v+" text-center text-xl top-0 w-full bg-blog-header text-blog-bg flex items-center justify-center transition duration-1000 z-10"},a.a.createElement("span",{className:"w-3/4"},i.frontmatter.title)),a.a.createElement("div",{className:""},a.a.createElement("span",{className:"absolute bg-blog-header left-2 opacity-50 px-2 reading-time rounded text-white top-1"},!1===i.frontmatter.published?"Draft":""),a.a.createElement("span",{className:"reading-time absolute right-2 top-1 text-blog-lightgray text-blog-primary"},u.text)),a.a.createElement("div",{className:"blog-post-content"},a.a.createElement("div",{className:"blog-post-text text-blog-primary text-lg leading-7 m-auto pb-6 sm:px-12 md:px-12 lg:px-12 xl:px-12",dangerouslySetInnerHTML:{__html:i.html}}),a.a.createElement("nav",{className:"m-auto pb-6 sm:px-12 text-blog-primary"},a.a.createElement("ul",{className:"flex"},a.a.createElement("li",{className:"flex-grow-0"},f&&f.frontmatter.published&&a.a.createElement(l.Link,{className:"text-base",to:f.frontmatter.path,rel:"Previous"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-3 inline-block align-middle color"},a.a.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),a.a.createElement("polyline",{points:"12 19 5 12 12 5"})),f.frontmatter.title)),a.a.createElement("li",{className:"flex-grow-0 text-right"},p&&a.a.createElement(l.Link,{className:"text-base",to:p.frontmatter.path,rel:"Next"},p.frontmatter.title,a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"ml-3 inline-block align-middle color"},a.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.a.createElement("polyline",{points:"12 5 19 12 12 19"})))))))),a.a.createElement(s.a,null))},"1494729933")},"xF/b":function(t,e,n){"use strict";var r=n("EWmC"),a=n("0/R4"),i=n("ne8i"),o=n("m0Pp"),l=n("K0xU")("isConcatSpreadable");t.exports=function t(e,n,c,s,u,m,f,p){for(var d,g,h=u,v=0,x=!!f&&o(f,p,3);v<s;){if(v in c){if(d=x?x(c[v],v,n):c[v],g=!1,a(d)&&(g=void 0!==(g=d[l])?!!g:r(d)),g&&m>0)h=t(e,n,d,i(d.length),h,m-1)-1;else{if(h>=9007199254740991)throw TypeError();e[h]=d}h++}v++}return h}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-956c71f58d002fd1da13.js.map