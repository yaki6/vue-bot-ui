(function(t){function e(e){for(var n,i,b=e[0],r=e[1],l=e[2],p=0,u=[];p<b.length;p++)i=b[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);c&&c(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,b=1;b<o.length;b++){var r=o[b];0!==a[r]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var b=window["webpackJsonp"]=window["webpackJsonp"]||[],r=b.push.bind(b);b.push=e,b=b.slice();for(var l=0;l<b.length;l++)e(b[l]);var c=r;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"2faf":function(t,e,o){var n=o("eba8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("499e").default;a("919118fe",n,!0,{sourceMap:!1,shadowMode:!1})},4647:function(t,e,o){"use strict";o("a740")},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Vue Bot UI",src:o("cf05")}}),e("VueBotUI",{attrs:{options:t.botOptions,messages:t.messageData,"bot-typing":t.botTyping,"input-disable":t.inputDisable,"is-open":!1},on:{init:t.botStart,"msg-send":t.msgSend}})],1)},s=[],i=o("d7a1"),b=o.n(i),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"qkb-bot-ui",class:t.uiClasses},[e("transition",{attrs:{name:"qkb-fadeUp"}},[t.botActive?e("div",{staticClass:"qkb-board"},[e("BoardHeader",{attrs:{"bot-title":t.optionsMain.botTitle},on:{"close-bot":t.botToggle}}),e("BoardContent",{attrs:{"bot-typing":t.botTyping,"main-data":t.messages}}),e("BoardAction",{attrs:{"input-disable":t.inputDisable,"input-placeholder":t.optionsMain.inputPlaceholder,"input-disable-placeholder":t.optionsMain.inputDisablePlaceholder},on:{"msg-send":t.sendMessage}})],1):t._e()]),e("div",{staticClass:"qkb-bot-bubble"},[e("button",{staticClass:"qkb-bubble-btn",on:{click:t.botToggle}},[t._t("bubbleButton",(function(){return[e("transition",{attrs:{name:"qkb-scaleUp"}},[t.botActive?e("CloseIcon",{key:"2",staticClass:"qkb-bubble-btn-icon qkb-bubble-btn-icon--close"}):e("BubbleIcon",{key:"1",staticClass:"qkb-bubble-btn-icon"})],1)]}))],2)]),e("AppStyle",{attrs:{options:t.optionsMain}}),e("div",{staticClass:"qkb-preload-image"},[t.optionsMain.botAvatarImg?e("div",{staticClass:"qkb-msg-avatar__img"}):t._e()])],1)},l=[];const c=new n["a"];var p=c,u={EVENT_OPEN:"botui-open",EVENT_CLOSE:"botui-close",EVENT_TOGGLE:"botui-toggle"},d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"qkb-board-header"},[t._t("header",(function(){return[e("div",{staticClass:"qkb-board-header__title"},[t._v(t._s(t.botTitle))])]}))],2)},g=[],m={props:{botTitle:{type:String,default:"Chatbot"}}},f=m,h=o("2877"),k=Object(h["a"])(f,d,g,!1,null,null,null),_=k.exports,v=function(){var t=this,e=t._self._c;return e("div",{ref:"boardContent",staticClass:"qkb-board-content"},[e("div",{ref:"boardBubbles",staticClass:"qkb-board-content__bubbles"},[t._l(t.mainData,(function(t,o){return e("message-bubble",{key:o,attrs:{message:t}})})),t.botTyping?e("div",{staticClass:"qkb-board-content__bot-typing"},[t._t("botTyping",(function(){return[e("message-typing")]}))],2):t._e()],2)])},y=[],q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"qkb-msg-bubble",class:t.bubbleClass},["bot"===t.message.agent?e("div",{staticClass:"qkb-msg-avatar"},[e("div",{staticClass:"qkb-msg-avatar__img"},[t._v(" ")])]):t._e(),t.componentType?e(t.componentType,{tag:"component",attrs:{"main-data":t.message}}):t._e(),t.message.createdAt?e("div",{staticClass:"qkb-msg-bubble__time"},[t._v(t._s(t.message.createdAt))]):t._e()],1)},x=[],w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"qkb-msg-bubble-component qkb-msg-bubble-component--single-text"},[e("div",{staticClass:"qkb-msg-bubble-component__text"},[t._v(t._s(t.mainData.text))])])},C=[],B={props:{mainData:{type:Object}}},T=B,O=Object(h["a"])(T,w,C,!1,null,null,null),$=O.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"qkb-msg-bubble-component qkb-msg-bubble-component--button-options"},[e("div",{staticClass:"qkb-msg-bubble-component__text"},[t._v(t._s(t.mainData.text))]),e("div",{staticClass:"qkb-msg-bubble-component__options-wrapper"},t._l(t.mainData.options,(function(o,n){return e("div",{key:n,staticClass:"qkb-mb-button-options__item",class:{active:t.selectedItem===o.value}},["postback"===o.action?e("button",{staticClass:"qkb-mb-button-options__btn",on:{click:function(e){return t.selectOption(o)}}},[e("span",[t._v(t._s(o.text))])]):e("a",{staticClass:"qkb-mb-button-options__btn qkb-mb-button-options__url",attrs:{target:"_blank",href:o.value}},[e("span",[t._v(t._s(o.text))])])])})),0)])},M=[],S={props:{mainData:{type:Object}},data(){return{selectedItem:null}},methods:{selectOption(t){this.selectedItem=t,p.$emit("select-button-option",t)}}},j=S,A=Object(h["a"])(j,D,M,!1,null,null,null),z=A.exports,E={components:{SingleText:$,ButtonOptions:z},props:{message:{type:Object}},computed:{bubbleClass(){return"bot"===this.message.agent?"qkb-msg-bubble--bot":"qkb-msg-bubble--user"},componentType(){let t="";switch(this.message.type){case"button":t="ButtonOptions";break;default:t="SingleText"}return t}}},P=E,I=Object(h["a"])(P,q,x,!1,null,null,null),U=I.exports,L=function(){var t=this;t._self._c;return t._m(0)},N=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"qkb-msg-bubble qkb-msg-bubble--bot"},[e("div",{staticClass:"qkb-msg-avatar"},[e("div",{staticClass:"qkb-msg-avatar__img"},[t._v(" ")])]),e("div",{staticClass:"qkb-msg-bubble-component qkb-msg-bubble-component--typing"},[e("div",{staticClass:"qkb-msg-bubble-component__text"},[e("div",{staticClass:"qkb-msg-bubble__typing-indicator"},[e("span")])])])])}],V={},H=Object(h["a"])(V,L,N,!1,null,null,null),Y=H.exports,G={components:{MessageBubble:U,MessageTyping:Y},props:{mainData:{type:Array,required:!0},botTyping:{type:Boolean,default:!1}},watch:{mainData:function(t){this.$nextTick(()=>{this.updateScroll()})}},methods:{updateScroll(){const t=this.$refs.boardContent,e=this.$refs.boardBubbles.offsetHeight;t.scrollTop=e}}},J=G,R=Object(h["a"])(J,v,y,!1,null,null,null),K=R.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"qkb-board-action",class:t.actionClass},[e("div",{staticClass:"qkb-board-action__wrapper"},[e("div",{staticClass:"qkb-board-action__msg-box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.messageText,expression:"messageText"}],ref:"qkbMessageInput",staticClass:"qkb-board-action__input",attrs:{type:"text",disabled:t.inputDisable,placeholder:t.inputPlaceholder},domProps:{value:t.messageText},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage.apply(null,arguments)},input:function(e){e.target.composing||(t.messageText=e.target.value)}}}),t.inputDisablePlaceholder&&t.inputDisable?e("div",{staticClass:"qkb-board-action__disable-text"},[e("span",[t._v(t._s(t.inputDisablePlaceholder))])]):t._e()]),e("div",{staticClass:"qkb-board-action__extra"},[t._t("actions"),e("button",{staticClass:"qkb-action-item qkb-action-item--send",on:{click:t.sendMessage}},[t._t("sendButton",(function(){return[e("IconSend",{staticClass:"qkb-action-icon qkb-action-icon--send"})]}))],2)],2)])])},F=[],Q={functional:!0,render(t,e){const{_c:o,_v:n,data:a,children:s=[]}=e,{class:i,staticClass:b,style:r,staticStyle:l,attrs:c={},...p}=a;return o("svg",{class:[i,b],style:[r,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488.721 488.721"},c),...p},s.concat([o("path",{attrs:{d:"M483.589 222.024a51.197 51.197 0 00-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 003.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.314 51.314 0 0018.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398zM58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.065 17.065 0 01-.481-13.784l65.399-163.516h340.668L58.657 446.633zm42.121-219.358L35.379 63.759a16.64 16.64 0 014.215-18.773 16.537 16.537 0 0119.063-2.884l382.788 185.173H100.778z"}})]))}},X={components:{IconSend:Q},props:{inputPlaceholder:{type:String},inputDisablePlaceholder:{type:String},inputDisable:{type:Boolean,default:!1}},data(){return{messageText:null}},computed:{actionClass(){const t=[];return this.inputDisable&&t.push("qkb-board-action--disabled"),this.messageText&&t.push("qkb-board-aciton--typing"),t}},mounted(){this.$refs.qkbMessageInput.focus()},methods:{sendMessage(){this.messageText&&(this.$emit("msg-send",{text:this.messageText}),this.messageText=null)}}},Z=X,tt=Object(h["a"])(Z,W,F,!1,null,null,null),et=tt.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"qkb-bot-style",staticStyle:{display:"none"},domProps:{innerHTML:t._s(t.style)}})},nt=[],at={props:["options"],computed:{style(){if(!this.options)return"";const{colorScheme:t,textColor:e,boardContentBg:o,bubbleBtnSize:n,botAvatarImg:a,botAvatarSize:s,inputDisableBg:i,msgBubbleBgBot:b,msgBubbleColorBot:r,msgBubbleBgUser:l,msgBubbleColorUser:c}=this.options,p=`\n<style type="text/css" id="qkb-bot-style">\n.qkb-bubble-btn {\n  background-color: ${t};\n  width: ${n}px;\n  height: ${n}px;\n}\n.qkb-bubble-btn-icon {\n  fill: ${e};\n  color: ${e};\n}\n.qkb-board {\n  bottom: ${n}px;\n}\n.qkb-board-header {\n  background-color: ${t};\n}\n.qkb-board-header__title {\n  color: ${e};\n}\n.qkb-board-content {\n  background-color: ${o};\n}\n${a?`.qkb-msg-avatar {\n      width: ${s}px;\n      height: ${s}px;\n    }\n    .qkb-msg-avatar__img {\n      background-image: url(${a});\n    }`:""}\n.qkb-msg-bubble--bot .qkb-msg-bubble-component__text {\n  color: ${r};\n  background-color: ${b};\n}\n.qkb-msg-bubble__typing-indicator span,\n.qkb-msg-bubble__typing-indicator::before,\n.qkb-msg-bubble__typing-indicator::after {\n  background-color: ${r};\n}\n.qkb-mb-button-options__btn::before {\n  background-color: ${l};\n}\n.qkb-msg-bubble--user .qkb-msg-bubble-component__text {\n  color: ${c};\n  background-color: ${l};\n}\n.qkb-mb-button-options__btn {\n  color: ${l};\n  border-color: ${l};\n}\n.qkb-mb-button-options__btn:hover {\n  color: ${c};\n  background-color: ${l};\n}\n.qkb-board-action--disabled::before {\n  background-color: ${i};\n}\n</style>\n      `;return p}}},st=at,it=Object(h["a"])(st,ot,nt,!1,null,null,null),bt=it.exports,rt={functional:!0,render(t,e){const{_c:o,_v:n,data:a,children:s=[]}=e,{class:i,staticClass:b,style:r,staticStyle:l,attrs:c={},...p}=a;return o("svg",{class:[i,b],style:[r,l],attrs:Object.assign({height:"511pt",viewBox:"1 -31 512 511",width:"511pt",xmlns:"http://www.w3.org/2000/svg"},c),...p},s.concat([o("path",{attrs:{d:"M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.313 91.313c-3 3-7.07 4.687-11.312 4.687zm-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.688c3-3 7.07-4.687 11.312-4.687h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0"}}),o("path",{attrs:{d:"M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32zm0 0M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32zm0 0M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96zm0 0"}})]))}},lt={functional:!0,render(t,e){const{_c:o,_v:n,data:a,children:s=[]}=e,{class:i,staticClass:b,style:r,staticStyle:l,attrs:c={},...p}=a;return o("svg",{class:[i,b],style:[r,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.001 512.001"},c),...p},s.concat([o("path",{attrs:{d:"M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"}})]))}},ct={name:"VueBotUI",components:{BoardHeader:_,BoardContent:K,BoardAction:et,BubbleIcon:rt,CloseIcon:lt,AppStyle:bt},props:{options:{type:Object,default:()=>({})},messages:{type:Array},botTyping:{type:Boolean,default:!1},inputDisable:{type:Boolean,default:!1},isOpen:{type:Boolean,default:!1},openDelay:{type:Number}},data(){return{botActive:!1,defaultOptions:{botTitle:"Chatbot",colorScheme:"#1b53d0",textColor:"#fff",bubbleBtnSize:56,animation:!0,boardContentBg:"#fff",botAvatarSize:32,botAvatarImg:"http://placehold.it/200x200",msgBubbleBgBot:"#f0f0f0",msgBubbleColorBot:"#000",msgBubbleBgUser:"#4356e0",msgBubbleColorUser:"#fff",inputPlaceholder:"Message",inputDisableBg:"#fff",inputDisablePlaceholder:null}}},computed:{optionsMain(){return{...this.defaultOptions,...this.options}},uiClasses(){let t=[];return this.optionsMain.animation&&t.push("qkb-bot-ui--animate"),t}},created(){this.isOpen&&(this.openDelay?setTimeout(this.botOpen,this.openDelay):this.botToggle())},mounted(){document.addEventListener(u.EVENT_OPEN,(function(){this.botOpen()})),document.addEventListener(u.EVENT_CLOSE,(function(){this.botClose()})),document.addEventListener(u.EVENT_TOGGLE,(function(){this.botToggle()}))},beforeDestroy(){p.$off("select-button-option")},methods:{botOpen(){this.botActive||this.botToggle()},botClose(){this.botActive&&this.botToggle()},botToggle(){this.botActive=!this.botActive,this.botActive?(p.$on("select-button-option",this.selectOption),this.$emit("init")):(p.$off("select-button-option"),this.$emit("destroy"))},sendMessage(t){this.$emit("msg-send",t)},selectOption(t){this.$emit("msg-send",t)}}},pt=ct,ut=(o("4647"),Object(h["a"])(pt,r,l,!1,null,null,null)),dt=ut.exports;var gt=o("cee4");const mt=Object({NODE_ENV:"production",BASE_URL:"/"}).OPENAI_API_KEY,ft=gt["a"].create({headers:{Authorization:"Bearer "+mt}});var ht={components:{BotIcon:b.a,VueBotUI:dt},data(){return{messageData:[],botTyping:!1,inputDisable:!1,botOptions:{botAvatarImg:b.a,boardContentBg:"#f4f4f4",msgBubbleBgBot:"#fff",inputPlaceholder:"Type hereeee..",inputDisableBg:"#fff",inputDisablePlaceholder:"Hit the buttons above to respond"}}},methods:{botStart(){this.botTyping=!0,setTimeout(()=>{this.botTyping=!1,this.messageData.push({agent:"bot",type:"text",text:"Hello, this is Anna. What do you want to talk about?"})},1e3)},msgSend(t){this.messageData.push({agent:"user",type:"text",text:t.text}),this.getResponse(t.text)},getResponse(t){this.botTyping=!0;const e={prompt:t,model:"text-davinci-003",max_tokens:100,temperature:.7};ft.post("https://api.openai.com/v1/completions",e).then(t=>{const e=t.data.choices[0].text,o={agent:"bot",type:"text",text:e};this.inputDisable=e.disableInput,this.messageData.push(o),this.botTyping=!1}).catch(()=>{})}}},kt=ht,_t=(o("adeb"),Object(h["a"])(kt,a,s,!1,null,null,null)),vt=_t.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(vt)}).$mount("#app")},a740:function(t,e,o){var n=o("b676");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("499e").default;a("28740afc",n,!0,{sourceMap:!1,shadowMode:!1})},adeb:function(t,e,o){"use strict";o("2faf")},b676:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'.qkb-bot-ui{position:fixed;z-index:1000;bottom:1.5rem;right:1.5rem;display:flex;flex-direction:column;font-size:1rem}.qkb-bot-ui *{box-sizing:border-box}.qkb-preload-image{position:absolute;top:0;left:0;width:0;height:0;overflow:hidden}.qkb-bot-ui--animate .qkb-fadeUp-enter-active,.qkb-bot-ui--animate .qkb-fadeUp-leave-active{opacity:1;transform:translate(0);transition:opacity .15s linear,transform .2s ease-out}.qkb-bot-ui--animate .qkb-fadeUp-enter,.qkb-bot-ui--animate .qkb-fadeUp-leave-to{transform:translateY(20px);opacity:0}.qkb-bot-ui--animate .qkb-scaleUp-enter-active,.qkb-bot-ui--animate .qkb-scaleUp-leave-active{opacity:1;transform:scale(1);transition:opacity .1s linear,transform .2s ease-out}.qkb-bot-ui--animate .qkb-scaleUp-enter,.qkb-bot-ui--animate .qkb-scaleUp-leave-to{transform:scale(0);opacity:0}@keyframes qkbJump{0%{transform:translateY(2px)}to{transform:translateY(-1px)}}.qkb-msg-bubble__typing-indicator:after,.qkb-msg-bubble__typing-indicator:before,.qkb-msg-bubble__typing-indicator span{transform:translateY(2px);animation:qkbJump .35s ease infinite alternate}.qkb-msg-bubble__typing-indicator span{animation-delay:.175s}.qkb-msg-bubble__typing-indicator:after{animation-delay:.35s}.qkb-bot-bubble{align-self:flex-end}.qkb-bubble-btn{display:block;padding:0;outline:0;border:0;box-shadow:none;border-radius:50%;color:#fff;fill:#fff;cursor:pointer;box-shadow:0 3px 5px 0 rgba(0,0,0,.15);transition:opacity .2s linear}.qkb-bubble-btn:hover{opacity:.85}.qkb-bubble-btn-icon{display:block;position:absolute;top:50%;left:50%;width:27px;height:auto;margin:-11px 0 0 -13px;line-height:1em}.qkb-bubble-btn-icon.qkb-bubble-btn-icon--close{width:15px;margin:-7px 0 0 -7px}.qkb-board{display:flex;flex-direction:column;position:absolute;right:0;overflow:hidden;width:376px;height:80vh;margin-bottom:10px;border-radius:8px;background-color:#fff;box-shadow:0 3px 30px 0 rgba(0,0,0,.15)}.qkb-board-header{display:flex;flex:none;align-items:center;justify-content:space-between;height:50px;padding:5px 15px}.qkb-board-header__title{font-weight:700;font-size:.875rem}.qkb-board-content{flex-grow:1;overflow:hidden scroll}.qkb-board-content__bubbles{min-height:100%;padding:1.5rem 1.25rem 1rem}.qkb-msg-bubble{display:flex;position:relative}.qkb-msg-avatar{flex-grow:1;flex:none;position:relative;overflow:hidden;border-radius:50%}.qkb-msg-avatar__img{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;background-size:cover;background-repeat:no-repeat}.qkb-msg-bubble__time{display:none;position:absolute;right:0;top:0;padding:2px 5px;margin-top:-5px;border-radius:5px;font-size:.625rem;color:#fff;background-color:#222;transform:translateY(-100%);opacity:0;transition:opacity .1s linear 1s}.qkb-msg-bubble--user .qkb-msg-bubble__time{display:block}.qkb-msg-bubble-component{font-size:.875rem}.qkb-msg-bubble-component:hover~.qkb-msg-bubble__time{opacity:.8}.qkb-msg-bubble{padding-bottom:1rem}.qkb-msg-bubble.qkb-msg-bubble--bot .qkb-msg-bubble-component{margin-right:2.5rem;margin-left:.5rem}.qkb-msg-bubble.qkb-msg-bubble--user{justify-content:flex-end}.qkb-msg-bubble.qkb-msg-bubble--user .qkb-msg-bubble-component{margin-left:5rem}.qkb-msg-bubble-component__text{position:relative;padding:.75rem 1rem;border-radius:6px}.qkb-msg-bubble-component__options-wrapper{display:flex;flex-wrap:wrap}.qkb-mb-button-options__item{flex:0 0 auto}.qkb-mb-button-options__btn{display:block;overflow:hidden;position:relative;margin:.5rem .375rem 0 0;padding:.25rem 1rem;cursor:pointer;outline:0;border:1px solid transparent;border-radius:13px;color:inherit;font-size:.875rem;font-family:inherit;text-decoration:none;background-color:transparent;transition:background-color .15s linear,color .1s linear}.qkb-mb-button-options__btn span{position:relative;z-index:10}.qkb-msg-bubble__typing-indicator{position:relative;min-width:29px;opacity:.3}.qkb-msg-bubble__typing-indicator span{display:block;width:7px;height:7px;margin:0 auto;border-radius:50%}.qkb-msg-bubble__typing-indicator:after,.qkb-msg-bubble__typing-indicator:before{content:"";display:block;position:absolute;top:0;width:7px;height:7px;border-radius:50%}.qkb-msg-bubble__typing-indicator:before{left:0}.qkb-msg-bubble__typing-indicator:after{right:0}.qkb-board-action{position:relative;display:flex;flex:none;height:46px;padding:.45rem 1.25rem .5rem;border-top:1px solid #e6e6e6}.qkb-board-action--disabled:before{content:"";display:block;position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;opacity:.2;cursor:not-allowed}.qkb-board-action__wrapper{display:flex;width:100%;background-color:#fff}.qkb-board-action__msg-box{position:relative;flex-grow:1;padding:0 1rem 0 0}.qkb-board-action__input{height:100%;width:100%;padding:0;font-size:.875rem;border:0;background-color:transparent;box-shadow:none;outline:0}.qkb-board-action__input[disabled=disabled]{pointer-events:none}.qkb-board-action__disable-text{display:flex;align-items:center;position:absolute;top:0;left:0;height:100%;width:100%;background-color:#fff;font-size:.875rem}.qkb-board-action__extra{display:flex;flex:none;justify-content:center}.qkb-action-item{display:block;padding:0;outline:0;border:0;line-height:1;box-shadow:none;background-color:transparent;cursor:pointer;opacity:.6;transition:opacity .1s linear}.qkb-action-item:hover{opacity:1}.qkb-action-icon{width:16px;height:16px;line-height:1;fill:#666;color:#666;vertical-align:middle}.qkb-board-aciton--typing .qkb-action-item--send{opacity:1}',""]),t.exports=e},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},d7a1:function(t,e,o){t.exports=o.p+"img/bot.9745ef89.png"},eba8:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;margin-top:60px}",""]),t.exports=e}});