(this["webpackJsonpmy-app-messenger"]=this["webpackJsonpmy-app-messenger"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a(8),s=a.n(r),i=a(12),o=a(15),l=a(50),d=a(136),u=a(137),j=a(141),O=a(142),b=a(44),h=a.n(b),S=(a(87),function(e){var t=e.text,a=e.author,c=h()("message",{"message-sender":"Robot"!==a,"message-bot":"Robot"===a});return Object(n.jsx)("div",{className:c,children:Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{style:{listStyleType:"none",fontFamily:"Courier Prime"},children:[t,Object(n.jsx)("br",{})," ",Object(n.jsx)("b",{className:"message-author",children:a})]},t)})})}),f=function(e){var t=e.messages;return Object(n.jsx)("div",{children:t.map((function(e){return Object(c.createElement)(S,Object(i.a)(Object(i.a)({},e),{},{key:e.id}))}))})},E=a(130),p=a(140),m=a(135),x=a(143),A=a(17),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(c.useState)(e),a=Object(A.a)(t,2),n=a[0],r=a[1],s=Object(c.useCallback)((function(e){return r(e.target.value)}),[]),i=Object(c.useCallback)((function(){r("")}),[]);return{value:n,onChange:s,clearValue:i}},_=Object(E.a)({root:{display:"flex",justifyContent:"space-around",margin:"0 auto",marginTop:"15px",width:"90%"},btn:{backgroundColor:"red"},label:{fontSize:"26",fontFamily:"Courier Prime"}}),v=function(e){var t=e.onSend,a=e.profile,c=C(),r=function(){var e,n=a,r=c.value;(e=r)&&!/^\s*$/.test(e)?"function"===typeof t&&(t({author:n,text:r}),c.clearValue()):alert("Empty input field!")},s=_();return Object(n.jsxs)("div",{className:s.root,children:[Object(n.jsx)(p.a,{label:"Enter text...",name:"text",value:c.value,onChange:c.onChange,onKeyDown:function(e){"Enter"===e.key&&(r(),c.clearValue())},InputLabelProps:{style:{fontSize:13,fontFamily:"Courier Prime"}},multiline:!0,fullWidth:!0}),Object(n.jsx)(m.a,{variant:"round",onClick:r,className:s.btn,children:Object(n.jsx)(x.a,{})})]})};function y(){return Object(n.jsxs)("div",{style:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(n.jsx)("h1",{children:"Error 404!"}),Object(n.jsx)("p",{children:"Page not found"})]})}a(88);var g,L=function(e){var t=e.title,a=e.nameProfile,c=e.avatarChat,r=e.messages,s=e.loadStatus,i=e.onAdd;switch(s){case"loaded":return Object(n.jsxs)("div",{className:"messenger",children:[Object(n.jsx)("div",{className:"messages-info",children:Object(n.jsxs)(d.a,{alignItems:"center",children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(j.a,{src:c})}),Object(n.jsx)(O.a,{primary:t})]})}),Object(n.jsx)("div",{className:"messages-list",children:r.length?Object(n.jsx)(f,{messages:r}):Object(n.jsx)("div",{children:"Empty chat."})}),Object(n.jsx)("div",{className:"message-form",children:Object(n.jsx)(v,{onSend:function(e){i(e)},profile:a})})]});case"loading":return Object(n.jsx)("div",{className:"loading",children:"Loading..."});default:return Object(n.jsx)(y,{})}},T=a(9),I=a(49),N=a.n(I),D=a(67),R=a(32);!function(e){e.CHAT_LOAD_REQUEST="CHAT_LOAD_REQUEST",e.CHAT_LOAD_SUCCESS="CHAT_LOAD_SUCCESS",e.CHAT_LOAD_FAILURE="CHAT_LOAD_FAILURE",e.CHATS_MESSAGE_SEND="CHATS_MESSAGE_SEND",e.CHATS_MESSAGE_SEND_REQUEST="CHATS_MESSAGE_SEND_REQUEST",e.CHATS_MESSAGE_SEND_SUCCESS="CHATS_MESSAGE_SEND_SUCCESS",e.CHATS_MESSAGE_SEND_FAILURE="CHATS_MESSAGE_SEND_FAILURE",e.CHATSLISTS_SEND="CHATSLISTS_SEND",e.MESSAGE_UNFIRE="MESSAGE_UNFIRE",e.MESSAGE_FIRE="MESSAGE_FIRE"}(g||(g={}));var U,F=function(){return Object(R.createAction)({endpoint:"http://localhost:4000/chats?_embed=messages",method:"GET",headers:{"Content-Type":"application/json"},types:[g.CHAT_LOAD_REQUEST,g.CHAT_LOAD_SUCCESS,g.CHAT_LOAD_FAILURE]})},H=function(e){return{type:g.CHATS_MESSAGE_SEND,payload:e}},P=function(e){return{type:g.MESSAGE_UNFIRE,payload:e}};!function(e){e.PROFILE_LOAD_REQUEST="PROFILE_LOAD_REQUEST",e.PROFILE_LOAD_SUCCESS="PROFILE_LOAD_SUCCESS",e.PROFILE_LOAD_FAILURE="PROFILE_LOAD_FAILURE"}(U||(U={}));var M=function(){return Object(R.createAction)({endpoint:"http://localhost:4000/profiles",method:"GET",headers:{"Content-Type":"application/json"},types:[U.PROFILE_LOAD_REQUEST,U.PROFILE_LOAD_SUCCESS,U.PROFILE_LOAD_FAILURE]})},G=function(){var e=Object(o.d)(),t=Object(T.g)().id,a=Object(o.e)((function(e){return e.chats.entries})),r=Object(o.e)((function(e){return e.chats.loadStatus})),s=Object(o.e)((function(e){return e.profile.entries.name})),d=t||null,u=d&&a[d]?a[d].messages:null,j=d&&a[d]?a[d].title:null,O=d&&a[d]?a[d].avatar:null;Object(c.useEffect)((function(){d||(e(M()),e(F()))}),[]);return Object(n.jsx)(L,{title:j,nameProfile:s,avatarChat:O,messages:u,loadStatus:r,onAdd:function(t){e(H(Object(i.a)(Object(i.a)({},t),{},{id:Object(l.a)(),chatId:d})))}})},k=(a(91),function(e){var t=e.loadStatus,a=e.infoProfile;switch(t){case"loaded":return Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("div",{className:"picContainer",children:Object(n.jsx)("img",{className:"pic",src:a.avatar?a.avatar:"http://placehold.it/106&text=1"})}),Object(n.jsxs)("div",{className:"infoUser",children:[Object(n.jsxs)("h1",{children:["Login: ",a.name]}),Object(n.jsxs)("h1",{children:["Age: ",a.age]}),Object(n.jsxs)("h1",{children:["City: ",a.city]}),Object(n.jsxs)("h1",{children:["Main chat: ",a.mainChat]})]})]});case"loading":return Object(n.jsx)("div",{className:"loading",children:"Loading..."});default:return Object(n.jsx)(y,{})}}),w=function(){var e=Object(o.d)(),t=Object(o.e)((function(e){return[e.profile.entries,e.profile.loadStatus]})),a=Object(A.a)(t,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){r||e(M())}),[]),Object(n.jsx)(k,{infoProfile:r,loadStatus:s})},Q=a(30),$=(a(92),function(e){var t=e.infoProfile;switch(e.loadStatus){case"loaded":return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(Q.a,{style:{textDecoration:"none",cursor:"pointer",fontFamily:"Courier Prime"},className:"header-logo",to:"/",children:"Messenger App"}),Object(n.jsx)(Q.a,{to:"/profile",style:{color:"#bc1d1d",textDecoration:"none"},children:Object(n.jsxs)("div",{className:"header-avatar",children:[Object(n.jsx)(j.a,{src:t.avatar}),t.name?t.name:"loading"]})})]});case"loading":return Object(n.jsx)("div",{children:"Loading"});default:return Object(n.jsx)(y,{})}}),J=function(){var e=Object(o.d)(),t=Object(o.e)((function(e){return[e.profile.entries,e.profile.loadStatus]})),a=Object(A.a)(t,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){e(M())}),[]),Object(n.jsx)($,{infoProfile:r,loadStatus:s})},V=a(134),q=a(138),W=(a(93),function(e){var t=e.avatar,a=e.title,c=e.id,r=e.fire,s=e.onClick;return Object(n.jsxs)("div",{children:[Object(n.jsx)(Q.a,{to:"/chats/".concat(c),style:{textDecoration:"none",color:"white"},children:Object(n.jsxs)(d.a,{alignItems:"center",className:h()({fire:r}),onClick:function(){"function"===typeof s&&s(c)},children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(j.a,{src:t})}),Object(n.jsx)(O.a,{primary:a,style:{fontFamily:"Courier Prime"}})]},c)}),Object(n.jsx)(q.a,{variant:"inset",component:"li"})]})}),z=a(139),K=a(68),B=a.n(K),X=(a(94),Object(E.a)({root:{color:"red",fontFamily:"Courier Prime"},multilineColor:{color:"white"}})),Y=function(e){var t=e.onSend,a=X(),c=C(),r=function(){var e;(e=c.value)&&!/^\s*$/.test(e)?"function"===typeof t&&(t(c.value),c.clearValue()):alert("Enter chat name!")};return Object(n.jsxs)("div",{className:"btnAddChat",children:[Object(n.jsx)(p.a,{label:"Enter chat name...",name:"nameChat",value:c.value,onChange:c.onChange,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),r())},InputProps:{classes:{input:a.multilineColor}},multiline:!0,fullWidth:!0,inputProps:{maxLength:15}}),Object(n.jsx)(z.a,{"aria-label":"add",className:a.root,onClick:r,children:Object(n.jsx)(B.a,{})})]})},Z=(a(97),function(e){var t=e.loadStatus,a=e.chats,c=e.fireChats,r=e.onAdd,s=e.onClick;switch(t){case"loaded":return Object(n.jsxs)("div",{className:"chats",children:[Object(n.jsx)("div",{className:"chatsList",children:Object(n.jsx)(V.a,{children:a.map((function(e){return Object(n.jsx)(W,{avatar:e.avatar,title:e.title,id:e.id,fire:c[e.id],onClick:s},e.id)}))})}),Object(n.jsx)(Y,{onSend:function(e){e&&r(e)}})]});case"loading":return Object(n.jsx)("div",{className:"loading",children:"Loading..."});default:return Object(n.jsx)(y,{})}}),ee=a(16),te=function(){var e=Object(o.d)(),t=Object(o.e)((function(e){return[e.chats.entries,e.chats.loadStatus,e.chats.fireChatsId]})),a=Object(A.a)(t,3),r=a[0],s=a[1],i=a[2],l=r.length;Object(c.useEffect)((function(){s||e(F())}),[]);return Object(n.jsx)(Z,{loadStatus:s,chats:r,fireChats:i,onAdd:function(t){var a;e((a={id:l.toString(),title:t,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk0936CmLeNxPOJFyot8uCx1kU27hoqS5CbA&usqp=CAU"},{type:g.CHATSLISTS_SEND,payload:a})),e(Object(ee.d)("/chats/".concat(l)))},onClick:function(t){t>=0&&e(P({chatId:t}))}})},ae=(a(98),function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(J,{}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"chatListContainer",children:Object(n.jsx)(te,{})}),Object(n.jsx)("div",{className:"messengerContainer",children:Object(n.jsxs)(T.d,{children:[Object(n.jsx)(T.b,{exact:!0,path:"/chats/:id([0-9]+)",component:G}),Object(n.jsx)(T.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(T.a,{to:"/chats/0"})}}),Object(n.jsx)(T.b,{exact:!0,path:"/profile",component:w}),Object(n.jsx)(T.b,{path:"*",children:Object(n.jsx)(y,{})})]})})]})]})})}),ne=a(33),ce=a(21),re=a(69),se=a(70),ie=a.n(se),oe=[],le=function(e){return function(t){return function(a){if(a.type===g.CHATS_MESSAGE_SEND){var n=a.payload,c=n.author,r=n.chatId;"Robot"===c||oe.includes(r)||(oe.push(r),setTimeout((function(){e.dispatch(H({id:Object(l.a)(),chatId:r,text:"Hi, ".concat(c),author:"Robot"}));var t=((e.getState().router.location.pathname||"").match(/\/chats\/(.*?)$/)||[])[1]||"";r!==t?e.dispatch(function(e){return{type:g.MESSAGE_FIRE,payload:e}}({chatId:r})):e.dispatch(P({chatId:r})),oe=oe.filter((function(e){return e!==r}))}),1e3))}return t(a)}}},de=a(19),ue=a(62),je=a(71),Oe=a.n(je),be=a(56),he=function(e){return function(t){return function(a){var n;return a.type==g.CHATS_MESSAGE_SEND&&e.dispatch((n=a.payload,Object(R.createAction)({endpoint:"http://localhost:4000/messages",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(i.a)({},n)),types:[{type:g.CHATS_MESSAGE_SEND_REQUEST,payload:Object(i.a)({},n)},{type:g.CHATS_MESSAGE_SEND_SUCCESS,payload:function(){var e=Object(D.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g.CHATS_MESSAGE_SEND_FAILURE]}))),t(a)}}},Se=a(18),fe=a(41),Ee=a.n(fe),pe={entries:{},loadStatus:null,error:!1,fireChatsId:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.CHAT_LOAD_REQUEST:return Object(i.a)(Object(i.a)({},e),{},{loadStatus:"loading",error:!1});case g.CHAT_LOAD_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{loadStatus:"loaded",entries:t.payload,fireChatsId:Array(t.payload.length).fill(!1)});case g.CHAT_LOAD_FAILURE:return Object(i.a)(Object(i.a)({},e),{},{loadStatus:null,error:!0});case g.CHATS_MESSAGE_SEND:return Ee()(e,{entries:Object(Se.a)({},t.payload.chatId,{messages:{$push:[{id:t.payload.id,text:t.payload.text,author:t.payload.author}]}})});case g.CHATSLISTS_SEND:return Ee()(e,{entries:{$merge:Object(Se.a)({},t.payload.id,{id:t.payload.id,title:t.payload.title,avatar:t.payload.avatar,messages:[]})}});case g.MESSAGE_FIRE:return Ee()(e,{fireChatsId:Object(Se.a)({},+t.payload.chatId,{$set:!0})});case g.MESSAGE_UNFIRE:return Ee()(e,{fireChatsId:Object(Se.a)({},+t.payload.chatId,{$set:!1})});default:return e}},xe={entries:{},loadStatus:null,error:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.PROFILE_LOAD_REQUEST:return Object(i.a)(Object(i.a)({},e),{},{loadStatus:"loading",error:!1});case U.PROFILE_LOAD_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{loadStatus:"loaded",entries:t.payload});case U.PROFILE_LOAD_FAILURE:return Object(i.a)(Object(i.a)({},e),{},{loadStatus:null,error:!0});default:return e}},Ce=Object(de.a)(),_e={key:"app",storage:Oe.a,blacklist:["chats","messages"]},ve=a(72),ye=function(){var e,t=Object(ce.createStore)(Object(be.a)(_e,(e=Ce,Object(ce.combineReducers)({router:Object(ne.b)(e),chats:me,profile:Ae}))),{},Object(re.composeWithDevTools)(Object(ce.applyMiddleware)(R.apiMiddleware,ie.a,le,Object(ue.a)(Ce),he)));return{store:t,persistor:Object(be.b)(t)}}(),ge=ye.store,Le=ye.persistor;s.a.render(Object(n.jsx)(o.a,{store:ge,children:Object(n.jsx)(ve.a,{persistor:Le,children:Object(n.jsx)(ne.a,{history:Ce,children:Object(n.jsx)(ae,{})})})}),document.getElementById("root"))},87:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.a208b61c.chunk.js.map