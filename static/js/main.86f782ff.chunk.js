(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,function(t,e,n){t.exports={buttons:"style_buttons__1eOBS",incButton:"style_incButton__1jRyj",resetButton:"style_resetButton__1tKPJ"}},,function(t,e,n){t.exports={scoreboard:"style_scoreboard__3doO8",red:"style_red__2z5kw"}},,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),o=n.n(s),r=n(5),i=n.n(r),u=(n(12),n(6)),a=(n(13),n(4)),d=n.n(a),l=function(t){return Object(c.jsx)("div",{className:d.a.scoreboard,children:Object(c.jsx)("div",{className:5===t.count?d.a.red:"",children:t.count})})},b=n(2),j=n.n(b),O=function(t){return Object(c.jsxs)("div",{className:j.a.buttons,children:[Object(c.jsx)("button",{className:j.a.incButton,onClick:t.inc,disabled:5===t.count,children:"inc"}),Object(c.jsx)("button",{className:j.a.resetButton,onClick:t.reset,disabled:0===t.count,children:"reset"})]})};var _=function(){var t=Object(s.useState)(0),e=Object(u.a)(t,2),n=e[0],o=e[1];return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(l,{count:n}),Object(c.jsx)(O,{inc:function(){if(n<5)return o(n+1),Object(c.jsx)("div",{className:"scoreboard",children:n})},reset:function(){o(0)},count:n})]})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),o(t),r(t)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),f()}],[[14,1,2]]]);
//# sourceMappingURL=main.86f782ff.chunk.js.map