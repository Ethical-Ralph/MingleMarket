(this.webpackJsonpnewfrontend=this.webpackJsonpnewfrontend||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/hey_mingle.836efd55.png"},113:function(e,t,a){e.exports=a.p+"static/media/Sunfire - Young Free And Single.e2603b8f.mp3"},155:function(e,t,a){e.exports=a.p+"static/media/background-video.3b59a926.mp4"},156:function(e,t,a){e.exports=a.p+"static/media/logo.aa267554.png"},158:function(e,t,a){e.exports=a.p+"static/media/balloon1.65ca6f4f.PNG"},159:function(e,t,a){e.exports=a.p+"static/media/balloon2.e298c2fd.PNG"},160:function(e,t,a){e.exports=a.p+"static/media/balloon3.3f494630.PNG"},161:function(e,t,a){e.exports=a.p+"static/media/cake1.a5d622e0.PNG"},162:function(e,t,a){e.exports=a.p+"static/media/cake2.0c0bb880.PNG"},163:function(e,t,a){e.exports=a.p+"static/media/hat1.10c967a0.PNG"},164:function(e,t,a){e.exports=a.p+"static/media/hat2.43b485f6.PNG"},171:function(e,t,a){e.exports=a(314)},176:function(e,t,a){},311:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),c=(a(176),a(38)),l=a(12),i=a(10),u=a(64),m=a(15),p=a(14),d=a(27),h=a.n(d),f=a(18),g=a(21),E=a(17),b="https://mingle-market.herokuapp.com/",v=function(e,t){return{type:"AUTH_SUCCESS",token:t,username:e}},k=function(e){return{type:"AUTH_FAIL",error:e}},y=function(e){var t={"Content-Type":"application/json",Authorization:"Token ".concat(e)};return h.a.post(b+"accounts/api/auth/logout/",null,{headers:t}).then((function(e){localStorage.removeItem("token"),localStorage.removeItem("username")})),{type:"AUTH_LOGOUT"}},N=function(e,t){return function(a){a({type:"AUTH_START"});h.a.post(b+"accounts/api/auth/login",{username:e,password:t},{headers:{"Content-Type":"application/json"}}).then((function(t){var n=t.data.token;localStorage.setItem("token",n),localStorage.setItem("username",e),a(v(e,n))})).catch((function(e){console.log(e.response),a(k(e))}))}},C=function(e,t,a){return function(n){n({type:"AUTH_START"}),h.a.post(b+"accounts/api/auth/register",{username:e,email:t,password:a}).then((function(t){var a=t.data.token;localStorage.setItem("token",a),localStorage.setItem("username",e),n(v(e,a))})).catch((function(e){console.log(e.response),n(k(e))}))}},w=function(e){return function(t){var a={"Content-Type":"application/json",Authorization:"Token ".concat(e)};h.a.get(b+"chat/contact_detail/",{headers:a}).then((function(e){t({type:"GET_PROFILE_SUCCESS",profile:e.data})})).catch((function(e){t(k(e))}))}},O=function(e,t){return function(a){var n={"Content-Type":"application/json",Authorization:"Token ".concat(t)};h.a.get(b+"chat/?username=".concat(e),{headers:n}).then((function(e){return a({type:"GET_CHATS_SUCCESS",chats:e.data})}))}},j=function(){function e(){Object(l.a)(this,e),this.callbacks={},this.socketRef=null}return Object(i.a)(e,null,[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),Object(i.a)(e,[{key:"connect",value:function(e){var t=this,a="ws://localhost:8000/ws/chat/".concat(e,"/");console.log(a),this.socketRef=new WebSocket(a),this.socketRef.onopen=function(){console.log("websocket is open")},this.socketNewMessage(JSON.stringify({command:"fetch_messages"})),this.socketRef.onmessage=function(e){t.socketNewMessage(e.data)},this.socketRef.onerror=function(e){console.log(e.mesage)},this.socketRef.onclose=function(){console.log("websocket is closed"),t.connect()}}},{key:"disconnect",value:function(){this.socketRef.close(),this.socketRef.onclose=function(){console.log("socket is closed")}}},{key:"socketNewMessage",value:function(e){var t=JSON.parse(e),a=t.command;0!==Object.keys(this.callbacks).length&&("messages"===a&&this.callbacks[a](t.messages),"new_message"===a&&this.callbacks[a](t.message))}},{key:"fetchMessages",value:function(e,t){this.sendMessage({command:"fetch_messages",username:e,chatId:t})}},{key:"newChatMessage",value:function(e){this.sendMessage({command:"new_message",from:e.from,message:e.content,chatId:e.chatId})}},{key:"addCallbacks",value:function(e,t){this.callbacks.messages=e,this.callbacks.new_message=t}},{key:"sendMessage",value:function(e){try{this.socketRef.send(JSON.stringify(Object(c.a)({},e)))}catch(t){console.log(t.mesasge)}}},{key:"state",value:function(){return this.socketRef.readyState}},{key:"waitForSocketConnection",value:function(e){var t=this.socketRef,a=this.waitForSocketConnection;setTimeout((function(){if(1===t.readyState)return console.log("Connection is secure"),void(null!=e&&e());console.log("Waiting for connection...."),a(e)}),1)}}]),e}();j.instance=null;var S=j.getInstance(),_=function(e){return e.children},A=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={message:""},n.messageChangeHandler=function(e){n.setState({message:e.target.value})},n.sendMessageHandler=function(e){e.preventDefault();var t={from:n.props.username,content:n.state.message,chatId:n.props.match.params.chatID};S.newChatMessage(t),n.setState({message:""})},n.renderTimestamp=function(e){var t=Math.round(((new Date).getTime()-new Date(e).getTime())/6e4);return t<1?"just now...":t<60&&t>1?"".concat(t," minutes ago"):t<1440&&t>60?"".concat(Math.round(t/60)," hours ago"):t<44640&&t>1440?"".concat(Math.round(t/1440)," days ago"):"".concat(new Date(e))},n.renderMessages=function(e){var t=n.props.username;return e.map((function(e,a,o){return r.a.createElement("div",{key:e.id,className:e.author===t?"d-flex justify-content-end mb-4":"d-flex justify-content-start mb-4"},r.a.createElement("div",{className:"img_cont_msg"},r.a.createElement("img",{src:"http://emilcarlsson.se/assets/mikeross.png",className:"rounded-circle user_img_msg",alt:"user"})),r.a.createElement("div",{className:"msg_cotainer"},e.author,r.a.createElement("br",null),e.content,r.a.createElement("span",{className:"msg_time"},n.renderTimestamp(e.timestamp))))}))},n.initialiseChat(),n}return Object(i.a)(a,[{key:"initialiseChat",value:function(){var e=this;this.waitForSocketConnection((function(){S.fetchMessages(e.props.username,e.props.match.params.chatID)})),S.connect(this.props.match.params.chatID)}}]),Object(i.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;console.log(e),this.props.match.params.chatID!==e.match.params.chatID&&(S.disconnect(),this.waitForSocketConnection((function(){S.fetchMessages(t.props.username,e.match.params.chatID)})),S.connect(e.match.params.chatID))}},{key:"waitForSocketConnection",value:function(e){var t=this;setTimeout((function(){if(1===S.state())return console.log("Connection is made"),void e();console.log("wait for connection..."),t.waitForSocketConnection(e)}),100)}},{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement("div",{className:"card-body msg_card_body"},this.props.messages&&this.renderMessages(this.props.messages)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("form",{onSubmit:this.sendMessageHandler},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text attach_btn"},r.a.createElement("i",{className:"fas fa-paperclip"}))),r.a.createElement("input",{onChange:this.messageChangeHandler,value:this.state.message,required:!0,className:"form-control type_msg",id:"chat-message-input",type:"text",placeholder:"Type your message..."}),r.a.createElement("div",{id:"chat-message-submit",className:"input-group-append"},r.a.createElement("span",{className:"input-group-text send_btn"},r.a.createElement("i",{className:"fa fa-paper-plane","aria-hidden":"true"})))))))}}]),a}(r.a.Component),P=Object(f.b)((function(e){return{username:e.auth.username,messages:e.message.messages}}))(A),x=function(){var e=Object(E.g)().path;return r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"".concat(e,"/:chatID"),component:P}))};var T=function(e){var t=Object(E.g)().url;return r.a.createElement(g.c,{to:"".concat(t).concat(e.chatURL),style:{color:"#fff"}},r.a.createElement("li",{className:"active"},r.a.createElement("div",{className:"d-flex bd-highlight"},r.a.createElement("div",{className:"user_info"},r.a.createElement("span",null,e.name)))))},U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"waitForAuthDetails",value:function(){var e=this;setTimeout((function(){null===e.props.token||void 0===e.props.token?(console.log("waiting for auth details"),e.waitForAuthDetails()):e.props.getUserChats(e.props.username,e.props.token)}),100)}},{key:"componentDidMount",value:function(){this.waitForAuthDetails()}},{key:"openAddChatPopup",value:function(){this.props.addChat()}},{key:"render",value:function(){var e=this,t=this.props.chats.map((function(e){return r.a.createElement(T,{key:e.id,name:"".concat(e.name),status:"online",chatURL:"/".concat(e.id)})}));return r.a.createElement("div",{className:"col-md-4 col-xl-3 chat"},r.a.createElement("div",{className:"card mb-sm-3 mb-md-0 contacts_card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",placeholder:"Search...",name:"",className:"form-control search"}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text search_btn"},r.a.createElement("i",{className:"fas fa-search"}))))),r.a.createElement("div",{className:"card-body contacts_body"},r.a.createElement("ul",{className:"contacts"},t)),r.a.createElement("div",{id:"card-footer"},r.a.createElement("button",{className:"d-flex justify-content-start btn-sm btn-danger",onClick:function(){return e.openAddChatPopup()}},r.a.createElement("i",{className:"fa fa-user-plus fa-fw","aria-hidden":"true"})," ",r.a.createElement("span",null,"Add Chat")))))}}]),a}(r.a.Component),D=Object(f.b)((function(e){return{token:e.auth.token,username:e.auth.username,chats:e.message.chats}}),(function(e){return{logout:function(){return e(y())},addChat:function(){return e({type:"OPEN_ADD_CHAT_POPUP"})},getUserChats:function(t,a){return e(O(t,a))}}}))(U),F=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return null===this.props.token?r.a.createElement(E.a,{to:"/"}):r.a.createElement("div",{className:"card-header msg_head"},r.a.createElement("div",{className:"d-flex bd-highlight"},r.a.createElement("div",{className:"img_cont"},r.a.createElement("img",{src:"http://emilcarlsson.se/assets/harveyspecter.png",alt:"",className:"rounded-circle user_img"}),r.a.createElement("span",{className:"online_icon"})),r.a.createElement("div",{className:"user_info"},r.a.createElement("span",null,this.props.username),r.a.createElement("p",null,"1767 Messages")),r.a.createElement("div",{className:"video_cam"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-video"})),r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-phone"})))),r.a.createElement("span",{id:"action_menu_btn"},r.a.createElement("i",{className:"fas fa-ellipsis-v"})),r.a.createElement("div",{className:"action_menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-user-circle"})," View profile"),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-plus"})," Add to group"))))}}]),a}(r.a.Component),M=Object(f.b)((function(e){return{username:e.auth.username,token:e.auth.token}}))(F),I=a(318),H=a(97),R=a(317),B=a(319),G=a(82),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={usernames:[],error:null},e.handleChange=function(t){e.setState({usernames:t})},e.handleFinish=function(t){var a=e.state.usernames,n=[].concat(Object(H.a)(a),[e.props.username]),r={"Content-Type":"application/json",Authorization:"Token ".concat(e.props.token)};h.a.defaults.xsrfHeaderName="X-CSRFTOKEN",h.a.defaults.xsrfCookieName="csrftoken",h.a.post(b+"chat/create/",{messages:[],participants:n},{headers:r}).then((function(t){e.props.history.push("/".concat(t.data.id)),e.props.closeAddChatPopup(),e.props.getUserChats(e.props.username,e.props.token)})).catch((function(t){console.error(t),e.setState({error:t})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(R.a,{layout:"inline",name:"username",rules:[{required:!0,message:"Please input the username of whom you want to chat with"}],onFinish:this.handleFinish},this.state.error?"".concat(this.state.error):null,r.a.createElement(R.a.Item,null,r.a.createElement(B.a,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:this.handleChange},[])),r.a.createElement(R.a.Item,null,r.a.createElement(G.a,{type:"primary",htmlType:"submit"},"Start a chat")))}}]),a}(r.a.Component),z=Object(E.h)(Object(f.b)((function(e){return{token:e.auth.token,username:e.auth.username}}),(function(e){return{closeAddChatPopup:function(){return e({type:"CLOSE_ADD_CHAT_POPUP"})},getUserChats:function(t,a){return e(O(t,a))}}}))(L)),q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(I.a,{centered:!0,footer:null,visible:this.props.isVisible,onCancel:this.props.close},r.a.createElement(z,null))}}]),a}(r.a.Component),W=a(316),J=a(320),V=r.a.createElement(J.a,{style:{fontSize:24},spin:!0}),X=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).authenticate=function(t){t.preventDefault(),e.props.login(t.target.username.value,t.target.password.value)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"profile"},r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row no-gutter"},r.a.createElement("div",{className:"col-md-8 col-lg-6"},r.a.createElement("div",{className:"login d-flex align-items-center py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9 col-lg-8 mx-auto"},r.a.createElement("h2",{className:"login-heading mb-4 text-danger"},"Welcome back!"),this.props.loading?r.a.createElement(W.a,{indicator:V}):this.props.isAuthenticated?r.a.createElement("div",null,r.a.createElement(g.b,{to:"/chat"},r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2"},r.a.createElement("span",null,"Chat Room"))),r.a.createElement(g.b,{to:"/update-profile"},r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2"},r.a.createElement("span",null,"Account Settings"))),r.a.createElement("button",{onClick:function(){return e.props.logout()},className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2"},r.a.createElement("span",null,"Logout"))):r.a.createElement("form",{method:"POST",onSubmit:this.authenticate},r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"username",name:"username",id:"inputEmail",className:"form-control",placeholder:"Username",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputEmail"},"Username")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"password",name:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("label",{htmlFor:"inputPassword"},"Password")),r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2",type:"submit"},"Log in"),r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"small",href:"#"},"Forgot password?")))))))))))))}}]),a}(r.a.Component),Y=Object(f.b)((function(e){return{isAuthenticated:null!==e.auth.token,loading:e.auth.loading,token:e.auth.token,username:e.auth.username,chats:e.message.chats}}),(function(e){return{login:function(t,a){return e(N(t,a))},logout:function(){return e(y())},signup:function(t,a,n,r){return e(C(t,a,n))},addChat:function(){return e({type:"OPEN_ADD_CHAT_POPUP"})}}}))(X),K=a(154),$=a.n(K),Q=a(153),Z=a.n(Q),ee=function(e){var t=e.start,a=e.type,n=$()(),o=n.width,s=n.height;return r.a.createElement(Z.a,{width:o,height:s,numberOfPieces:t&&0===a?1110:0})},te=a(155),ae=a.n(te),ne=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("video",{autoPlay:!0,loop:!0,style:{position:"absolute",width:"100%",left:"50%",top:"50%",height:"100%",objectFit:"cover",transform:"translate(-50%, -50%)",zIndex:"-1"}},r.a.createElement("source",{src:ae.a,type:"video/mp4"})),r.a.createElement(ee,null),r.a.createElement(Y,null))}}]),a}(r.a.Component),re=r.a.createElement(J.a,{style:{fontSize:24},spin:!0}),oe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loginForm:!0},e.changeForm=function(){e.setState({loginForm:!e.state.loginForm})},e.authenticate=function(t){t.preventDefault(),e.props.signup(t.target.username.value,t.target.email.value,t.target.password.value,t.target.password2.value)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"profile"},r.a.createElement("div",{className:"wrap"},null!==this.props.username?r.a.createElement("p",null,this.props.username):null,r.a.createElement("div",{id:"registration"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row no-gutter"},r.a.createElement("div",{className:"col-md-8 col-lg-6"},r.a.createElement("div",{className:"login d-flex align-items-center py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9 col-lg-8 mx-auto"},r.a.createElement("h3",{className:"login-heading mb-4 text-danger"},"Join Us!"),this.props.loading?r.a.createElement(W.a,{indicator:re}):this.props.isAuthenticated?r.a.createElement(g.b,{to:"/update-profile"},r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2"},r.a.createElement("span",null,"Set up Your Profile"))):r.a.createElement("form",{method:"POST",onSubmit:this.authenticate},r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"username",name:"username",id:"inputUsername",className:"form-control",placeholder:"Username",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputUsername"},"Username")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"email",name:"email",id:"inputEmail",className:"form-control",placeholder:"Email",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputEmail"},"Email")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"password",name:"password",id:"inputPassword",className:"form-control",placeholder:"Enter Password",required:!0}),r.a.createElement("label",{htmlFor:"inputPassword"},"Enter Password")),r.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember password")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2",type:"submit"},"Sign Up")))))))))))))}}]),a}(r.a.Component),se=Object(f.b)((function(e){return{isAuthenticated:null!==e.auth.token,loading:e.auth.loading,token:e.auth.token,username:e.auth.username,chats:e.message.chats}}),(function(e){return{login:function(t,a){return e(N(t,a))},logout:function(){return e(y())},signup:function(t,a,n){return e(C(t,a,n))},addChat:function(){return e({type:"OPEN_ADD_CHAT_POPUP"})}}}))(oe),ce=a(321),le=a(156),ie=a.n(le),ue=a(113),me=a.n(ue),pe=[{name:"Confetti"},{name:"Balloon 1"},{name:"Balloon 2"},{name:"Balloon 3"},{name:"Cake 1"},{name:"Cake 2"},{name:"Hat 1"},{name:"Hat 2"},{name:"Mingle Logo"}],de=function(e){var t=e.toggleConfetti,a=e.current,n=e.start;return pe.map((function(e,o){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dropdown-item"},e.name," ",r.a.createElement(ce.a,{size:"small",onChange:function(e){return t(o,e)},checked:a===o&&n})),r.a.createElement("div",{className:"dropdown-divider"}))}))},he=[{color:"blue",value:"blue"},{color:"red",value:"red"},{color:"green",value:"green"},{color:"yellow",value:"yellow"},{color:"default",value:"transparent"}],fe=function(e){var t=e.toggleBackground,a=e.currentBg;return he.map((function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dropdown-item"},e.color," ",r.a.createElement(ce.a,{size:"small",onChange:function(){return t(e.value)},checked:a===e.value})),r.a.createElement("div",{className:"dropdown-divider"}))}))},ge=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(){n.setState({music:!n.state.music})},n.state={music:!0},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{to:"/register",className:"nav-link"},r.a.createElement("button",{className:"nav-link btn btn-outline-danger btn-sm text-dark"},"Register"))),r.a.createElement("li",{className:"nav-item"},!0===this.state.music?r.a.createElement("audio",{autoPlay:"autoplay",hidden:"hidden"},r.a.createElement("source",{src:me.a,type:"audio/mpeg"})):""),r.a.createElement("li",{className:"nav-item"},"Music ",r.a.createElement(ce.a,{size:"small",defaultChecked:!0,onChange:this.onChange}))),a=r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("div",{className:"nav-link dropdown-toggle text-dark",id:"navbarDropdown2",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Hi, ",this.props.username),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown2"},r.a.createElement(g.b,{to:"/profile",className:"dropdown-item"},"My Profile"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("div",{className:"dropdown-item"},"Music"," ",r.a.createElement(ce.a,{size:"small",defaultChecked:!0,onChange:this.onChange})))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("div",{className:"nav-link dropdown-toggle text-dark",id:"navbarDropdown2",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Animations"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown2"},r.a.createElement(de,{toggleConfetti:this.props.toggleConfetti,current:this.props.confettiType,start:this.props.start}))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("div",{className:"nav-link dropdown-toggle text-dark",id:"navbarDropdown2",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Backgrounds"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown2"},r.a.createElement(fe,{color:this.props.bgColor,toggleBackground:this.props.toggleBackground,currentBg:this.props.currentBg}))),r.a.createElement("li",{className:"nav-item"},"on"===this.state.music?r.a.createElement("embed",{src:me.a,autostart:"true",loop:!0,width:"0",height:"0"}):""),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{onClick:function(t){return e.props.logout(e.props.token)},className:"nav-link btn btn-outline-danger btn-sm text-dark mx-2"},"Logout")));return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-light sticky-top"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement(g.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:ie.a,width:"50",height:"50",alt:""}))),this.props.isAuthenticated?a:t))}}]),a}(n.Component),Ee=Object(f.b)((function(e){return{isAuthenticated:null!==e.auth.token,username:e.auth.username,token:e.auth.token}}),(function(e){return{logout:function(t){return e(y(t))}}}))(ge),be=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return null===this.props.token?r.a.createElement(E.a,{to:"/"}):r.a.createElement("div",{className:"container portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"heading"},r.a.createElement("img",{src:"https://image.ibb.co/cbCMvA/logo.png"})))),r.a.createElement("div",{className:"bio-info"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"bio-image"},r.a.createElement("img",{src:this.props.profile.photo,alt:"user_profile_image",width:"500",height:"500"}))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"bio-content"},r.a.createElement("h1",null,"Hi there, I'm"," ",this.props.username[0].toUpperCase()+this.props.username.slice(1)),r.a.createElement("h6",null,this.props.profile.bio),r.a.createElement("hr",null),r.a.createElement("span",null,this.props.profile.phone_number),r.a.createElement("p",null,this.props.profile.catch_phrase))))))}}]),a}(r.a.Component),ve=Object(f.b)((function(e){return{username:e.auth.username,token:e.auth.token,profile:e.auth.profile}}),(function(e){return{getProfile:function(t){return e(w(t))}}}))(be),ke=a(107),ye=a.n(ke),Ne=function(e){var t=e.children,a=e.color;return r.a.createElement("div",{style:{backgroundColor:a}},t)},Ce=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"container bootstrap snippet"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-10"},r.a.createElement("h1",null,"User name")),r.a.createElement("div",{class:"col-sm-2"})),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-3"},r.a.createElement("div",{class:"text-center"},r.a.createElement("img",{src:"http://ssl.gstatic.com/accounts/ui/avatar_2x.png",class:"avatar img-circle img-thumbnail",alt:"avatar"}),r.a.createElement("h6",null,"Upload a different photo..."),r.a.createElement("input",{type:"file",class:"text-center center-block file-upload"}))),r.a.createElement("div",{class:"col-sm-9"},r.a.createElement("form",{class:"form",method:"post",id:"registrationForm"},r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"col-xs-6"},r.a.createElement("label",{for:"first_name"},r.a.createElement("h4",null,"First name")),r.a.createElement("input",{type:"text",class:"form-control",name:"first_name",id:"first_name",placeholder:"first name",title:"enter your first name if any."}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"col-xs-6"},r.a.createElement("label",{for:"last_name"},r.a.createElement("h4",null,"Last name")),r.a.createElement("input",{type:"text",class:"form-control",name:"last_name",id:"last_name",placeholder:"last name",title:"enter your last name if any."}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"col-xs-6"},r.a.createElement("label",{for:"phone"},r.a.createElement("h4",null,"Phone")),r.a.createElement("input",{type:"text",class:"form-control",name:"phone",id:"phone",placeholder:"enter phone",title:"enter your phone number if any."}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"col-xs-6"},r.a.createElement("label",{for:"mobile"},r.a.createElement("h4",null,"Bio")),r.a.createElement("input",{type:"text",class:"form-control",name:"bio",id:"bio",placeholder:"Enter a short description of yourself",title:"Enter a short description of yourself"}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"col-xs-12"},r.a.createElement("button",{class:"btn btn-lg btn-success",type:"submit"},r.a.createElement("i",{class:"glyphicon glyphicon-ok-sign"})," Save")))))))}}]),a}(r.a.Component),we=(a(311),a(157)),Oe=a.n(we),je=a(158),Se=a.n(je),_e=a(159),Ae=a.n(_e),Pe=a(160),xe=a.n(Pe),Te=a(161),Ue=a.n(Te),De=a(162),Fe=a.n(De),Me=a(163),Ie=a.n(Me),He=a(164),Re=a.n(He),Be={1:Se.a,2:Ae.a,3:xe.a,4:Ue.a,5:Fe.a,6:Ie.a,7:Re.a,8:ye.a},Ge=function(e){var t=e.start,a=e.type;return r.a.createElement("div",null,t&&Object.keys(Be).includes(String(a))?r.a.createElement(Oe.a,{images:{0:Be[a]},how:100,time:5,size:"100px",background:"palettedvioletred"}):r.a.createElement(r.a.Fragment,null))},Le=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).baseUrl="https://mingle-market.herokuapp.com/chat/animation/",n.headers={"Content-Type":"application/json"},n.state={startConfetti:!1,confettiType:null,bgColor:"white"},S.addCallbacks(n.props.setMessages.bind(Object(u.a)(n)),n.props.addMessage.bind(Object(u.a)(n))),n.toggleConfetti=n.toggleConfetti.bind(Object(u.a)(n)),n.toggleBackground=n.toggleBackground.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.inter=setInterval((function(){console.log("starting"),h.a.get(e.baseUrl,{headers:e.headers}).then((function(t){e.setState(Object(c.a)({startConfetti:"on"===t.data.startConfetti},t.data))})).catch((function(e){return console.log(e)}))}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.inter)}},{key:"toggleConfetti",value:function(e,t){var a=this;h.a.post(this.baseUrl,Object(c.a)({startConfetti:t?"on":"off",confettiType:e},this.state),{headers:this.headers}).then((function(){a.setState((function(a){return Object(c.a)({startConfetti:t,confettiType:e},a)}))})).catch((function(){a.setState((function(e){return Object(c.a)({},e)}))}))}},{key:"toggleBackground",value:function(e){var t=this;h.a.post(this.baseUrl,Object(c.a)(Object(c.a)({},this.state),{},{bgColor:e}),{headers:this.headers}).then((function(){t.setState({bgColor:e})}))}},{key:"render",value:function(){return this.props.getProfile(this.props.token),r.a.createElement(g.a,null,r.a.createElement(Ee,{toggleConfetti:this.toggleConfetti,toggleBackground:this.toggleBackground,confettiType:this.state.confettiType,start:this.state.startConfetti,currentBg:this.state.bgColor}),r.a.createElement("div",{className:"container-fluid h-100 app"},r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/register"},r.a.createElement(se,null)),r.a.createElement(E.b,{path:"/chat"},r.a.createElement(Ne,{color:this.state.bgColor},r.a.createElement(ee,{start:this.state.startConfetti,type:this.state.confettiType}),r.a.createElement(Ge,{start:this.state.startConfetti,type:this.state.confettiType}),r.a.createElement("div",{className:"container-fluid row justify-content-center"},r.a.createElement(D,null),r.a.createElement("div",{className:"col-md-8 col-xl-6 chat"},r.a.createElement("div",{className:"card"},r.a.createElement(q,{isVisible:this.props.showAddChatPopup,close:this.props.closeAddChatPopup}),r.a.createElement(M,null),r.a.createElement(x,null)))))),r.a.createElement(E.b,{path:"/profile"},r.a.createElement(ve,null)),r.a.createElement(E.b,{path:"/update-profile"},r.a.createElement(Ce,null)),r.a.createElement(E.b,{exact:!0,path:"/"},r.a.createElement(ne,null)))))}}]),a}(r.a.Component),ze=Object(f.b)((function(e){return{showAddChatPopup:e.nav.showAddChatPopup,authenticated:e.auth.token,token:e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token"),a=localStorage.getItem("username");e(void 0===t?y():v(a,t))}))},getProfile:function(t){return e(w(t))},closeAddChatPopup:function(){return e({type:"CLOSE_ADD_CHAT_POPUP"})},addMessage:function(t){return e(function(e){return{type:"ADD_MESSAGE",message:e}}(t))},setMessages:function(t){return e(function(e){return{type:"SET_MESSAGES",messages:e}}(t))}}}))(Le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=a(65),We=a(165),Je=(a(312),a(313),function(e,t){return Object(c.a)(Object(c.a)({},e),t)}),Ve={token:null,username:null,error:null,loading:!1,profile:null},Xe=function(e,t){return Je(e,{error:null,loading:!0})},Ye=function(e,t){return Je(e,{token:t.token,username:t.username,error:null,loading:!1})},Ke=function(e,t){return Je(e,{error:t.error,loading:!1})},$e=function(e,t){return Je(e,{token:null,username:null})},Qe=function(e,t){return Je(e,{profile:t.profile})},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Xe(e);case"AUTH_SUCCESS":return Ye(e,t);case"AUTH_FAIL":return Ke(e,t);case"AUTH_LOGOUT":return $e(e);case"GET_PROFILE_SUCCESS":return Qe(e,t);default:return e}},et={showAddChatPopup:!1},tt=function(e,t){return Je(e,{showAddChatPopup:!0})},at=function(e,t){return Je(e,{showAddChatPopup:!1})},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_ADD_CHAT_POPUP":return tt(e);case"CLOSE_ADD_CHAT_POPUP":return at(e);default:return e}},rt={messages:[],chats:[]},ot=function(e,t){return Je(e,{messages:[].concat(Object(H.a)(e.messages),[t.message])})},st=function(e,t){return Je(e,{messages:t.messages.reverse()})},ct=function(e,t){return Je(e,{chats:t.chats})},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return ot(e,t);case"SET_MESSAGES":return st(e,t);case"GET_CHATS_SUCCESS":return ct(e,t);default:return e}},it=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||qe.d;var ut=function(){var e=Object(qe.c)({auth:Ze,nav:nt,message:lt});return Object(qe.e)(e,it(Object(qe.a)(We.a)))}();s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:ut},r.a.createElement(ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.7172f800.chunk.js.map