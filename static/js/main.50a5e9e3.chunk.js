(this["webpackJsonpword-master"]=this["webpackJsonpword-master"]||[]).push([[0],{89:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),c=n.n(a),i=n(12),o=n.n(i),s=(n(89),n(24)),u=n(14),l=n(126),d=n(147),j=n(129),b=n(42),f=240,h=Object(l.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(f,"px)"),marginLeft:f},drawer:{width:f,flexShrink:0},drawerPaper:{width:f},drawerContainer:{overflow:"auto"},content:{flexGrow:1}}}));var O=function(e){var t=e.appTitle,n=e.side,a=e.children,c=h();return Object(r.jsxs)("div",{className:c.root,children:[Object(r.jsxs)(d.a,{className:c.drawer,classes:{paper:c.drawerPaper},variant:"permanent",anchor:"left",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)(b.a,{variant:"h6",children:t})}),Object(r.jsx)("div",{className:c.drawerContainer,children:n})]}),Object(r.jsx)("main",{className:c.content,children:a})]})},p=n(52),x=n(25),m=n(130),v=n(131),w=n(132),k=n(144),g=n(134),y=n(135),C=n(136),N=n(137),S=n(133),L=n(138),I=n(71),F=n.n(I);function T(){return Object(a.useContext)(u.a)}var B=Object(l.a)({addBtn:{}}),E=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],d=u[1],j=function(){i(!1)};return Object(r.jsxs)(r.Fragment,{children:[e.render((function(){i(!0)})),Object(r.jsxs)(m.a,{open:c,onClose:j,"aria-labelledby":"form-dialog-title",children:[Object(r.jsx)(v.a,{id:"form-dialog-title",children:"\ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30"}),Object(r.jsx)(w.a,{children:Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",fullWidth:!0,label:"\ub2e8\uc5b4\uc7a5 \uc774\ub984",name:"name",onChange:function(e){var t=e.target,n=t.name,r=t.value;d((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(p.a)({},n,r))}))}})}),Object(r.jsxs)(g.a,{children:[Object(r.jsx)(y.a,{onClick:j,color:"primary",children:"\ucde8\uc18c"}),Object(r.jsx)(y.a,{onClick:function(){(e.onSubmit||function(){})(l),j()},color:"primary",children:"\ucd94\uac00"})]})]})]})},J=function(e){var t=e.book,n=e.selected,a=e.onClick;return Object(r.jsx)(C.a,{button:!0,selected:n,onClick:function(){a(t)},children:Object(r.jsx)(N.a,{children:t.name})})},W=Object(u.c)((function(){var e=T().wordbookList,t=B();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{subheader:Object(r.jsx)(L.a,{children:"\ub0b4 \ub2e8\uc5b4\uc7a5"}),children:e.books.map((function(t){return Object(r.jsx)(J,{book:t,selected:t===e.current,onClick:function(){return e.select(t)}},t.id)}))}),Object(r.jsx)(E,{onSubmit:function(t){e.create(t)},render:function(e){return Object(r.jsx)(y.a,{className:t.addBtn,variant:"contained",color:"primary",startIcon:Object(r.jsx)(F.a,{}),disableElevation:!0,fullWidth:!0,onClick:function(){return e()},children:"\ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30"})}})]})}));var M=function(){return Object(r.jsx)(W,{})},P=n(146),D=n(143),z=n(13),G=n.n(z),K=n(19),q=n(54),A=n(55),H=n(10);function Q(){return new Promise((function(e){var t,n;setTimeout((function(){e()}),(n=50,(t=0)+Math.floor(Math.random()*(n-t+1))))}))}var R=0,U=[];function V(){var e=localStorage.getItem("wordbookList");if(e){U=JSON.parse(e);var t=-1;U.forEach((function(e){t=Math.max(t,e.id)})),R=t+1}else U=[],R=0}function X(){var e=JSON.stringify(U);localStorage.setItem("wordbookList",e)}function Y(e){var t=localStorage.getItem("wordbook-".concat(e));if(!t)throw new Error("No book id "+e);var n=JSON.parse(t);return void 0===n.wordList&&(n.wordList=[]),n}function Z(e){void 0!==e.id&&localStorage.setItem("wordbook-".concat(e.id),JSON.stringify(e))}function $(){return _.apply(this,arguments)}function _(){return(_=Object(K.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:return V(),e.abrupt("return",{books:U.map((function(e){var t=Y(e.id);return{id:e.id,name:t.name}})),nextId:R});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(K.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:n={id:R++},U.push(n),Z({id:n.id,name:t.name,wordList:[]}),X();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e){return re.apply(this,arguments)}function re(){return(re=Object(K.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:return n=Y(t),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t){return ce.apply(this,arguments)}function ce(){return(ce=Object(K.a)(G.a.mark((function e(t,n){var r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(t);case 2:r=e.sent,Z(Object(x.a)(Object(x.a)({},r),n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=function(){function e(){Object(q.a)(this,e),this.wordList=[],this.name="",this.id=-1,Object(H.l)(this)}return Object(A.a)(e,[{key:"load",value:function(){var e=Object(K.a)(G.a.mark((function e(t){var n,r=this;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(t);case 2:n=e.sent,Object(H.n)((function(){r.wordList=n.words,r.name=n.name,r.id=t}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"changeName",value:function(){var e=Object(K.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.name=t,e.next=3,ae(this.id,{name:t});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),oe=n(139),se=n(145),ue=Object(l.a)((function(e){return{nameBox:{width:"15em",display:"flex",alignItems:"center",marginLeft:e.spacing(3)}}})),le=Object(u.c)((function(e){var t=e.navTabs,n=ue(),a=T(),c=a.wordbookList,i=a.wordbook;return c.selected?Object(r.jsx)(oe.a,{position:"sticky",color:"transparent",elevation:1,children:Object(r.jsxs)(se.a,{display:"flex",flexDirection:"row",children:[Object(r.jsx)(se.a,{className:n.nameBox,children:Object(r.jsx)(b.a,{variant:"h6",noWrap:!0,children:i.name})}),t]})}):Object(r.jsx)(j.a,{})})),de=Object(u.c)((function(){return Object(r.jsx)(se.a,{children:"\ub2e8\uc5b4 \ud398\uc774\uc9c0"})})),je=n(72),be=n(140),fe=n(141),he=n(142),Oe=Object(l.a)((function(e){return{title:{fontSize:14},container:{marginTop:e.spacing(2)}}}));function pe(e){var t=e.currentName,n=e.onNameChange,c=Object(je.a)(e,["currentName","onNameChange"]),i=Oe(),o=Object(a.useState)(t),u=Object(s.a)(o,2),l=u[0],d=u[1];Object(a.useEffect)((function(){d(t)}),[t]);var j=function(){n(l)};return Object(r.jsx)(be.a,Object(x.a)(Object(x.a)({},c),{},{children:Object(r.jsxs)(fe.a,{children:[Object(r.jsx)(b.a,{className:i.title,children:"\ub2e8\uc5b4\uc7a5 \uc774\ub984"}),Object(r.jsxs)(se.a,{display:"flex",flexDirection:"row",children:[Object(r.jsx)(k.a,{variant:"outlined",value:l,onChange:function(e){return d(e.target.value)},onKeyDown:function(e){"Enter"===e.key?t!==l&&j():"Escape"===e.key&&d(t)},fullWidth:!0,autoComplete:"off"}),Object(r.jsx)(se.a,{ml:1,display:"flex",children:Object(r.jsx)(y.a,{variant:"outlined",color:"primary",size:"small",placeholder:t,onClick:j,disabled:t===l,children:"\ubcc0\uacbd"})})]})]})}))}var xe=[{title:"\ub2e8\uc5b4",component:de},{title:"\uc124\uc815",component:Object(u.c)((function(){var e=T(),t=e.wordbook,n=e.wordbookList,a=Oe();function c(){return(c=Object(K.a)(G.a.mark((function e(r){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.changeName(r);case 2:return e.next=4,n.load();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsx)(he.a,{className:a.container,maxWidth:"sm",children:Object(r.jsx)(pe,{currentName:t.name,onNameChange:function(e){return c.apply(this,arguments)}})})}))}],me=Object(u.c)((function(){var e=T().wordbookList,t=Object(a.useState)((function(){return new ie})),n=Object(s.a)(t,1)[0],c=Object(a.useState)(0),i=Object(s.a)(c,2),o=i[0],l=i[1];if(Object(H.f)((function(){if(e.selected){var t=e.current;n.load(t.id)}})),!e.selected)return Object(r.jsx)("div",{children:"\ub2e8\uc5b4\uc7a5\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc138\uc694!"});var d=xe[o].component;return Object(r.jsxs)(u.b,{wordbook:n,children:[Object(r.jsx)(le,{wordbookList:e,navTabs:Object(r.jsx)(P.a,{value:o,onChange:function(e,t){l(t)},children:xe.map((function(e,t){return Object(r.jsx)(D.a,{label:e.title},t)}))})}),Object(r.jsx)(d,{})]})})),ve=Object(u.c)((function(){var e=T().wordbookList;function t(){return e.selected?Object(r.jsx)("div",{children:"\uc120\ud0dd\ub41c \ub2e8\uc5b4\uc7a5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4..."}):Object(r.jsx)(me,{bookInfo:e.selected})}return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(t,{})})})),we=function(){function e(){var t=this;Object(q.a)(this,e),this.books=[],this.current={id:-1},this.select=function(e){var n=e.id,r=t.books.find((function(e){return e.id===n}));t.current=r||null},Object(H.l)(this),this.load()}return Object(A.a)(e,[{key:"load",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n=this;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:t=e.sent,Object(H.n)((function(){n.books=t.books}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=Object(K.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,e.next=3,ee({name:n});case 3:return e.next=5,this.load();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"count",get:function(){return this.books.length}},{key:"selected",get:function(){return-1!==this.current.id}}]),e}();var ke=function(){var e=Object(a.useState)((function(){return new we})),t=Object(s.a)(e,1)[0];return Object(r.jsx)(u.b,{wordbookList:t,children:Object(r.jsx)(O,{appTitle:"Word Master",side:Object(r.jsx)(M,{}),children:Object(r.jsx)(ve,{})})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ke,{})}),document.getElementById("root")),ge()}},[[97,1,2]]]);
//# sourceMappingURL=main.50a5e9e3.chunk.js.map