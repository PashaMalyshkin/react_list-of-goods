(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(3),o=s.n(r),i=s(4),c=s(5),a=s(8),u=s(6),l=s(7),b=s(1),h=s.n(b),d=(s(13),s(14),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(t){Object(a.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={sortType:n.NONE,isReversed:!1},t.reverseGoods=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.resetGoods=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(l.a)(t);return o.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&o.reverse(),o}(p,this.state),e=this.state,s=e.sortType,r=e.isReversed;return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:s===n.ALPHABET?"button is-info":"button is-info is-light",onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:s===n.LENGTH?"button is-success":"button is-success is-light",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:r?"button is-warning":"button is-warning is-light",onClick:this.reverseGoods,children:"Reverse"}),(s!==n.NONE||r)&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.resetGoods,children:"Reset"})]}),Object(d.jsx)("ul",{children:t.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(h.a.Component);o.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3e1aa8bf.chunk.js.map