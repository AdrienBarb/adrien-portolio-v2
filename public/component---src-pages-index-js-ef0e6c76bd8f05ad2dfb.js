(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,n,t){"use strict";t.r(n);var a,r,o,i,c,l,u,s,m=t("q1tI"),p=t.n(m),f=t("7oih"),d=t("U5tq"),h=t("MUpH"),b=t("vOnD"),x=b.default.div(a||(a=Object(h.a)(["\n    \n    h1 {\n        margin: 0 0 0.4rem 0;\n        font-size: 14px;\n        color: ","\n    }\n\n    a {\n        margin: 0;\n        font-size: 18px;\n    }\n\n"])),(function(e){return e.theme.gray})),w=b.default.div(r||(r=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 0 2rem;\n    max-width: 1400px;\n    margin: 0 auto;\n    height: 48px;\n    @media (max-width: 768px) {\n        height: 22px;\n    }\n\n    .social-icon {\n        font-size: 22px;\n        color: ",";\n    }\n"])),(function(e){return e.theme.text})),y=t("lopY"),E=t("IP2g"),g=t("wHSu"),O=t("8tEE"),v=function(){var e=Object(y.a)("(max-width:768px)");console.log(e);var n=e?p.a.createElement(E.a,{className:"social-icon",icon:g.c}):p.a.createElement(x,null,p.a.createElement("h1",null,"EMAIL"),p.a.createElement("a",null,"adrien-barbier@hotmail.fr")),t=e?p.a.createElement(E.a,{className:"social-icon",icon:g.d}):p.a.createElement(x,null,p.a.createElement("h1",null,"TELEPHONE"),p.a.createElement("a",null,"06 79 09 38 18")),a=e?p.a.createElement(E.a,{className:"social-icon",icon:O.a}):p.a.createElement(x,null,p.a.createElement("h1",null,"SOCIAL"),p.a.createElement("a",null,"Linkedin"));return p.a.createElement(w,null,n,t,a)},j=function(e,n){var t=Object(m.useState)(null),a=t[0],r=t[1];return Object(m.useEffect)((function(){if(e.current&&"function"==typeof IntersectionObserver){var t=new IntersectionObserver((function(e){r(e[0])}),n);return t.observe(e.current),function(){r(null),t.disconnect()}}return function(){}}),[e.current,n.threshold,n.root,n.rootMargin]),a},z=t("pc+1"),k=t("nOaX"),I=z.x.registerPlugin(k.a)||z.x,R=(I.core.Tween,t("6ysj")),L=b.default.div(o||(o=Object(h.a)(["\n  height: 100vh;\n  width: 100%;\n"]))),M=b.default.div(i||(i=Object(h.a)(["\n  opacity: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n"]))),N=b.default.div(c||(c=Object(h.a)(["\n  opacity: 1;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-left: 12rem;\n  max-width: 560px;\n  width: 100%;\n  box-sizing: border-box;\n  @media (max-width: 1024px) {\n    transform: translateY(0%);\n    transform: translate(-50%, -50%);\n    margin: 0 auto;\n    left: 50%;\n  }\n  @media (max-width: 425px) {\n    padding: 0 1rem;\n  }\n\n  h1 {\n    font-size: 1.8rem;\n    font-weight: 600;\n    position: relative;\n    margin-bottom: 0;\n    @media (max-width: 425px) {\n      font-size: 1.6rem;\n    }\n  }\n\n  p {\n    font-size: 1.2rem;\n    line-height: 1.4;\n    @media (max-width: 425px) {\n      font-size: 1rem;\n    }\n  }\n"]))),S=(b.default.div(l||(l=Object(h.a)(["\n  display: flex;\n"]))),b.default.div(u||(u=Object(h.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 1.2rem;\n  font-weight: 200;\n  transition: 0.6s color;\n  color: ",";\n"])),(function(e){return e.theme.text}))),H=b.default.span(s||(s=Object(h.a)(["\n  color: ",";\n"])),(function(e){return e.change?e.theme.background:e.theme.text})),P=function(){var e=Object(m.useState)(!1),n=e[0],t=(e[1],Object(m.useRef)(null)),a=Object(m.useRef)(null),r=Object(m.useRef)(null),o=Object(m.useRef)(null),i=Object(m.useRef)(null),c=(Object(R.b)(),Object(R.c)().currentTheme,j(t,{root:null,rootMargin:"0px",threshold:1}));return c&&c.intersectionRatio<1?function(e,n,t){I.to(e.current,1,{opacity:1,y:0,ease:"power4.out"}),I.to(i.current,1,{opacity:1,y:0,ease:"power4.out"}),I.to(n.current,1,{opacity:0,y:-20,ease:"power4.out"}),I.to(t.current,1,{opacity:0,y:-20,ease:"power4.out"})}(a,r,o):function(e,n,t){I.to(e.current,1,{opacity:0,y:-20,ease:"power4.out"}),I.to(i.current,1,{opacity:0,y:-20,ease:"power4.out"}),I.to(n.current,1,{opacity:1,y:-20,ease:"power4.out"}),I.to(t.current,1,{opacity:1,y:0,ease:"power4.out"})}(a,r,o),p.a.createElement(f.a,null,p.a.createElement(M,{ref:o},p.a.createElement(d.a,null)),p.a.createElement(L,null,p.a.createElement(N,{ref:a},p.a.createElement("h1",null,"Dével",p.a.createElement(H,{change:n},"o"),"ppeur web freelance"),p.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")),p.a.createElement(S,{ref:i},"(scroll down)")),p.a.createElement("div",{ref:t},p.a.createElement("div",{ref:r},p.a.createElement(v,null))))};n.default=function(){return p.a.createElement(P,null)}}}]);
//# sourceMappingURL=component---src-pages-index-js-ef0e6c76bd8f05ad2dfb.js.map