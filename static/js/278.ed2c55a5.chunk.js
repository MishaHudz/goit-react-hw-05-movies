"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{368:function(t,n,e){var r=e(689),a=e(87),u=e(184);n.Z=function(t){var n=t.moviesListArr,e=t.moviesPage,c=(0,r.TH)();return(0,u.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.original_title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"".concat(e?"".concat(n):"movies/".concat(n)),state:c,children:r})},n)}))})}},278:function(t,n,e){e.r(n);var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(596),s=e(368),o=e(791),f=e(87),p=e(207),h=e(184);n.default=function(){var t=(0,f.lr)(),n=(0,a.Z)(t,2),e=n[0],u=n[1],l=(0,o.useState)(null),v=(0,a.Z)(l,2),m=v[0],d=v[1],x=(0,o.useState)(""),Z=(0,a.Z)(x,2),w=Z[0],y=Z[1],k=(0,o.useState)(null),b=(0,a.Z)(k,2),g=b[0],I=b[1],j=(0,o.useMemo)((function(){return e.get("search")}),[e]);return(0,o.useEffect)((function(){if(j){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.xL)(j);case 3:if(n=t.sent,e=n.results,d(e),y(""),I(null),0!==e.length){t.next=10;break}throw new Error("Not Found");case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),I(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();t()}}),[j]),(0,o.useEffect)((function(){g&&i.Am.error(g)}),[g]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!w)return i.Am.warn("Enter name of the film!");u(""!==w?{search:w}:{})},children:[(0,h.jsx)("input",{type:"text",onChange:function(t){y(t.target.value)},value:w}),(0,h.jsx)("button",{children:"Search"})]}),m&&(0,h.jsx)(s.Z,{moviesListArr:m,moviesPage:!0})]})}},207:function(t,n,e){e.d(n,{M5:function(){return v},cI:function(){return h},qZ:function(){return s},xL:function(){return d},zO:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTUyYWExMWNlZTIwZWQ3MmNlODBlNTQ3ODk5ZTBiMiIsInN1YiI6IjY0N2UyNDE3Y2NkZTA0MDExOGFhYTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ScOi38rHNRdHf25i9RPscLJw2wEJk6tQ_ks7iMhFAhw"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/trending/movie/day",i);case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(n),i);case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(n,"/credits"),i);case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(n,"/reviews"),i);case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/search/movie?query=".concat(n),i);case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=278.ed2c55a5.chunk.js.map