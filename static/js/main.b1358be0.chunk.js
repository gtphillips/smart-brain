(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(35),r=a.n(s),o=(a(70),a(10)),l=a(11),c=a(13),m=a(12),u=a(62),p=a.n(u),h=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signOut")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signIn")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("Register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},d=a(63),g=a.n(d),b=(a(219),a(64)),f=a.n(b),v=function(){return i.a.createElement("div",{className:"ma5 mt0"},i.a.createElement(g.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3"}," ",i.a.createElement("img",{style:{paddingTop:"-2px"},src:f.a,alt:"logo"}),"  ")))},w=(a(220),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in you pictures. Give it a try!"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"form center pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),E=(a(221),function(e){var t=e.imageUrl,a=e.box;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),N=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is...")),i.a.createElement("div",{className:"white f1"},a))},C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://still-cove-70158.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSubmitSignIn})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},href:"#0",className:"f6 link dim black db pointer"},"Register")))))}}]),a}(i.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){fetch("https://still-cove-70158.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:this.onSubmitRegister})))))}}]),a}(n.Component),k=(a(222),{particles:{number:{value:80,density:{enable:!0,value_area:800}}}}),S={input:"",imageUrl:"",box:{},route:"signIn",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},I=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://still-cove-70158.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://still-cove-70158.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signOut"===t?e.setState(S):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signIn",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,s=e.box;return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{className:"particles",params:k}),i.a.createElement(h,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(N,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(w,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(E,{box:s,imageUrl:a})):"signIn"===n?i.a.createElement(C,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(223);r.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a.p+"static/media/brain.8c8d50ee.png"},65:function(e,t,a){e.exports=a(224)},70:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.b1358be0.chunk.js.map