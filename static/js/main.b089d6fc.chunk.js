(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{19:function(e,t,a){e.exports=a(37)},29:function(e,t,a){e.exports=a.p+"static/media/logo.92b3a359.svg"},30:function(e,t,a){e.exports=a.p+"static/media/title-logo.34117c94.svg"},31:function(e,t,a){e.exports=a.p+"static/media/tile_advanced_software_engine.2e732f4c.png"},32:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.31474140.svg"},33:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.03320e76.svg"},34:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.8b7d0a8e.svg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-07.f5a23f87.svg"},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),i=a(3),c=a(5);var o=e=>{let{component:t,layout:a,...n}=e;return a=void 0===a?e=>r.a.createElement(r.a.Fragment,null,e.children):a,r.a.createElement(i.a,Object.assign({},n,{render:e=>r.a.createElement(a,null,r.a.createElement(t,e))}))},m=a(2),d=a.n(m),u=a(12);const v=r.a.forwardRef((e,t)=>{const[a,l]=Object(n.useState)(window.innerHeight),[s,i]=Object(n.useState)([]),c=()=>s.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length,o=(e,t)=>e.getBoundingClientRect().top<=a-t,m=()=>{if(!c())for(let e=0;e<s.length;e++){let t=s[e],a=t.getAttribute("data-reveal-delay"),n=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200",r=t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t;o(r,n)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))}};Object(n.useImperativeHandle)(t,()=>({init(){i(document.querySelectorAll("[class*=reveal-]"))}})),Object(n.useEffect)(()=>{"undefined"!==typeof s&&s.length>0&&(c()||(window.addEventListener("scroll",v),window.addEventListener("resize",h)),m())},[s]);const d=()=>{c()&&(window.removeEventListener("scroll",v),window.removeEventListener("resize",h))},v=Object(u.throttle)(()=>{d(),m()},30),h=Object(u.throttle)(()=>{l(window.innerHeight)},30);return Object(n.useEffect)(()=>{d(),m()},[a]),r.a.createElement(r.a.Fragment,null,e.children())});v.propTypes={children:d.a.func.isRequired};var h=v,p=a(10),g=a(1),b=a.n(g),E=a(8);const f=e=>{let{className:t,src:a,width:l,height:s,alt:i,...c}=e;const[o,m]=Object(n.useState)(!1),d=Object(n.useRef)(null);Object(n.useEffect)(()=>{u(d.current)},[]);const u=e=>{const t=document.createElement("img");var a,n;o||(e.style.display="none",e.before(t),t.src=(a=e.getAttribute("width")||0,n=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(a," ").concat(n,'"%3E%3C/svg%3E')),t.width=e.getAttribute("width"),t.height=e.getAttribute("height"),t.style.opacity="0",e.className&&t.classList.add(e.className),t.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},c,{ref:d,className:t,src:a,width:l,height:s,alt:i,onLoad:function(){m(!0)}}))};f.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var N=f;var w=e=>{let{className:t,...n}=e;const l=b()("brand",t);return r.a.createElement("div",Object.assign({},n,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(E.a,{to:"/"},r.a.createElement(N,{src:a(29),alt:"Open",width:32,height:32}))))};const x=e=>{let{className:t,navPosition:a,hideNav:l,hideSignin:s,bottomOuterDivider:i,bottomDivider:c,...o}=e;const[m,d]=Object(n.useState)(!1),u=Object(n.useRef)(null),v=Object(n.useRef)(null);Object(n.useEffect)(()=>(m&&h(),document.addEventListener("keydown",g),document.addEventListener("click",E),()=>{document.removeEventListener("keydown",g),document.removeEventListener("click",E),p()}));const h=()=>{document.body.classList.add("off-nav-is-active"),u.current.style.maxHeight=u.current.scrollHeight+"px",d(!0)},p=()=>{document.body.classList.remove("off-nav-is-active"),u.current&&(u.current.style.maxHeight=null),d(!1)},g=e=>{m&&27===e.keyCode&&p()},E=e=>{u.current&&m&&!u.current.contains(e.target)&&e.target!==v.current&&p()},f=b()("site-header",i&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},o,{className:f}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:b()("site-header-inner",c&&"has-bottom-divider")},r.a.createElement(w,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:v,className:"header-nav-toggle",onClick:m?p:h},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:u,className:b()("header-nav",m&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:b()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null)),!s&&r.a.createElement("ul",{className:"list-reset header-nav-right"})))))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var O=x;var y=e=>{let{className:t,...a}=e;const n=b()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:n}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement(E.a,{className:"bottom-link",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(E.a,{className:"bottom-link",to:"/about"},"About us")),r.a.createElement("li",null,r.a.createElement(E.a,{className:"bottom-link",to:"/investors"},"For investors")),r.a.createElement("li",null,r.a.createElement(E.a,{className:"bottom-link",to:"#0"},"FAQ's"))))};var D=e=>{let{className:t,...a}=e;const n=b()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:n}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://development-house.medium.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Medium"),r.a.createElement("path",{d:"M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://development.house"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Discord"),r.a.createElement("path",{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"}))))))};const j=e=>{let{className:t,topOuterDivider:a,topDivider:n,...l}=e,s=(new Date).getFullYear();const i=b()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:i}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:b()("site-footer-inner",n&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(w,null),r.a.createElement(D,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(y,null),r.a.createElement("div",{className:"footer-copyright"},"\xa9 ",s," ",r.a.createElement("a",{className:"bottom-link",href:"https://development.house"},"Development House Inc.")," All right reserved.")))))};j.defaultProps={topOuterDivider:!1,topDivider:!1};var k=j;var C=e=>{let{children:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(k,null))};const F={topOuterDivider:d.a.bool,bottomOuterDivider:d.a.bool,topDivider:d.a.bool,bottomDivider:d.a.bool,hasBgColor:d.a.bool,invertColor:d.a.bool},P={topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1},A={...P},L=(d.a.bool,d.a.bool,d.a.bool,d.a.bool,{...P,invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1}),H=(d.a.bool,{...P,pushLeft:!1});var S=e=>{let{className:t,...a}=e;const n=b()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:n}))};const M=e=>{let{className:t,tag:a,color:n,size:l,loading:s,wide:i,wideMobile:c,disabled:o,...m}=e;const d=b()("button",n&&"button-".concat(n),l&&"button-".concat(l),s&&"is-loading",i&&"button-block",c&&"button-wide-mobile",t),u=a;return r.a.createElement(u,Object.assign({},m,{className:d,disabled:o}))};M.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var _=M;var B=e=>{let{className:t,...n}=e;const l=b()("title-brand",t);return r.a.createElement("div",Object.assign({},n,{className:l}),r.a.createElement("h1",{className:"m-0 "},r.a.createElement(N,{src:a(30),alt:"Open",width:700,height:50})))};const W={...A},z=e=>{let{className:t,topOuterDivider:a,bottomOuterDivider:n,topDivider:l,bottomDivider:s,hasBgColor:i,invertColor:c,...o}=e;const m=b()("hero section center-content",a&&"has-top-divider",n&&"has-bottom-divider",i&&"has-bg-color",c&&"invert-color",t),d=b()("hero-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},o,{className:m}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:d},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-32 reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement(B,null)),r.a.createElement("div",{className:"mt-32 container-xs"},r.a.createElement("div",{className:"mt-32 reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(S,null,r.a.createElement(_,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/development-house"},"Check out our Github"))))))))};z.defaultProps=W;var T=z;const I=e=>{let{className:t,data:a,children:n,tag:l,...s}=e;const i=b()("section-header",t),c=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},s,{className:i}),r.a.createElement("div",{className:"container-xs"},n,a.title&&r.a.createElement(c,{className:b()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};I.defaultProps={children:null,tag:"h2"};var R=I;const G={...L},q=e=>{let{className:t,topOuterDivider:n,bottomOuterDivider:l,topDivider:s,bottomDivider:i,hasBgColor:c,invertColor:o,invertMobile:m,invertDesktop:d,alignTop:u,imageFill:v,...h}=e;const p=b()("features-split section",n,l&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),g=b()("features-split-inner section-inner",s,i&&"has-bottom-divider"),E=b()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return r.a.createElement("section",Object.assign({},h,{className:p}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g},r.a.createElement(R,{data:{title:"Pioneering Interactive Worlds",paragraph:"With cutting-edge technologies, we craft immersive environments, deliver engaging gameplay experiences, and offer endless possibilities for players to explore, compete, and connect."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Innovation Meets Precision"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Advanced Software Engineering"),r.a.createElement("p",{className:"m-0"},"Our team of expert engineers push the boundaries of technology to bring open-world gameplay to life. Through cutting-edge software engineering, we enable seamless gameplay, stunning graphics, and dynamic environments.")),r.a.createElement("div",{className:b()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(N,{src:a(31),alt:"Features split 01",width:528,height:396})))))))};q.defaultProps=G;var K=q;var Z=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{className:"illustration-section-01"}),r.a.createElement(K,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}));const J=e=>{let{className:t,children:a,labelHidden:n,id:l,...s}=e;const i=b()("form-label",n&&"screen-reader",t);return r.a.createElement("label",Object.assign({},s,{className:i,htmlFor:l}),a)};J.defaultProps={children:null,labelHidden:!1,id:null};var U=J;const Y=e=>{let{children:t,className:a,status:n,...l}=e;const s=b()("form-hint",n&&"text-color-".concat(n),a);return r.a.createElement("div",Object.assign({},l,{className:s}),t)};Y.defaultProps={children:null,status:!1};var Q=Y;const V=e=>{let{className:t,children:a,label:n,labelHidden:l,type:s,name:i,status:c,disabled:o,value:m,formGroup:d,hasIcon:u,size:v,placeholder:h,rows:p,hint:g,...E}=e;const f=b()(d&&""!==d&&("desktop"===d?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),N=b()("form-input",v&&"form-input-".concat(v),c&&"form-".concat(c),t),w="textarea"===s?"textarea":"input";return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(U,{labelHidden:l,id:E.id},n),r.a.createElement("div",{className:f},r.a.createElement(w,Object.assign({},E,{type:"textarea"!==s?s:null,className:N,name:i,disabled:o,value:m,placeholder:h,rows:"textarea"===s?p:null})),a),g&&r.a.createElement(Q,{status:c},g))};V.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var $=V;const X={...A,split:!1},ee=e=>{let{className:t,topOuterDivider:a,bottomOuterDivider:n,topDivider:l,bottomDivider:s,hasBgColor:i,invertColor:c,split:o,...m}=e;const d=b()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",n&&"has-bottom-divider",i&&"has-bg-color",c&&"invert-color",t),u=b()("cta-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider",o&&"cta-split");return r.a.createElement("section",Object.assign({},m,{className:d}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:u},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"Common Stock Lookup")),r.a.createElement("div",{className:"cta-action"},r.a.createElement($,{id:"newsletter",type:"number",pattern:"[0-9]*",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"000000"},r.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};ee.defaultProps=X;var te=ee;var ae=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{split:!0}));const ne={...H},re=e=>{let{className:t,topOuterDivider:n,bottomOuterDivider:l,topDivider:s,bottomDivider:i,hasBgColor:c,invertColor:o,pushLeft:m,...d}=e;const u=b()("features-tiles section",l&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),v=b()("features-tiles-inner section-inner pt-0",i&&"has-bottom-divider"),h=b()("tiles-wrap ",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(R,{data:{title:"Working at Development House:",paragraph:"We cultivate an engineering culture that fosters creativity, collaboration, and continuous improvement. Our developers, designers, and experts work together to deliver excellence in technology products. "},className:""}),r.a.createElement("h2",{className:"mt-0 norms"},"Engineering at Development House"),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(N,{src:a(32),alt:"Features tile icon 06",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Engineering Culture"),r.a.createElement("p",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Collaboration, Innovation, Excellence"),r.a.createElement("p",{className:"m-0 text-sm"},"We've cultivated engineering culture that fosters creativity, collaboration, and continuous improvement. Development House engineers, designers, and experts work together to deliver excellence in game development technology.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(N,{src:a(33),alt:"Features tile icon 05",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Clean Code"),r.a.createElement("p",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Elegance in Development"),r.a.createElement("p",{className:"m-0 text-sm"},"Our commitment to clean code ensures maintainability and scalability, reducing the risk of bugs and making future updates smoother. We believe in the beauty of elegant, organized, and efficient code.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(N,{src:a(34),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"DDD Microservice Architecture"),r.a.createElement("p",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Scalable Foundations"),r.a.createElement("p",{className:"m-0 text-sm"},"Harness the potential of Distributed Domain-Driven (DDD) Microservices. Our architecture empowers our games to scale effortlessly, supporting massive player populations while maintaining flexibility and robustness.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(N,{src:a(35),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Industry Leading Security"),r.a.createElement("p",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Protecting Your World"),r.a.createElement("p",{className:"m-0 text-sm"},"Security is paramount in the gaming industry. We take pride in our industry-leading security measures that safeguard player data, prevent cheating, and create a secure gaming environment, earning players' trust."))))))))};re.defaultProps=ne;var le=re;var se=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null));p.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ie=()=>{const e=Object(n.useRef)();let t=Object(i.f)();return Object(n.useEffect)(()=>{const a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),(e=>{p.a.set({page:e}),p.a.pageview(e)})(a)},[t]),r.a.createElement(h,{ref:e,children:()=>r.a.createElement(i.c,null,r.a.createElement(o,{exact:!0,path:"/",component:Z,layout:C}),r.a.createElement(o,{exact:!0,path:"/about",component:se,layout:C}),r.a.createElement(o,{exact:!0,path:"/investors",component:ae,layout:C}))})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(36);const ce=Object(c.a)();s.a.render(r.a.createElement(i.b,{history:ce},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.b089d6fc.chunk.js.map