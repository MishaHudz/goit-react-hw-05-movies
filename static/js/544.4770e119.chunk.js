"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{368:function(t,n,r){var e=r(689),a=r(87),u=r(184);n.Z=function(t){var n=t.moviesListArr,r=t.moviesPage,c=(0,e.TH)();return(0,u.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.original_title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"".concat(r?"".concat(n):"movies/".concat(n)),state:c,children:e})},n)}))})}},544:function(t,n,r){r.r(n);var e=r(861),a=r(439),u=r(757),c=r.n(u),i=r(368),s=r(791),o=r(207),f=r(184);n.default=function(){var t=(0,s.useState)(null),n=(0,a.Z)(t,2),r=n[0],u=n[1];return(0,s.useEffect)((function(){if(!r){var t=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.qZ)();case 2:n=t.sent,r=n.results,u(r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[r]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Trending today"}),r&&(0,f.jsx)(i.Z,{moviesListArr:r})]})}},207:function(t,n,r){r.d(n,{M5:function(){return l},cI:function(){return h},qZ:function(){return s},xL:function(){return Z},zO:function(){return f}});var e=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTUyYWExMWNlZTIwZWQ3MmNlODBlNTQ3ODk5ZTBiMiIsInN1YiI6IjY0N2UyNDE3Y2NkZTA0MDExOGFhYTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ScOi38rHNRdHf25i9RPscLJw2wEJk6tQ_ks7iMhFAhw"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/trending/movie/day",i);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(n),i);case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(n,"/credits"),i);case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(n,"/reviews"),i);case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/search/movie?query=".concat(n),i);case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=544.4770e119.chunk.js.map