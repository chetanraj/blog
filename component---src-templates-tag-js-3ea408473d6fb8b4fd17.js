(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Blog by Chetan Raj","description":"Web Designer & Web Developer, Tech Instagrammer, Music, Movies, Gadgets, Iron Man & Batman lover","author":"Chetan Raj"}}}}')},"LF+6":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz");e.a=function(t){var e=t.post,a=e.frontmatter,n=a.path,i=a.title,l=a.date,s=a.description,c=e.fields.readingTime,m=function(t){var e=Math.floor((new Date-t)/1e3),a=Math.floor(e/31536e3);if((a=Math.floor(e/86400))>=0)return a}(new Date(l));return r.a.createElement("div",{className:"post"},r.a.createElement(o.Link,{className:"text-base",to:n},r.a.createElement("div",{className:"text-2xl text-blog-primary transition-colors duration-500"},i),r.a.createElement("div",{className:"text-blog-secondary text-base font-normal mt-3"},s),r.a.createElement("div",{className:"text-blog-lightgray text-base font-light mt-3 mb-5 italic"},"wrote on ",l," · ",r.a.createElement("span",null,c.text)," ",m<35?r.a.createElement("span",{className:"hidden sm:inline-block"},"· ",r.a.createElement("span",{className:"new not-italic bg-blog-header px-2 rounded opacity-50 inline-block"},"New")):"")))}},ccoC:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",(function(){return c}));var n=a("q1tI"),r=a.n(n),o=a("LbRr"),i=a("W/9C"),l=a("vrFN"),s=a("LF+6");e.default=function(t){var e=t.data,a=t.pageContext.tag,n=e.allMdx,c=n.edges,m=n.totalCount,d=c.map((function(t){return r.a.createElement(s.a,{key:t.node.id,post:t.node})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:a}),r.a.createElement(l.a,{title:a+" posts"}),r.a.createElement("div",{className:"blog-post-container relative mb-20 h-sc"},r.a.createElement("div",{className:"blog-post-content text-blog-primary"},r.a.createElement("div",{className:"text-2xl mt-3 font-boogaloo text-blog-primary transition-colors duration-500"},m," Posts tagged - ",r.a.createElement("span",null,a)),r.a.createElement("div",{className:"posts mb-20"},d))),r.a.createElement(i.a,null))};var c="4195387132"},vrFN:function(t,e,a){"use strict";var n=a("EH9Q"),r=a("q1tI"),o=a.n(r),i=a("TJpk"),l=a.n(i);function s(t){var e=t.description,a=t.lang,r=t.meta,i=t.title,s=n.data.site,c=e||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},e.a=s}}]);
//# sourceMappingURL=component---src-templates-tag-js-3ea408473d6fb8b4fd17.js.map