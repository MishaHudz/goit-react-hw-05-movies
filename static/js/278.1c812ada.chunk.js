"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{368:function(t,r,n){var e=n(689),a=n(87),u=n(184);r.Z=function(t){var r=t.moviesListArr,n=t.moviesPage,c=(0,e.TH)();return(0,u.jsx)("ul",{children:r.map((function(t){var r=t.id,e=t.original_title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"".concat(n?"".concat(r):"movies/".concat(r)),state:c,children:e})},r)}))})}},278:function(t,r,n){n.r(r);var e=n(861),a=n(439),u=n(757),c=n.n(u),i=n(368),s=n(791),o=n(87),f=n(596),p=n(207),h=n(184);r.default=function(){var t,r=(0,o.lr)(),n=(0,a.Z)(r,2),u=n[0],l=n[1],v=(0,s.useState)(null),d=(0,a.Z)(v,2),m=d[0],x=d[1],Z=(0,s.useMemo)((function(){return u.get("search")}),[u]);(0,s.useEffect)((function(){if(Z){var t=function(){var t=(0,e.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.xL)(Z);case 2:r=t.sent,n=r.results,x(n),0===n.length&&f.Am.error("Not found");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[]);var w=function(){var t=(0,e.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.xL)(u.get("search"));case 2:r=t.sent,n=r.results,x(n),0===n.length&&f.Am.error("Not found");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!u.get("search"))return f.Am.warn("Enter name of the film!");w()},children:[(0,h.jsx)("input",{type:"text",onChange:function(t){var r=""!==t.target.value?{search:t.target.value}:{};l(r)},value:null!==(t=u.get("search"))&&void 0!==t?t:""}),(0,h.jsx)("button",{children:"Search"})]}),m&&(0,h.jsx)(i.Z,{moviesListArr:m,moviesPage:!0})]})}},207:function(t,r,n){n.d(r,{M5:function(){return v},cI:function(){return h},qZ:function(){return s},xL:function(){return m},zO:function(){return f}});var e=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTUyYWExMWNlZTIwZWQ3MmNlODBlNTQ3ODk5ZTBiMiIsInN1YiI6IjY0N2UyNDE3Y2NkZTA0MDExOGFhYTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ScOi38rHNRdHf25i9RPscLJw2wEJk6tQ_ks7iMhFAhw"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/trending/movie/day",i);case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(r),i);case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(r,"/credits"),i);case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(r,"/reviews"),i);case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/search/movie?query=".concat(r),i);case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=278.1c812ada.chunk.js.map