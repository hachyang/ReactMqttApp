(this.webpackJsonpmqttreact=this.webpackJsonpmqttreact||[]).push([[0],{248:function(e,t,n){e.exports=n(499)},253:function(e,t,n){},380:function(e,t){},382:function(e,t){},449:function(e,t){},451:function(e,t){},472:function(e,t){},473:function(e,t){},479:function(e,t,n){},499:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(24),r=n.n(c),s=(n(253),n(120)),l=n(121),i=n(122),u=n(135),m=n(133),d=n(44),f=n(500),g=n(87),v=n(53),b=n(503),E=n(501),h=n(157),p=function(e){var t=e.connect,n=e.disconnect,a=e.connectBtn,c=f.a.useForm(),r=Object(d.a)(c,1)[0],s={host:"192.168.0.43",clientId:"mqttjs_ + ".concat(Math.random().toString(16).substr(2,8)),port:9001},l=o.a.createElement(f.a,{layout:"vertical",name:"basic",form:r,initialValues:s,onFinish:function(e){var n=e.host,a=e.clientId,o=e.port,c=e.username,r=e.password,s="ws://".concat(n,":").concat(o,"/mqtt"),l={keepalive:30,protocolId:"MQTT",protocolVersion:4,clean:!0,reconnectPeriod:1e3,connectTimeout:3e4,will:{topic:"WillMsg",payload:"Connection Closed abnormally..!",qos:0,retain:!1},rejectUnauthorized:!1};l.clientId=a,l.username=c,l.password=r,t(s,l)}},o.a.createElement(g.a,{gutter:20},o.a.createElement(v.a,{span:8},o.a.createElement(f.a.Item,{label:"Host",name:"host"},o.a.createElement(b.a,null))),o.a.createElement(v.a,{span:8},o.a.createElement(f.a.Item,{label:"Port",name:"port"},o.a.createElement(b.a,null))),o.a.createElement(v.a,{span:8},o.a.createElement(f.a.Item,{label:"Client ID",name:"clientId"},o.a.createElement(b.a,null)))));return o.a.createElement(E.a,{title:"Connection",actions:[o.a.createElement(h.a,{type:"primary",onClick:function(){r.submit()}},a),o.a.createElement(h.a,{danger:!0,onClick:function(){n()}},"Disconnect")]},l)},C=n(106),S=function(e){var t=e.deviceID,n=e.publish,c=f.a.useForm(),r=Object(d.a)(c,1)[0],s=Object(a.useContext)(N),l={topic:"/devices/"+t+"/control",payload:"stop",qos:0},i=o.a.createElement(f.a,{layout:"vertical",name:"basic",form:r,initialValues:l,onFinish:function(e){n(e)}},o.a.createElement(g.a,{gutter:20},o.a.createElement(v.a,{span:12},o.a.createElement(f.a.Item,{label:"Topic",name:"topic"},o.a.createElement(b.a,null))),o.a.createElement(v.a,{span:12},o.a.createElement(f.a.Item,{label:"QoS",name:"qos"},o.a.createElement(C.a,{options:s}))),o.a.createElement(v.a,{span:24},o.a.createElement(f.a.Item,{label:"Payload",name:"payload"},o.a.createElement(b.a.TextArea,null))),o.a.createElement(v.a,{span:8,offset:16,style:{textAlign:"right"}},o.a.createElement(f.a.Item,null,o.a.createElement(h.a,{type:"primary",htmlType:"submit"},"Publish")))));return o.a.createElement(E.a,{title:"Publisher"},i)},O=function(e){var t=e.deviceID,n=e.sub,c=e.unSub,r=e.showUnsub,s=f.a.useForm(),l=Object(d.a)(s,1)[0],i=Object(a.useContext)(N),u={topic:"/devices/"+t+"/reading",qos:0},m=o.a.createElement(f.a,{layout:"vertical",name:"basic",form:l,initialValues:u,onFinish:function(e){n(e)}},o.a.createElement(g.a,{gutter:20},o.a.createElement(v.a,{span:12},o.a.createElement(f.a.Item,{label:"Topic",name:"topic"},o.a.createElement(b.a,null))),o.a.createElement(v.a,{span:12},o.a.createElement(f.a.Item,{label:"QoS",name:"qos"},o.a.createElement(C.a,{options:i}))),o.a.createElement(v.a,{span:8,offset:16,style:{textAlign:"right"}},o.a.createElement(f.a.Item,null,o.a.createElement(h.a,{type:"primary",htmlType:"submit"},"Subscribe"),r?o.a.createElement(h.a,{type:"danger",style:{marginLeft:"10px"},onClick:function(){var e=l.getFieldsValue();c(e)}},"Unsubscribe"):null))));return o.a.createElement(E.a,{title:"Subscriber"},m)},I=n(244),y=n(502),j=function(e){var t=e.deviceIP,n=e.payload,c=Object(a.useState)([]),r=Object(d.a)(c,2),s=r[0],l=r[1];Object(a.useEffect)((function(){n.topic&&l((function(e){return[].concat(Object(I.a)(e),[n])}))}),[n]);return o.a.createElement(E.a,{title:"Receiver"},o.a.createElement("p",null,"Device IP: ",t," "),o.a.createElement("button",{onClick:function(){return l([])}}," Clear "),o.a.createElement(y.b,{size:"small",bordered:!0,dataSource:s,renderItem:function(e){return o.a.createElement(y.b.Item,null,o.a.createElement(y.b.Item.Meta,{title:e.topic,description:e.message}))}}))},R=n(241),D=n.n(R),N=Object(a.createContext)([]),w=[{label:"0",value:0},{label:"1",value:1},{label:"2",value:2}],k=function(e){var t=e.userInfo,n=Object(a.useState)(null),c=Object(d.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(!1),i=Object(d.a)(l,2),u=i[0],m=i[1],f=Object(a.useState)({}),g=Object(d.a)(f,2),v=g[0],b=g[1],E=Object(a.useState)("Connect"),h=Object(d.a)(E,2),C=h[0],I=h[1];Object(a.useEffect)((function(){r&&(r.on("connect",(function(){I("Connected")})),r.on("error",(function(e){console.error("Connection error: ",e),r.end()})),r.on("reconnect",(function(){I("Reconnecting")})),r.on("message",(function(e,t){var n={topic:e,message:t.toString()};b(n)})))}),[r]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{connect:function(e,t){I("Connecting"),s(D.a.connect(e,t))},disconnect:function(){r&&r.end((function(){I("Connect")}))},connectBtn:C}),o.a.createElement("p",null,"Device ID:",t.deviceID),o.a.createElement("a",{href:"http://192.168.0.43:1880/ui",style:{color:"red"}},o.a.createElement("h1",null,"Go Home")),o.a.createElement(N.Provider,{value:w},o.a.createElement(O,{deviceID:t.deviceID,sub:function(e){if(r){var t=e.topic,n=e.qos;r.subscribe(t,{qos:n},(function(e){e?console.log("Subscribe to topics error",e):m(!0)}))}},unSub:function(e){if(r){var t=e.topic;r.unsubscribe(t,(function(e){e?console.log("Unsubscribe error",e):m(!1)}))}},showUnsub:u}),o.a.createElement(S,{deviceID:t.deviceID,publish:function(e){if(r){var t=e.topic,n=e.qos,a=e.payload;r.publish(t,a,{qos:n},(function(e){e&&console.log("Publish error: ",e)}))}}})),o.a.createElement(j,{deviceIP:t.deviceIP,payload:v}))},T=(n(479),n(39)),M=n.n(T),U=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),a=t.call(this,e),M.a.start(),a.state={feVersion:M.a.get("version"),socketConnectedState:!1,serverTimeOffset:"[unknown]",msgRecvd:{},msgsReceived:0,msgCtrl:"[Nothing]",msgsControl:0,msgSent:"[Nothing]",msgsSent:0,msgCtrlSent:"[Nothing]",msgsCtrlSent:0},M.a.onChange("msg",(function(e){a.setState({msgRecvd:e});var t=JSON.parse(JSON.stringify(e)),n=t.ip,o=t.payload;a.props.handleMsgReceived(o.toString(),n.toString()),console.info("[uibuilder.onChange] msg received from Node-RED server:",e)})),M.a.onChange("msgsReceived",(function(e){console.info("[uibuilder.onChange] Updated count of received msgs:",e),a.setState({msgsReceived:e})})),M.a.onChange("ctrlMsg",(function(e){console.info("[uibuilder.onChange:ctrlMsg] CONTROL msg received from Node-RED server:",e),a.setState({msgCtrl:e})})),M.a.onChange("msgsCtrl",(function(e){console.info("[uibuilder.onChange:msgsCtrl] Updated count of received CONTROL msgs:",e),a.setState({msgsControl:e})})),M.a.onChange("sentMsg",(function(e){console.info("[uibuilder.onChange:sentMsg] msg sent to Node-RED server:",e),a.setState({msgSent:e})})),M.a.onChange("msgsSent",(function(e){console.info("[uibuilder.onChange:msgsSent] Updated count of msgs sent:",e),a.setState({msgsSent:e})})),M.a.onChange("sentCtrlMsg",(function(e){console.info("[uibuilder.onChange:sentCtrlMsg] Control message sent to Node-RED server:",e),a.setState({msgCtrlSent:e})})),M.a.onChange("msgsSentCtrl",(function(e){console.info("[uibuilder.onChange:msgsSentCtrl] Updated count of CONTROL msgs sent:",e),a.setState({msgsCtrlSent:e})})),M.a.onChange("ioConnected",(function(e){console.info("[uibuilder.onChange:ioConnected] Socket.IO Connection Status Changed to:",e),a.setState({socketConnectedState:e})})),M.a.onChange("serverTimeOffset",(function(e){console.info("[uibuilder.onChange:serverTimeOffset] Offset of time between the browser and the server has changed to:",e),a.setState({serverTimeOffset:e})})),window.setTimeout((function(){console.info("Sending a message back to Node-RED-after2sdelay"),M.a.send({topic:"uibuilderfe",payload:"I am a message sent from the uibuilder front end"})}),2e3),a}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{ref:"root",style:{height:"50vh"}},o.a.createElement("h1",null,"Waiting for device information..."),o.a.createElement("hr",null),o.a.createElement("div",{className:"d1"},o.a.createElement("div",null,"Last msg Received:"),o.a.createElement("pre",null,o.a.createElement("code",null,JSON.stringify(this.state.msgRecvd,null,2))),o.a.createElement("div",null,"# Msgs Received: ",this.state.msgsReceived)),o.a.createElement("div",{className:"d1"},o.a.createElement("div",null,"last Ctl Msg Received:"),o.a.createElement("pre",null,o.a.createElement("code",null,JSON.stringify(this.state.msgCtrl,null,2))),o.a.createElement("div",null,"# Control Msgs Received: ",this.state.msgsControl)),o.a.createElement("div",{className:"d1"},o.a.createElement("div",null,"last Msg Sent"),o.a.createElement("pre",null,o.a.createElement("code",null,JSON.stringify(this.state.msgSent,null,2))),o.a.createElement("div",null,"# msgs Sent: ",this.state.msgsSent)),o.a.createElement("div",{className:"d1"},o.a.createElement("div",null,"Socket Connected?: ",this.state.socketConnectedState),o.a.createElement("div",null,"uibuilderfe Version: ",this.state.feVersion),o.a.createElement("div",null,"Server Time Offset from browser: ",this.state.serverTimeOffset)))}}]),n}(a.Component),q=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={deviceID:"",deviceIP:""},a.setUserInfo=a.setUserInfo.bind(Object(i.a)(a)),a}return Object(l.a)(n,[{key:"setUserInfo",value:function(e,t){this.setState({deviceID:e,deviceIP:t})}},{key:"render",value:function(){var e=this.state.deviceID.length>0;return o.a.createElement("div",{className:"App"},e?o.a.createElement(k,{userInfo:this.state}):o.a.createElement(U,{title:"User Data",handleMsgReceived:this.setUserInfo}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[248,1,2]]]);
//# sourceMappingURL=main.77f108cf.chunk.js.map