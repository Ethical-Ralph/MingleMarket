(this.webpackJsonpnewfrontend=this.webpackJsonpnewfrontend||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/hey_mingle.836efd55.png"},136:function(e,t,a){e.exports=a.p+"static/media/Sunfire - Young Free And Single.e2603b8f.mp3"},187:function(e,t,a){e.exports=a.p+"static/media/PLAYBOY - SHOWER TOGETHER - LUXURY.0599c3ac.mp4"},194:function(e,t,a){e.exports=a(367)},199:function(e,t,a){},364:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),o=(a(199),a(10)),l=a(78),i=a(8),u=a(13),m=a(12),p=a(15),d=a(18),h=a(14),f=a(28),g=a.n(f),E=function(e,t){return{type:"AUTH_SUCCESS",token:t,username:e}},b=function(e){return{type:"AUTH_FAIL",error:e}},v=function(e){var t={"Content-Type":"application/json",Authorization:"Token ".concat(e)};return g.a.post("http://127.0.0.1:8000/accounts/api/auth/logout/",null,{headers:t}).then((function(e){localStorage.removeItem("token"),localStorage.removeItem("username")})),{type:"AUTH_LOGOUT"}},k=function(e,t){return function(a){a({type:"AUTH_START"}),g.a.post("http://127.0.0.1:8000/accounts/api/auth/login",{username:e,password:t}).then((function(t){var n=t.data.token;localStorage.setItem("token",n),localStorage.setItem("username",e),a(E(e,n))})).catch((function(e){a(b(e))}))}},N=function(e,t,a,n){return function(r){r({type:"AUTH_START"}),g.a.post("http://127.0.0.1:8000/accounts/api/auth/register",{username:e,email:t,password1:a,password2:n}).then((function(t){var a=t.data.token;localStorage.setItem("token",a),localStorage.setItem("username",e),r(E(e,a))})).catch((function(e){r(b(e))}))}},w=function(e){return function(t){var a={"Content-Type":"application/json",Authorization:"Token ".concat(e)};g.a.get("http://127.0.0.1:8000/chat/contact_detail/",{headers:a}).then((function(e){t({type:"GET_PROFILE_SUCCESS",profile:e.data})})).catch((function(e){t(b(e))}))}},y=function(e,t){return function(a){g.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(t)},g.a.get("http://127.0.0.1:8000/chat/?username=".concat(e)).then((function(e){return a({type:"GET_CHATS_SUCCESS",chats:e.data})}))}},O=a(84),C=function(){function e(){Object(o.a)(this,e),this.callbacks={},this.socketRef=null}return Object(i.a)(e,null,[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),Object(i.a)(e,[{key:"connect",value:function(e){var t=this,a="ws://localhost:8000/ws/chat/".concat(e,"/");console.log(a),this.socketRef=new WebSocket(a),this.socketRef.onopen=function(){console.log("websocket is open")},this.socketNewMessage(JSON.stringify({command:"fetch_messages"})),this.socketRef.onmessage=function(e){t.socketNewMessage(e.data)},this.socketRef.onerror=function(e){console.log(e.mesage)},this.socketRef.onclose=function(){console.log("websocket is closed"),t.connect()}}},{key:"disconnect",value:function(){this.socketRef.close(),this.socketRef.onclose=function(){console.log("socket is closed")}}},{key:"socketNewMessage",value:function(e){var t=JSON.parse(e),a=t.command;0!==Object.keys(this.callbacks).length&&("messages"===a&&this.callbacks[a](t.messages),"new_message"===a&&this.callbacks[a](t.message))}},{key:"fetchMessages",value:function(e,t){this.sendMessage({command:"fetch_messages",username:e,chatId:t})}},{key:"newChatMessage",value:function(e){this.sendMessage({command:"new_message",from:e.from,message:e.content,chatId:e.chatId})}},{key:"addCallbacks",value:function(e,t){this.callbacks.messages=e,this.callbacks.new_message=t}},{key:"sendMessage",value:function(e){try{this.socketRef.send(JSON.stringify(Object(O.a)({},e)))}catch(t){console.log(t.mesasge)}}},{key:"state",value:function(){return this.socketRef.readyState}},{key:"waitForSocketConnection",value:function(e){var t=this.socketRef,a=this.waitForSocketConnection;setTimeout((function(){if(1===t.readyState)return console.log("Connection is secure"),void(null!=e&&e());console.log("Waiting for connection...."),a(e)}),1)}}]),e}();C.instance=null;var S=C.getInstance(),_=function(e){return e.children},j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={message:""},n.messageChangeHandler=function(e){n.setState({message:e.target.value})},n.sendMessageHandler=function(e){e.preventDefault();var t={from:n.props.username,content:n.state.message,chatId:n.props.match.params.chatID};S.newChatMessage(t),n.setState({message:""})},n.renderTimestamp=function(e){var t=Math.round(((new Date).getTime()-new Date(e).getTime())/6e4);return t<1?"just now...":t<60&&t>1?"".concat(t," minutes ago"):t<1440&&t>60?"".concat(Math.round(t/60)," hours ago"):t<44640&&t>1440?"".concat(Math.round(t/1440)," days ago"):"".concat(new Date(e))},n.renderMessages=function(e){var t=n.props.username;return e.map((function(e,a,s){return r.a.createElement("div",{key:e.id,className:e.author===t?"d-flex justify-content-end mb-4":"d-flex justify-content-start mb-4"},r.a.createElement("div",{className:"img_cont_msg"},r.a.createElement("img",{src:"http://emilcarlsson.se/assets/mikeross.png",className:"rounded-circle user_img_msg",alt:"user"})),r.a.createElement("div",{className:"msg_cotainer"},e.content,r.a.createElement("span",{className:"msg_time"},n.renderTimestamp(e.timestamp))))}))},n.initialiseChat(),n}return Object(i.a)(a,[{key:"initialiseChat",value:function(){var e=this;this.waitForSocketConnection((function(){S.fetchMessages(e.props.username,e.props.match.params.chatID)})),S.connect(this.props.match.params.chatID)}}]),Object(i.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;console.log(e),this.props.match.params.chatID!==e.match.params.chatID&&(S.disconnect(),this.waitForSocketConnection((function(){S.fetchMessages(t.props.username,e.match.params.chatID)})),S.connect(e.match.params.chatID))}},{key:"waitForSocketConnection",value:function(e){var t=this;setTimeout((function(){if(1===S.state())return console.log("Connection is made"),void e();console.log("wait for connection..."),t.waitForSocketConnection(e)}),100)}},{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement("div",{className:"card-body msg_card_body"},this.props.messages&&this.renderMessages(this.props.messages)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("form",{onSubmit:this.sendMessageHandler},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text attach_btn"},r.a.createElement("i",{className:"fas fa-paperclip"}))),r.a.createElement("input",{onChange:this.messageChangeHandler,value:this.state.message,required:!0,className:"form-control type_msg",id:"chat-message-input",type:"text",placeholder:"Type your message..."}),r.a.createElement("div",{id:"chat-message-submit",className:"input-group-append"},r.a.createElement("span",{className:"input-group-text send_btn"},r.a.createElement("i",{className:"fa fa-paper-plane","aria-hidden":"true"})))))))}}]),a}(r.a.Component),A=Object(p.b)((function(e){return{username:e.auth.username,messages:e.message.messages}}))(j),P=function(){var e=Object(h.g)().path;return r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"".concat(e,"/:chatID"),component:A}))};var T=function(e){var t=Object(h.g)().url;return r.a.createElement(d.c,{to:"".concat(t).concat(e.chatURL),style:{color:"#fff"}},r.a.createElement("li",{className:"active"},r.a.createElement("div",{className:"d-flex bd-highlight"},r.a.createElement("div",{className:"user_info"},r.a.createElement("span",null,e.name)))))},x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"waitForAuthDetails",value:function(){var e=this;setTimeout((function(){null===e.props.token||void 0===e.props.token?(console.log("waiting for auth details"),e.waitForAuthDetails()):e.props.getUserChats(e.props.username,e.props.token)}),100)}},{key:"componentDidMount",value:function(){this.waitForAuthDetails()}},{key:"openAddChatPopup",value:function(){this.props.addChat()}},{key:"render",value:function(){var e=this,t=this.props.chats.map((function(e){return r.a.createElement(T,{key:e.id,name:"".concat(e.name),status:"online",chatURL:"/".concat(e.id)})}));return r.a.createElement("div",{className:"col-md-4 col-xl-3 chat"},r.a.createElement("div",{className:"card mb-sm-3 mb-md-0 contacts_card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",placeholder:"Search...",name:"",className:"form-control search"}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text search_btn"},r.a.createElement("i",{className:"fas fa-search"}))))),r.a.createElement("div",{className:"card-body contacts_body"},r.a.createElement("ul",{className:"contacts"},t)),r.a.createElement("div",{id:"card-footer"},r.a.createElement("button",{className:"d-flex justify-content-start btn-sm btn-danger",onClick:function(){return e.openAddChatPopup()}},r.a.createElement("i",{className:"fa fa-user-plus fa-fw","aria-hidden":"true"})," ",r.a.createElement("span",null,"Add Chat")))))}}]),a}(r.a.Component),U=Object(p.b)((function(e){return{token:e.auth.token,username:e.auth.username,chats:e.message.chats}}),(function(e){return{logout:function(){return e(v())},addChat:function(){return e({type:"OPEN_ADD_CHAT_POPUP"})},getUserChats:function(t,a){return e(y(t,a))}}}))(x),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return null===this.props.token?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"card-header msg_head"},r.a.createElement("div",{className:"d-flex bd-highlight"},r.a.createElement("div",{className:"img_cont"},r.a.createElement("img",{src:"http://emilcarlsson.se/assets/harveyspecter.png",alt:"",className:"rounded-circle user_img"}),r.a.createElement("span",{className:"online_icon"})),r.a.createElement("div",{className:"user_info"},r.a.createElement("span",null,this.props.username),r.a.createElement("p",null,"1767 Messages")),r.a.createElement("div",{className:"video_cam"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-video"})),r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-phone"})))),r.a.createElement("span",{id:"action_menu_btn"},r.a.createElement("i",{className:"fas fa-ellipsis-v"})),r.a.createElement("div",{className:"action_menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-user-circle"})," View profile"),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-plus"})," Add to group"))))}}]),a}(r.a.Component),F=Object(p.b)((function(e){return{username:e.auth.username,token:e.auth.token}}))(D),M=a(371),I=a(107),H=a(370),R=a(372),L=a(83),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={usernames:[],error:null},e.handleChange=function(t){e.setState({usernames:t})},e.handleFinish=function(t){var a=e.state.usernames,n=[].concat(Object(I.a)(a),[e.props.username]);g.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(e.props.token)},g.a.defaults.xsrfHeaderName="X-CSRFTOKEN",g.a.defaults.xsrfCookieName="csrftoken",g.a.post("http://127.0.0.1:8000/chat/create/",{messages:[],participants:n}).then((function(t){e.props.history.push("/".concat(t.data.id)),e.props.closeAddChatPopup(),e.props.getUserChats(e.props.username,e.props.token)})).catch((function(t){console.error(t),e.setState({error:t})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(H.a,{layout:"inline",name:"username",rules:[{required:!0,message:"Please input the username of whom you want to chat with"}],onFinish:this.handleFinish},this.state.error?"".concat(this.state.error):null,r.a.createElement(H.a.Item,null,r.a.createElement(R.a,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:this.handleChange},[])),r.a.createElement(H.a.Item,null,r.a.createElement(L.a,{type:"primary",htmlType:"submit"},"Start a chat")))}}]),a}(r.a.Component),z=Object(h.h)(Object(p.b)((function(e){return{token:e.auth.token,username:e.auth.username}}),(function(e){return{closeAddChatPopup:function(){return e({type:"CLOSE_ADD_CHAT_POPUP"})},getUserChats:function(t,a){return e(y(t,a))}}}))(G)),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(M.a,{centered:!0,footer:null,visible:this.props.isVisible,onCancel:this.props.close},r.a.createElement(z,null))}}]),a}(r.a.Component),W=a(369),J=a(373),Y=r.a.createElement(J.a,{style:{fontSize:24},spin:!0}),V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).authenticate=function(t){t.preventDefault(),e.props.login(t.target.username.value,t.target.password.value)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"profile"},r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row no-gutter"},r.a.createElement("div",{className:"col-md-8 col-lg-6"},r.a.createElement("div",{className:"login d-flex align-items-center py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9 col-lg-8 mx-auto"},r.a.createElement("h2",{className:"login-heading mb-4 text-danger"},"Welcome back!"),this.props.loading?r.a.createElement(W.a,{indicator:Y}):this.props.isAuthenticated?r.a.createElement("div",null,r.a.createElement(d.b,{to:"/chat"},r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2"},r.a.createElement("span",null,"Mingle"))),r.a.createElement(d.b,{to:"/profile"},r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2"},r.a.createElement("span",null,"Account Settings"))),r.a.createElement("button",{onClick:function(){return e.props.logout()},className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2"},r.a.createElement("span",null,"Logout"))):r.a.createElement("form",{method:"POST",onSubmit:this.authenticate},r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"username",name:"username",id:"inputEmail",className:"form-control",placeholder:"Username",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputEmail"},"Username")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"password",name:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("label",{htmlFor:"inputPassword"},"Password")),r.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label text-danger",htmlFor:"customCheck1"},"Remember password")),r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2",type:"submit"},"Log in"),r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"small",href:"#"},"Forgot password?")))))))))))))}}]),a}(r.a.Component),X=Object(p.b)((function(e){return{isAuthenticated:null!==e.auth.token,loading:e.auth.loading,token:e.auth.token,username:e.auth.username,chats:e.message.chats}}),(function(e){return{login:function(t,a){return e(k(t,a))},logout:function(){return e(v())},signup:function(t,a,n,r){return e(N(t,a,n,r))},addChat:function(){return e({type:"OPEN_ADD_CHAT_POPUP"})}}}))(V),B=a(187),K=a.n(B),$=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,style:{position:"absolute",width:"100%",left:"50%",top:"50%",height:"100%",objectFit:"cover",transform:"translate(-50%, -50%)",zIndex:"-1"}},r.a.createElement("source",{src:K.a,type:"video/mp4"})),r.a.createElement(X,null))}}]),a}(r.a.Component),Q=r.a.createElement(J.a,{style:{fontSize:24},spin:!0}),Z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loginForm:!0},e.changeForm=function(){e.setState({loginForm:!e.state.loginForm})},e.authenticate=function(t){t.preventDefault(),e.props.signup(t.target.username.value,t.target.email.value,t.target.password.value,t.target.password2.value)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"profile"},r.a.createElement("div",{className:"wrap"},null!==this.props.username?r.a.createElement("p",null,this.props.username):null,r.a.createElement("div",{id:"registration"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row no-gutter"},r.a.createElement("div",{className:"col-md-8 col-lg-6"},r.a.createElement("div",{className:"login d-flex align-items-center py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9 col-lg-8 mx-auto"},r.a.createElement("h3",{className:"login-heading mb-4 text-danger"},"Join Us!"),this.props.loading?r.a.createElement(W.a,{indicator:Q}):this.props.isAuthenticated?r.a.createElement(d.b,{to:"/profile"},r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2"},r.a.createElement("span",null,"Set up Your Profile"))):r.a.createElement("form",{method:"POST",onSubmit:this.authenticate},r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"username",name:"username",id:"inputUsername",className:"form-control",placeholder:"Username",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputUsername"},"Username")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"email",name:"email",id:"inputEmail",className:"form-control",placeholder:"Email",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputEmail"},"Email")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"password",name:"password",id:"inputPassword",className:"form-control",placeholder:"Enter Password",required:!0}),r.a.createElement("label",{htmlFor:"inputPassword"},"Enter Password")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"password",name:"password2",id:"inputPassword2",className:"form-control",placeholder:"Confirm Password",required:!0}),r.a.createElement("label",{htmlFor:"inputPassword2"},"Confirm Password")),r.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember password")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2",type:"submit"},"Sign Up")))))))))))))}}]),a}(r.a.Component),ee=Object(p.b)((function(e){return{isAuthenticated:null!==e.auth.token,loading:e.auth.loading,token:e.auth.token,username:e.auth.username,chats:e.message.chats}}),(function(e){return{login:function(t,a){return e(k(t,a))},logout:function(){return e(v())},signup:function(t,a,n,r){return e(N(t,a,n,r))},addChat:function(){return e({type:"OPEN_ADD_CHAT_POPUP"})}}}))(Z),te=a(374),ae=a(106),ne=a.n(ae),re=a(136),se=a.n(re),ce=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChange=function(){n.setState({music:"off"})},n.state={music:"on"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/register",className:"nav-link"},r.a.createElement("button",{className:"nav-link btn btn-outline-danger btn-sm text-dark"},"Register"))),r.a.createElement("li",{className:"nav-item"},"on"===this.state.music?r.a.createElement("embed",{src:se.a,autostart:"true",loop:!0,width:"0",height:"0"}):""),r.a.createElement("li",{className:"nav-item"},"Music ",r.a.createElement(te.a,{size:"small",defaultChecked:!0,onChange:this.onChange}))),a=r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("div",{className:"nav-link dropdown-toggle text-dark",id:"navbarDropdown2",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Hi, ",this.props.username),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown2"},r.a.createElement(d.b,{to:"/profile",className:"dropdown-item"},"My Profile"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("div",{className:"dropdown-item"},"Music"," ",r.a.createElement(te.a,{size:"small",defaultChecked:!0,onChange:this.onChange})))),r.a.createElement("li",{className:"nav-item"},"on"===this.state.music?r.a.createElement("embed",{src:se.a,autostart:"true",loop:!0,width:"0",height:"0"}):""),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{onClick:function(t){return e.props.logout(e.props.token)},className:"nav-link btn btn-outline-danger btn-sm text-dark mx-2"},"Logout")));return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-light sticky-top"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement(d.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:ne.a,width:"70",height:"30",alt:""}))),this.props.isAuthenticated?a:t))}}]),a}(n.Component),oe=Object(p.b)((function(e){return{isAuthenticated:null!==e.auth.token,username:e.auth.username,token:e.auth.token}}),(function(e){return{logout:function(t){return e(v(t))}}}))(ce),le=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return null===this.props.token?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"container portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"heading"},r.a.createElement("img",{src:"https://image.ibb.co/cbCMvA/logo.png"})))),r.a.createElement("div",{className:"bio-info"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"bio-image"},r.a.createElement("img",{src:this.props.profile.photo,alt:"user_profile_image",width:"500",height:"500"}))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"bio-content"},r.a.createElement("h1",null,"Hi there, I'm"," ",this.props.username[0].toUpperCase()+this.props.username.slice(1)),r.a.createElement("h6",null,this.props.profile.bio),r.a.createElement("hr",null),r.a.createElement("span",null,this.props.profile.phone_number),r.a.createElement("p",null,this.props.profile.catch_phrase))))))}}]),a}(r.a.Component),ie=Object(p.b)((function(e){return{username:e.auth.username,token:e.auth.token,profile:e.auth.profile}}),(function(e){return{getProfile:function(t){return e(w(t))}}}))(le),ue=(a(364),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),S.addCallbacks(n.props.setMessages.bind(Object(l.a)(n)),n.props.addMessage.bind(Object(l.a)(n))),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}}]),Object(i.a)(a,[{key:"render",value:function(){return this.props.getProfile(this.props.token),r.a.createElement(d.a,null,r.a.createElement(oe,null),r.a.createElement("div",{className:"container-fluid h-100 app"},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/register"},r.a.createElement(ee,null)),r.a.createElement(h.b,{path:"/chat"},r.a.createElement("img",{src:ne.a,width:"100%",height:"500"}),r.a.createElement("div",{className:"container-fluid row justify-content-center"},r.a.createElement(U,null),r.a.createElement("div",{className:"col-md-8 col-xl-6 chat"},r.a.createElement("div",{className:"card"},r.a.createElement(q,{isVisible:this.props.showAddChatPopup,close:this.props.closeAddChatPopup}),r.a.createElement(F,null),r.a.createElement(P,null))))),r.a.createElement(h.b,{path:"/profile"},r.a.createElement(ie,null)),r.a.createElement(h.b,{exact:!0,path:"/"},r.a.createElement($,null)))))}}]),a}(r.a.Component)),me=Object(p.b)((function(e){return{showAddChatPopup:e.nav.showAddChatPopup,authenticated:e.auth.token,token:e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token"),a=localStorage.getItem("username");e(void 0===t?v():E(a,t))}))},getProfile:function(t){return e(w(t))},closeAddChatPopup:function(){return e({type:"CLOSE_ADD_CHAT_POPUP"})},addMessage:function(t){return e(function(e){return{type:"ADD_MESSAGE",message:e}}(t))},setMessages:function(t){return e(function(e){return{type:"SET_MESSAGES",messages:e}}(t))}}}))(ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=a(58),de=a(188),he=(a(365),a(366),function(e,t){return Object(O.a)(Object(O.a)({},e),t)}),fe={token:null,username:null,error:null,loading:!1,profile:null},ge=function(e,t){return he(e,{error:null,loading:!0})},Ee=function(e,t){return he(e,{token:t.token,username:t.username,error:null,loading:!1})},be=function(e,t){return he(e,{error:t.error,loading:!1})},ve=function(e,t){return he(e,{token:null,username:null})},ke=function(e,t){return he(e,{profile:t.profile})},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return ge(e);case"AUTH_SUCCESS":return Ee(e,t);case"AUTH_FAIL":return be(e,t);case"AUTH_LOGOUT":return ve(e);case"GET_PROFILE_SUCCESS":return ke(e,t);default:return e}},we={showAddChatPopup:!1},ye=function(e,t){return he(e,{showAddChatPopup:!0})},Oe=function(e,t){return he(e,{showAddChatPopup:!1})},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_ADD_CHAT_POPUP":return ye(e);case"CLOSE_ADD_CHAT_POPUP":return Oe(e);default:return e}},Se={messages:[],chats:[]},_e=function(e,t){return he(e,{messages:[].concat(Object(I.a)(e.messages),[t.message])})},je=function(e,t){return he(e,{messages:t.messages.reverse()})},Ae=function(e,t){return he(e,{chats:t.chats})},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return _e(e,t);case"SET_MESSAGES":return je(e,t);case"GET_CHATS_SUCCESS":return Ae(e,t);default:return e}},Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d;var xe=function(){var e=Object(pe.c)({auth:Ne,nav:Ce,message:Pe});return Object(pe.e)(e,Te(Object(pe.a)(de.a)))}();c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:xe},r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[194,1,2]]]);
//# sourceMappingURL=main.e00c4c36.chunk.js.map