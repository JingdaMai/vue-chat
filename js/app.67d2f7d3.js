(function(e){function s(s){for(var a,i,r=s[0],c=s[1],u=s[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(s);while(m.length)m.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,s=0;s<o.length;s++){for(var t=o[s],a=!0,r=1;r<t.length;r++){var c=t[r];0!==n[c]&&(a=!1)}a&&(o.splice(s--,1),e=i(i.s=t[0]))}return e}var a={},n={app:0},o=[];function i(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)i.d(t,a,function(s){return e[s]}.bind(null,a));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="/vue-chat/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var u=0;u<r.length;u++)s(r[u]);var l=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"39aa":function(e,s,t){},"3f43":function(e,s,t){"use strict";var a=t("b235"),n=t.n(a);n.a},4678:function(e,s,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var s=o(e);return t(s)}function o(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);var a=t("5530"),n=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],r={name:"App"},c=r,u=t("2877"),l=Object(u["a"])(c,o,i,!1,null,null,null),d=l.exports,m=t("8c4f"),f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"hero is-fullheight"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container has-text-centered"},["login"===e.page?t("div",{staticClass:"column is-4 is-offset-4"},[t("h1",{staticClass:"title has-text-grey"},[e._v(" Login ")]),t("div",{staticClass:"box"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.login(s)}}},[t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Your Email",autofocus:""},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Your Password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})])]),e.loginError?t("p",{staticClass:"help is-danger"},[e._v(" "+e._s(e.loginError)+" ")]):e._e(),t("button",{staticClass:"button is-block is-info is-fullwidth",attrs:{type:"submit"}},[e._v(" Login ")])])]),t("p",{staticClass:"has-text-grey"},[t("a",{on:{click:function(s){e.page="signUp"}}},[e._v("Sign Up")])])]):e._e(),"signUp"===e.page?t("div",{staticClass:"column is-4 is-offset-4"},[t("h1",{staticClass:"title has-text-grey"},[e._v(" Sign Up ")]),t("div",{staticClass:"box"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.signUp(s)}}},[t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"your@email.address"},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}}),t("p",{staticClass:"help is-danger"},[e._v(" "+e._s(a[0])+" ")])]}}],null,!1,477121959)})],1)]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("ValidationProvider",{attrs:{name:"username",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Your username"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}}),t("p",{staticClass:"help is-danger"},[e._v(" "+e._s(a[0])+" ")])]}}],null,!1,151142836)})],1)]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("ValidationProvider",{attrs:{name:"password",rules:"required|min:6"},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Your Password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),t("p",{staticClass:"help is-danger"},[e._v(" "+e._s(a[0])+" ")])]}}],null,!1,2027406143)})],1)]),t("button",{staticClass:"button is-block is-info is-fullwidth"},[e._v(" Sign up ")])])]),t("p",{staticClass:"has-text-grey"},[t("a",{on:{click:function(s){e.page="login"}}},[e._v("Login")])])]):e._e()])])])},h=[],p=(t("b0c0"),t("59ca")),g=t.n(p),v=(t("ea7b"),t("66ce"),{apiKey:"AIzaSyBloMcx9BkhHBdYHnZGfp1QfG_SLepGZ9U",authDomain:"vue-chat-6a808.firebaseapp.com",databaseURL:"https://vue-chat-6a808.firebaseio.com",projectId:"vue-chat-6a808",storageBucket:"vue-chat-6a808.appspot.com",messagingSenderId:"847097990166",appId:"1:847097990166:web:dbc14e548e1e9996bf7937",measurementId:"G-Q6RLRWFCLY"}),b=g.a.initializeApp(v),j=b,w=b.database(),C=b.auth(),_={name:"Login",data:function(){return{page:"login",email:"",password:"",username:"",loginError:""}},created:function(){var e=this;C.onAuthStateChanged((function(s){s&&(e.$store.commit("SET_LOGIN",{uid:s.uid,email:s.email}),w.ref("users/"+s.uid).once("value").then((function(s){e.$store.commit("SET_USERNAME",s.val().name)})),e.$router.push("/chat"))}))},methods:{login:function(){var e=this;C.signInWithEmailAndPassword(this.email,this.password).catch((function(s){return e.loginError=s.message}))},signUp:function(){var e=this;C.createUserWithEmailAndPassword(this.email,this.password).then((function(s){w.ref("users/".concat(s.user.uid)).set({name:e.username})})).catch((function(s){return e.loginError=s.message}))}}},y=_,k=Object(u["a"])(y,f,h,!1,null,"4e6244d0",null),R=k.exports,x=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"section container is-fluid"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-2"},[t("Chatrooms",{attrs:{"selected-chat-room-slug":e.selectedChatRoomSlug},on:{"set-active-room":e.setActiveRoom}})],1),t("div",{staticClass:"column is-8"},[t("div",{staticClass:"chat-window"},[t("div",{staticClass:"chat-history"},e._l(e.messages,(function(s,a){return t("div",{key:a,staticClass:"chat-message"},[t("div",{staticClass:"chat-message-meta"},[t("p",{staticClass:"timestamp"},[e._v(" "+e._s(e._f("time")(s.timestamp))+" ")]),t("p",{staticClass:"user-name"},[e._v(" "+e._s(s.name)+" ")])]),t("p",[e._v(e._s(s.message))])])})),0)]),t("div",{staticClass:"chat-actions"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.sendMessage(s)}}},[t("div",{staticClass:"field has-addons"},[t("p",{staticClass:"control is-expanded"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.chatMessage,expression:"chatMessage"}],staticClass:"input",attrs:{type:"text",placeholder:"Your message"},domProps:{value:e.chatMessage},on:{input:function(s){s.target.composing||(e.chatMessage=s.target.value)}}})]),t("button",{staticClass:"button",attrs:{type:"submit"}},[t("FontAwesomeIcon",{attrs:{icon:"location-arrow"}})],1)])])])]),t("div",{staticClass:"column is-2"},[t("a",{staticClass:"button",on:{click:e.signout}},[t("FontAwesomeIcon",{attrs:{icon:"sign-out-alt"}}),e._v(" Sign out")],1),t("hr"),t("ChatRoomUsers",{attrs:{"active-room":e.activeRoom},on:{kicked:e.kicked}})],1)])])},O=[],S=t("c1df"),z=t.n(S),E=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("aside",{staticClass:"menu"},[t("p",{staticClass:"menu-label"},[e._v(" Rooms ")]),t("ul",{staticClass:"menu-list"},e._l(e.rooms,(function(s){return t("li",{key:s.slug},[t("router-link",{class:{"is-active":e.selectedChatRoomSlug===s.slug},attrs:{to:"/chat/"+s.slug}},[e._v(" "+e._s(s.name)+" ")])],1)})),0),t("hr"),e.addingRoom?e._e():t("p",[t("a",{staticClass:"button is-primary",on:{click:function(s){e.addingRoom=!0}}},[t("FontAwesomeIcon",{attrs:{icon:"plus"}}),e._v(" Create new channel")],1)]),e.addingRoom?t("form",{on:{submit:function(s){return s.preventDefault(),e.addRoom(s)}}},[t("div",{staticClass:"field has-addons"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRoomName,expression:"newRoomName"}],staticClass:"input",attrs:{type:"text",placeholder:"New channel"},domProps:{value:e.newRoomName},on:{input:function(s){s.target.composing||(e.newRoomName=s.target.value)}}}),t("p",{staticClass:"control"},[t("button",{staticClass:"button is-success",attrs:{type:"submit"}},[t("FontAwesomeIcon",{attrs:{icon:"plus"}}),e._v(" Add ")],1)])])]):e._e()])},N=[],P=(t("7db0"),t("c740"),t("a434"),t("d3b7"),t("ac1f"),t("25f0"),t("5319"),t("498a"),{name:"Chatrooms",props:{selectedChatRoomSlug:{type:String,required:!0,default:"general"}},data:function(){return{rooms:[{name:"General",slug:"general",owner:null}],addingRoom:!1,newRoomName:""}},computed:{uid:function(){return this.$store.state.uid}},watch:{selectedChatRoomSlug:function(e,s){this.$emit("set-active-room",this.rooms.find((function(s){return s.slug===e})),this.rooms.find((function(e){return e.slug===s})))}},created:function(){var e=this;w.ref("rooms").on("child_added",(function(s){e.rooms.push(s.val()),e.selectedChatRoomSlug===s.val().slug&&e.$emit("set-active-room",e.rooms.find((function(e){return e.slug===s.val().slug})))})),w.ref("rooms").on("child_removed",(function(s){e.rooms.splice(e.rooms.findIndex((function(e){return e.slug===s.val().slug})),1)})),"general"===this.selectedChatRoomSlug&&this.$emit("set-active-room",this.rooms.find((function(s){return s.slug===e.selectedChatRoomSlug})))},methods:{addRoom:function(){if(this.newRoomName){var e={name:this.newRoomName,slug:this.slugify(this.newRoomName),owner:this.uid};w.ref("rooms/".concat(e.slug)).set(e),this.newRoomName=""}},slugify:function(e){return e.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-")}}}),U=P,$=Object(u["a"])(U,E,N,!1,null,"6c8c2c01",null),I=$.exports,A=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("aside",{staticClass:"menu"},[t("p",{staticClass:"menu-label"},[e._v(" Online now ")]),t("ul",{staticClass:"menu-list"},e._l(e.users,(function(s){return t("li",{key:s.uid},[t("p",[e._v(" "+e._s(s.name)+" "),e.isOwner(s.uid)?t("FontAwesomeIcon",{attrs:{icon:"crown"}}):e._e(),e.isOwner(e.uid)&&e.uid!==s.uid?t("span",{staticClass:"is-pulled-right"},[t("a",{staticClass:"is-pulled-left",on:{click:function(t){return e.kickUser(s)}}},[t("FontAwesomeIcon",{attrs:{icon:"times-circle"}})],1)]):e._e()],1)])})),0)])},M=[],L={name:"ChatRoomUsers",props:{activeRoom:{type:Object,required:!0}},data:function(){return{users:[]}},computed:{username:function(){return this.$store.state.username},uid:function(){return this.$store.state.uid}},watch:{activeRoom:function(e,s){this.changeRoom(e,s)}},methods:{changeRoom:function(e){var s=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.users=[],t.slug&&(w.ref("users_rooms").child(t.slug).off(),w.ref("users_rooms").child(t.slug).child(this.uid).remove()),w.ref("users_rooms").child(e.slug).child(this.uid).set({name:this.username,uid:this.uid}),w.ref("users_rooms").child(e.slug).child(this.uid).onDisconnect().remove(),w.ref("users_rooms").child(e.slug).on("child_added",(function(e){s.users.push({name:e.val().name,uid:e.key})})),w.ref("users_rooms").child(e.slug).on("child_removed",(function(e){s.users.splice(s.users.findIndex((function(s){return s.uid===e.key})),1),e.key===s.uid&&s.$emit("kicked")}))},isOwner:function(e){return this.activeRoom.owner===e},kickUser:function(e){w.ref("users_rooms").child(this.activeRoom.slug).child(e.uid).remove()}}},Y=L,D=(t("3f43"),Object(u["a"])(Y,A,M,!1,null,"0308b1aa",null)),q=D.exports,F={name:"ChatRoom",components:{Chatrooms:I,ChatRoomUsers:q},filters:{time:function(e){return z.a.unix(e).format("DD.MM.YYYY HH:mm:ss")}},data:function(){return{messages:[],activeRoom:{},chatMessage:"",selectedChatRoomSlug:this.$route.params.slug}},computed:{username:function(){return this.$store.state.username},uid:function(){return this.$store.state.uid}},created:function(){this.initializeRoom()},methods:{signout:function(){var e=this;C.signOut().then((function(){e.$router.push("/")}))},setActiveRoom:function(e,s){this.activeRoom=e,this.initializeRoom(s)},sendMessage:function(){w.ref("messages/".concat(this.activeRoom.slug)).push({userId:this.uid,name:this.username,message:this.chatMessage,timestamp:z()().unix()}),this.chatMessage=""},initializeRoom:function(){var e=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.messages=[],null!==s&&w.ref("messages/".concat(s.slug)).off(),w.ref("messages/".concat(this.activeRoom.slug)).on("child_added",(function(s){e.messages.push(s.val())}))},kicked:function(){this.$router.push("/chat/general")}},beforeRouteUpdate:function(e,s,t){this.selectedChatRoomSlug=e.params.slug,t()}},T=F,G=(t("611c"),Object(u["a"])(T,x,O,!1,null,"5021f901",null)),V=G.exports;n["a"].use(m["a"]);var B=new m["a"]({routes:[{path:"/",component:R},{path:"/chat",component:V},{path:"/chat/:slug",component:V}]});B.beforeEach((function(e,s,t){var a=C;null===a.currentUser&&"/"!==e.path?t({path:"/"}):null!==a.currentUser&&"/"===e.path?t({path:"/chat"}):t()}));var H=B,W=t("2f62"),J=t("0e44");n["a"].use(W["a"]);var Q,Z=new W["a"].Store({plugins:[Object(J["a"])()],state:{loggedIn:!1,uid:"",email:"",username:""},mutations:{SET_LOGIN:function(e,s){var t=s.uid,a=s.email;e.loggedIn=!0,e.uid=t,e.email=a},SET_USERNAME:function(e,s){e.username=s}},getters:{},actions:{}}),K=(t("92c6"),t("7bb1")),X=t("4c93"),ee=t("ecee"),se=t("c074"),te=t("ad3d");Object(K["c"])("email",X["a"]),Object(K["c"])("min",Object(a["a"])(Object(a["a"])({},X["b"]),{},{message:"Password should be at least 6 characters"})),Object(K["c"])("required",Object(a["a"])(Object(a["a"])({},X["c"]),{},{message:"This field is required"})),ee["c"].add(se["a"]),n["a"].component("ValidationProvider",K["b"]),n["a"].component("ValidationObserver",K["a"]),n["a"].component("FontAwesomeIcon",te["a"]),j.auth().onAuthStateChanged((function(){Q||(Q=new n["a"]({router:H,store:Z,render:function(e){return e(d)}}).$mount("#app"))}))},"611c":function(e,s,t){"use strict";var a=t("39aa"),n=t.n(a);n.a},b235:function(e,s,t){}});
//# sourceMappingURL=app.67d2f7d3.js.map