(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8ypT":function(t,e,a){},Bl7J:function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("LbRr"),i=a("W/9C");a("8ypT");e.a=function(t){var e=t.page,a=t.children,n="digitalgarden"===e?"A collection of notes, draft blogs I'm currently writing.":"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:n}),r.a.createElement("section",{className:"w-3/4 m-auto"},r.a.createElement("div",{className:""},a)),r.a.createElement(i.a,null))}},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Blog by Chetan Raj","description":"Web Designer & Web Developer, Tech Instagrammer, Music, Movies, Gadgets, Iron Man & Batman lover","author":"Chetan Raj"}}}}')},"LF+6":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz");e.a=function(t){var e=t.post,a=e.frontmatter,n=a.path,i=a.title,l=a.date,c=a.description,s=a.published,m=e.fields.readingTime,u=function(t){var e=Math.floor((new Date-t)/1e3),a=Math.floor(e/31536e3);if((a=Math.floor(e/86400))>=0)return a}(new Date(l));return r.a.createElement("div",{className:"post"},r.a.createElement(o.Link,{className:"text-base",to:n},r.a.createElement("div",{className:"text-2xl text-blog-primary transition-colors duration-500"},i),r.a.createElement("div",{className:"text-blog-secondary text-base font-normal mt-3 transition-colors duration-500"},c),r.a.createElement("div",{className:"text-blog-lightgray text-base font-light mt-3 mb-5"},"wrote on ",l," ·"," ",r.a.createElement("span",null,r.a.createElement("span",{className:"mr-2",role:"img","aria-label":"hourglass"},"⏳"),m.text)," ",s&&u<35?r.a.createElement("span",{className:"hidden sm:inline-block"},"· ",r.a.createElement("span",{className:"new not-italic bg-blog-header px-2 rounded inline-block"},"New")):"",!s&&r.a.createElement("span",{className:"hidden sm:inline-block"},"· ",r.a.createElement("span",{className:"new not-italic bg-blog-header px-2 rounded inline-block"},"Draft")))))}},enK5:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",(function(){return m}));a("f3/d"),a("a1Th"),a("Btvt"),a("XfO3"),a("HEwt"),a("rGqo"),a("rE2o"),a("ioFf"),a("Vd3H");var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),i=a("vrFN"),l=a("LF+6");function c(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}e.default=function(t){var e=c(t.data.allMdx.group).sort((function(t,e){return t.totalCount<=e.totalCount?1:-1})).map((function(t){return{title:t.fieldValue,content:t.nodes,length:t.nodes.length}}));return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Hi 👋"}),r.a.createElement("div",{className:"text-4xl font-light text-blog-darkgray mt-6 mb-10"},"Tags"),e.map((function(t){var e=t.title,a=t.content,n=t.length,o=a.map((function(t){return r.a.createElement(l.a,{key:t.id,post:t})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("div",{className:"text-2xl font-light text-blog-lightgray mb-4"},e),r.a.createElement("div",{className:"text-base font-light text-blog-lightgray mb-4"},n>1?n+" posts":n+" post")),r.a.createElement("div",{className:"posts mb-10"},o))})))};var m="3482297247"},vrFN:function(t,e,a){"use strict";var n=a("EH9Q"),r=a("q1tI"),o=a.n(r),i=a("qhky");function l(t){var e=t.description,a=t.lang,r=t.meta,l=t.title,c=n.data.site,s=e||c.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l}}]);
//# sourceMappingURL=component---src-pages-tags-js-d944a602b3e847e8a8e1.js.map