(this["webpackJsonplostwell-portfolio"]=this["webpackJsonplostwell-portfolio"]||[]).push([[0],{123:function(e,n,t){},124:function(e,n,t){},125:function(e,n,t){},377:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),a=t(40),c=t.n(a),r=t(17),d=t(73),l=t(108).DateTime.now().hour,s=l>=6&&l<=18?"light":"dark",p=function(e){return e.theme},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"theme/toggleTheme":return"light"===e?"dark":"light";default:return e}},m="disabled",g=function(e){return{type:"theme/setToggleState",payload:e}},u=function(e){return e.toggleState},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"theme/setToggleState":return n.payload;default:return e}},f=Object(d.b)(Object(d.a)({theme:b,toggleState:h})),x=(t(123),t(124),t(125),t(115)),j=t(11),k=t(20),v=t(28),y=t(29),w=t.p+"static/media/dandelion-white-border.fe71e4c1.png",O=t.p+"static/media/dandelion-white-border-2.8b444031.png",S=t.p+"static/media/spore.81eed4e1.svg",z=t.p+"static/media/star.039f7c1d.svg",_=t.p+"static/media/star-white.dfa55959.svg",F=t.p+"static/media/star-cyan.fda65f84.svg",C={};C.spore={particles:{number:{value:5,density:{enable:!0,value_area:800}},color:{value:"#fffc33"},shape:{type:"image",stroke:{width:10,color:"#303030"},polygon:{nb_sides:5},image:[{src:"".concat(S),width:50,height:50}]},opacity:{value:1,random:{enable:!1,minimumValue:.3},anim:{enable:!1,speed:.2,opacity_min:.3,sync:!0}},size:{value:15,random:{enable:!0,minimumValue:5},anim:{enable:!1,speed:5,size_min:15,sync:!0}},line_linked:{enable:!1,distance:250,color:"#303030",opacity:1,width:5},move:{enable:!0,speed:6,direction:"top-right",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:500,rotateY:500}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:200,size:30,duration:1,opacity:1,speed:5},repulse:{distance:150,duration:2},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},C.light={particles:{number:{value:10,density:{enable:!0,value_area:800}},color:{value:"#fffc33"},shape:{type:"image",stroke:{width:10,color:"#303030"},polygon:{nb_sides:5},image:[{src:"".concat(w),width:72,height:84},{src:"".concat(O),width:70,height:84}]},opacity:{value:1,random:{enable:!1,minimumValue:.3},anim:{enable:!1,speed:.2,opacity_min:.3,sync:!0}},size:{value:40,random:{enable:!0,minimumValue:20},anim:{enable:!1,speed:5,size_min:15,sync:!0}},line_linked:{enable:!1,distance:250,color:"#303030",opacity:1,width:5},move:{enable:!0,speed:6,direction:"top-right",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:500,rotateY:500}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:200,size:30,duration:1,opacity:1,speed:5},repulse:{distance:150,duration:2},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},C.dark={particles:{number:{value:15,density:{enable:!0,value_area:1150}},color:{value:"#fffc33"},shape:{type:"image",stroke:{width:0,color:"#fffc33"},polygon:{nb_sides:5},image:[{src:"".concat(z),width:100,height:100},{src:"".concat(_),width:100,height:100},{src:"".concat(F),width:100,height:100}]},opacity:{value:1,random:!1,anim:{enable:!1,speed:.959040959040959,opacity_min:.1,sync:!1}},size:{value:20,random:{enable:!0,minimumValue:2},anim:{enable:!1,speed:30,size_min:2,sync:!0}},line_linked:{enable:!0,distance:250,color:"#fff",opacity:.8,width:4},move:{enable:!0,speed:2,direction:"random",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:200,rotateY:200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:200,size:40,duration:1,opacity:1,speed:5},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};var P,T,L,I,M,R,B=C,N=t.p+"static/media/dandelion-bg.d0e3508f.png",D=t.p+"static/media/cloud-bg.4fff2588.svg",V=t.p+"static/media/lostwell-light.b5e663ae.svg",W=t.p+"static/media/lostwell-dark.e28647c4.svg",E={light:{logo:"".concat(V),background:"#B1EFDF",fontColor:"#303030",iconFill:"#fffc33",iconStroke:"#303030",cardStroke:"#303030",cardFill:"rgba(255,255,255,1)",separatorFill:"#303030",wrapperStroke:"#303030",particlesConfig:B.light,backgroundImage:"url(".concat(N,")"),backgroundPosition:"30% calc(100% + 190px)",backgroundSize:"105%",backgroundPositionSmall:"23% calc(100% + 130px)",backgroundSizeSmall:"400%",backgroundPositionMobile:"23% calc(100% + 180px)",backgroundSizeMobile:"400%",backgroundPositionTablet:"25% calc(100% + 320px)",backgroundSizeTablet:"400%",backgroundPositionLaptop:"25% calc(100% + 400px)",backgroundSizeLaptop:"400%"},dark:{logo:"".concat(W),background:"#303030",fontColor:"#fff",iconFill:"#fffc33",iconStroke:"#fffc33",cardStroke:"transparent",cardFill:"rgba(153,240,218,0.3)",separatorFill:"#fff",wrapperStroke:"rgba(153,240,218,0.3)",particlesConfig:B.dark,backgroundImage:"url(".concat(D,")"),backgroundPosition:"30% calc(100% + 220px)",backgroundSize:"105%",backgroundPositionSmall:"22% calc(100% + 170px)",backgroundSizeSmall:"350%",backgroundPositionMobile:"22% calc(100% + 220px)",backgroundSizeMobile:"350%",backgroundPositionTablet:"24% calc(100% + 360px)",backgroundSizeTablet:"350%",backgroundPositionLaptop:"24% calc(100% + 440px)",backgroundSizeLaptop:"350%"}},X=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;return t[e][n]},Y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;return function(t){return X(t.theme,e,n)}},J=function(e){return"".concat(window.innerHeight*e/100,"px")},H=function(e){return"".concat(window.innerWidth*e/100,"px")},q=t(5),A=y.a.div(P||(P=Object(v.a)(["\n  position: fixed;\n  top: 20%;\n  display: flex;\n  /* border: 2px solid ",";  */\n  padding: 5px;\n\n  /* &:hover{\n    transform: scale(1.1);\n\n    .theme-toggle{\n      transform: rotate(360deg);\n    }\n  } */\n\n  @media (min-width: 0px) and (max-width: 321px){\n    transform: scale(0.45);\n    &:hover{\n      transform: scale(0.5);\n    }\n  }\n\n  @media (min-width: 321px) and (max-width: 426px) {\n    transform: scale(0.6);\n    &:hover{\n      transform: scale(0.65);\n    }\n  }\n\n  @media (min-width: 426px) and (max-width: 767px) {\n    transform: scale(0.7);\n    &:hover{\n      transform: scale(0.75);\n    }\n  }\n\n  @media (min-width: 767px) and(max-width: 1023px) {\n    transform: scale(0.8);\n    &:hover{\n      transform: scale(0.85);\n    }\n  }\n"])),Y("wrapperStroke")),G=y.a.div(T||(T=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n\n  position: absolute;\n  z-index: 0;\n  \n  background-color: ",";\n  background-image: ",";\n  background-position: ",";\n  background-size: ",";\n  background-repeat: no-repeat;\n\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center;\n  transform-origin: 50% 100%;\n\n  @media (min-width: 0px) and (max-width: 321px){\n    background-position: ",";\n    background-size: ",";\n  }\n\n  @media (min-width: 321px) and (max-width: 426px){\n    background-position: ",";\n    background-size: ",";\n  }\n\n  @media (min-width: 426px) and (max-width: 769px){\n    background-position: ",";\n    background-size: ",";\n  }\n\n  @media (min-width: 769px) and (max-width: 1024px){\n    background-position: ",";\n    background-size: ",";\n  }\n"])),Y("background"),Y("backgroundImage"),Y("backgroundPosition"),Y("backgroundSize"),Y("backgroundPositionSmall"),Y("backgroundSizeSmall"),Y("backgroundPositionMobile"),Y("backgroundSizeMobile"),Y("backgroundPositionTablet"),Y("backgroundSizeTablet"),Y("backgroundPositionLaptop"),Y("backgroundSizeLaptop")),K=y.a.span(L||(L=Object(v.a)(["\n  cursor: pointer;\n  /* padding: 10px 12px; */\n  border: 3.5px solid ",";\n  border-radius: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  padding: 8px 9px;\n\n  position: fixed;\n  top: 1.5em;\n\n  &.disabled, &.disabled > *{\n    cursor: wait;\n  }\n\n  @media (min-width: 0px) and (max-width: 321px){\n    top: 0.8em;\n    transform: scale(0.6);\n  }\n\n  @media (min-width: 321px) and (max-width: 426px) {\n    top: 1em;\n    transform: scale(0.8);\n  }\n\n  @media (min-width: 426px) and (max-width: 767px) {\n    top: 1em;\n    transform: scale(1);\n  }\n\n  @media (min-width: 767px) and (max-width: 1023px) {\n    top: 1.5em;\n    transform: scale(1);\n  }\n\n  @media (min-width: 1023px) {\n    top: 1.5em;\n    right: 1.5em;\n    transform: scale(1);\n  }\n"])),Y("cardStroke"),Y("cardFill")),Q=y.a.div(I||(I=Object(v.a)(["\n  /* cursor: pointer; */\n  font-size: 1em;\n  background-color: ",";\n  border: 7px solid ",";\n  /* border-radius: 100%; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n  /* background-color: ","; */\n\n  .theme-toggle{\n    margin: 0 0 0 20px;\n    \n  }\n\n  .inner-line{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    /* border-bottom: 8px solid ","; */\n  }\n\n  .inner-line:first-of-type{\n    padding: 18px 35px 19px 35px;\n    border-bottom: 3px solid ",";\n  }\n\n  .inner-line:last-of-type{\n    padding: 20px 40px 20px 40px;\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n\n    div{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n\n      svg{\n        margin-right: 6px;\n      }\n    }\n  }\n"])),Y("cardFill"),Y("cardStroke"),Y("background"),Y("cardStroke"),Y("separatorFill"),Y("fontColor")),U=y.a.h1(M||(M=Object(v.a)(["\n  font-size: 5.5em;\n  line-height: 1em;\n  font-weight: 600;\n  color: ",";\n  /* text-shadow: -6px 0 0 ","; */\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  text-align: left;\n  margin-top: 12px;\n"])),Y("fontColor"),Y("iconFill")),Z=t(112),$=t.n(Z),ee=function(e){var n=Object(r.c)(p),t=$.a,o=Object(k.a)({size:24,fill:X(n,"iconFill"),stroke:X(n,"iconStroke")},e);return Object(q.jsx)(t,Object(k.a)({},o))},ne=function(e){var n=Object(r.c)(p),t=X(n,"logo"),o=y.a.div(R||(R=Object(v.a)(["\n    width: 70px;\n    height: 70px;\n    background-image: url(",");\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: inline-block;\n  "])),t),i=Object(k.a)({},e);return Object(q.jsx)(o,Object(k.a)({},i))},te=t(13),oe=function(e){var n=e.theme;console.log({props:e});var t=Object(r.b)(),o=Object(te.animated)(A),i=Object(te.animated)(Q),a=Object(te.animated)(ee),c=Object(te.useSpring)({config:te.config.slow,from:{top:"".concat(J(120)),width:"150px",height:"150px",border:"2px solid transparent",backgroundColor:"transparent",borderRadius:"0%"},to:[{top:"".concat(J(30)),width:"150px",height:"150px",border:"1px solid transparent",borderRadius:"100%"},{top:"".concat(J(20)),width:"541px",height:"270px",border:"2px solid ".concat(X(n,"wrapperStroke")),borderRadius:"0%"}],onRest:function(e,n){console.log({result:e,controller:n}),n.stop(),t(g("enabled"))}}),d=Object(te.useSpring)({config:te.config.slow,from:{width:"100%",height:"100%",border:"7px solid transparent",borderRadius:"0%"},to:[{border:"6px solid ".concat(X(n,"cardStroke")),borderRadius:"100%"},{borderRadius:"0%",border:"7px solid ".concat(X(n,"cardStroke"))}]}),l=Object(te.useSpring)({config:te.config.slow,from:{x:"".concat(H(0)),y:"".concat(H(100)),opacity:0},to:[{x:"".concat(H(-11)),y:"".concat(H(51)),opacity:1e-4},{x:"".concat(H(0)),y:"".concat(H(0)),opacity:1}]}),s=Object(te.useSpring)({config:te.config.slow,from:{x:"".concat(H(0)),y:"".concat(H(100)),opacity:0,borderBottom:"0px solid ".concat(X(n,"cardFill"))},to:[{x:"".concat(H(-11)),y:"".concat(H(51)),opacity:1e-4,borderBottom:"2px solid ".concat(X(n,"cardFill"))},{x:"".concat(H(0)),y:"".concat(H(0)),opacity:1,borderBottom:"3px solid ".concat(X(n,"separatorFill"))}]}),p=Object(te.useSpring)({config:te.config.slow,from:{width:"".concat(H(7)),height:"".concat(J(7)),position:"absolute",opacity:0,top:"".concat(J(45)),rotate:0},to:[{opacity:1,top:"".concat(J(5)),rotate:720},{top:"".concat(J(-60)),opacity:0,rotate:0}]});return Object(q.jsx)(o,{theme:n,style:c,children:Object(q.jsxs)(i,{theme:n,style:d,children:[Object(q.jsx)(a,{style:p,icon:"".concat("light"===n?"sun":"moon")}),Object(q.jsxs)(te.animated.div,{className:"inner-line",style:s,children:[Object(q.jsx)(U,{theme:n,children:"Lostwell"}),Object(q.jsx)(ne,{style:{marginLeft:"20px"}})]}),Object(q.jsxs)(te.animated.div,{className:"inner-line",style:l,children:[Object(q.jsxs)("div",{children:[Object(q.jsx)(ee,{icon:"user",size:15,fill:"transparent",stroke:X(n,"fontColor"),strokeWidth:3}),"Louel Lagasca"]}),Object(q.jsxs)("div",{children:[Object(q.jsx)(ee,{icon:"briefcase",size:15,fill:"transparent",stroke:X(n,"fontColor"),strokeWidth:2}),"Front-End Developer & Designer"]}),Object(q.jsxs)("div",{children:[Object(q.jsx)(ee,{icon:"mail",size:15,fill:"transparent",stroke:X(n,"fontColor"),strokeWidth:2}),"louellagasca@gmail.com"]})]})]})})};oe=i.a.memo(oe,(function(e,n){if("disabled"===e.toggleState&&"enabled"===n.toggleState)return!0}));var ie=t(19),ae=t(113),ce=t.n(ae),re=function(e){var n=Object(r.c)(p),t=Object(r.c)(u),o=Object(te.useSpring)((function(){return{config:{friction:5},reverse:"light"!==n}})),i=Object(ie.a)(o,2),a=i[0],c=i[1],d=function(e){return Object(q.jsx)(ee,Object(k.a)({icon:"moon"},e))},l=function(e){return Object(q.jsx)(ee,Object(k.a)({icon:"sun"},e))},s={onClick:function(){"enabled"===t&&c({from:{rotate:0,scale:.3},to:{rotate:720,scale:1},config:Object(k.a)({},te.config.slow)}),e.onClick()},style:Object(k.a)({},a)},b=Object(te.animated)(K),m=function(e){return e?"1.6em":"0"};return Object(q.jsxs)(b,{className:ce()("theme-toggle",{disabled:"disabled"===t}),theme:n,style:a,onClick:s.onClick,children:[Object(q.jsx)(d,{size:m("dark"===n)}),Object(q.jsx)(l,{size:m("light"===n)})]})},de=t(114),le=t.n(de),se=function(e){var n=Object(r.c)(p),t=B[n];return e.config&&(t=B[e.config]),Object(q.jsx)(le.a,Object(k.a)({params:t},e))};var pe=function(){var e=Object(r.c)(p),n=Object(r.c)(u),t=Object(r.b)();return Object(q.jsx)(x.a,{children:Object(q.jsxs)(G,{className:"main-container",theme:e,children:[Object(q.jsx)(se,{style:{position:"fixed",zIndex:-1,top:"0",left:"0",width:"100%",height:"100%"},className:"test-canvas"}),"light"===e&&Object(q.jsx)(se,{style:{position:"fixed",zIndex:-1,top:"0",left:"0",width:"100%",height:"100%"},className:"test-canvas",config:"spore"}),Object(q.jsx)(j.c,{children:Object(q.jsx)(j.a,{path:"/",children:Object(q.jsx)(oe,{theme:e,toggleState:n})})}),Object(q.jsx)(re,{onClick:function(){"disabled"!==n&&(t(g("disabled")),t({type:"theme/toggleTheme"}))}})]})})},be=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,378)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),o(e),i(e),a(e),c(e)}))};c.a.render(Object(q.jsx)(i.a.StrictMode,{children:Object(q.jsx)(r.a,{store:f,children:Object(q.jsx)(pe,{})})}),document.getElementById("root")),be()}},[[377,1,2]]]);
//# sourceMappingURL=main.e9a9a9ab.chunk.js.map