(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{107:function(t,n,e){"use strict";e.r(n);var i,c,r,o,s,a,d,l,b,j,p,x,h,u,f,O,g,m,v,y,w,k,z=e(2),N=e(20),T=e.n(N),S=e(17),C=e(9),H=e(13),E=e(16),L=Object(H.b)("GET_PROJECT_LIST"),B=Object(H.b)("GET_SKILLS_LIST"),I=Object(H.c)({project:[],skills:[]},(i={},Object(E.a)(i,L.type,(function(t,n){var e=n.payload;t.project=e})),Object(E.a)(i,B.type,(function(t,n){var e=n.payload;t.skills=e})),i)),M=I,R=Object(C.c)({resumeReducer:M}),D=Object(H.a)({reducer:R,devTools:!1}),J=e(4),_=768,A=376,K={color:{white:"#ffffff",black:"#000000"},desktop:"(max-width: ".concat(1024,"px)"),tablet:"(max-width: ".concat(_,"px)"),mobile:"(max-width: ".concat(A,"px)"),modalBackground:"position: fixed; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.3)"},P=e(6),q=e(37),F=Object(J.b)(c||(c=Object(P.a)(["\n","\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Spoqa Han Sans','Noto Sans KR', sans-serif;\n    height: 100vh;\n  }\n  ol,ul,li {\n    list-style: none;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  img {\n    display: block;\n    width: inherit;\n    height: inherit;\n  }\n  .tales {\n    text-align: center;\n    padding-top: 16px;\n    font-size: 0.75rem;\n    font-weight: 300;\n    color: #bbbbbb;\n  }\n"])),q.a),G=e(24),U=e.n(G),V=e(41),X=e(3),Q=e(7),W=e(1),Y=function(t){var n=t.size,e=void 0===n?"medium":n,i=t.color,c=void 0===i?"black":i,r=t.label,o=Object(Q.a)(t,["size","color","label"]),s=Object(X.a)({size:e,color:c},o);return Object(W.jsx)(Z,Object(X.a)(Object(X.a)({},s),{},{children:r}))},Z=J.d.h2(r||(r=Object(P.a)(["\n\tcolor: ",";\n\t",";\n"])),(function(t){return t.color}),(function(t){switch(t.size){case"small":return"font-size: 20px;";case"medium":return"font-size: 26px;";case"large":return"font-size: 30px;";case"X-large":return"font-size: 45px;"}})),$=function(t){var n=t.title,e=t.children,i=Object(Q.a)(t,["title","children"]),c=Object(X.a)({},i);return Object(W.jsx)(tt,Object(X.a)(Object(X.a)({id:n},c),{},{children:Object(W.jsxs)("div",{children:[Object(W.jsx)("h2",{children:n}),Object(W.jsx)("div",{children:e})]})}))},tt=J.d.div(o||(o=Object(P.a)(['\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding-top: 100px;\n\t> div {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 80%;\n\t\tcolor: #3f4165;\n\t\th2 {\n\t\t\tfont-family: "Noto Sans KR", sans-serif;\n\t\t\ttext-transform: uppercase;\n\t\t\tletter-spacing: -0.05rem;\n\t\t\tfont-size: 35px;\n\t\t\tfont-weight: 800;\n\t\t}\n\t\tdiv {\n\t\t\tmargin-top: 20px;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 17px;\n\t\t\tfont-weight: 300;\n\t\t\tline-height: 1.5;\n\t\t}\n\t}\n\t@media '," {\n\t\t> div {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"])),(function(t){return t.theme.tablet})),nt=function(t){var n=t.children,e=Object(Q.a)(t,["children"]),i=Object(X.a)({},e);return Object(W.jsx)(et,Object(X.a)(Object(X.a)({},i),{},{children:Object(W.jsx)("div",{className:"container",children:n})}))},et=J.d.header(s||(s=Object(P.a)(['\n\t.container {\n\t\tpadding: 16rem 4rem;\n\t\tbackground: url("./img/header.png") no-repeat center center/cover;\n\t\topacity: 0.8;\n\t}\n']))),it=e(10),ct=e(21),rt=function(t){var n=t.navTitle,e=t.menu,i=Object(Q.a)(t,["navTitle","menu"]),c=Object(z.useState)(!1),r=Object(it.a)(c,2),o=r[0],s=r[1],a=Object(z.useState)(-500),d=Object(it.a)(a,2),l=d[0],b=d[1],j=function(t){var n;window.scrollTo({top:t?null===(n=document.getElementById(t))||void 0===n?void 0:n.offsetTop:0,left:0,behavior:"smooth"})},p=function(t){s(!!t)};Object(z.useEffect)((function(){b(o?0:-500)}),[o]);var x=function(t,n){return Object(W.jsx)("div",{children:Object(W.jsx)("ul",{children:e.slice(t,n).map((function(t,n){return Object(W.jsx)("li",{onClick:function(){return j(t)},children:t},n)}))})})},h=Object(X.a)({switchNav:o,navTitle:n,navLeft:l},i);return Object(W.jsxs)(ot,Object(X.a)(Object(X.a)({},h),{},{children:[Object(W.jsx)("div",{className:"drawer",onClick:function(){return p(!0)},children:"\uc0bc\uc9c0\ucc3d"}),Object(W.jsx)("div",{className:"background",onClick:function(){return p(!1)},children:Object(W.jsxs)("div",{className:"navBar",children:[x(0,3),Object(W.jsx)("div",{className:"navTitle",onClick:function(){return j()},children:n}),x(3,6)]})})]}))},ot=J.d.nav(a||(a=Object(P.a)(["\n\tposition: sticky;\n\ttop: 0;\n\tbackground: rgba(184, 184, 184, 0.8);\n\tpadding: 8px 30px;\n\tz-index: 10;\n\t.drawer {\n\t\tdisplay: none;\n\t}\n\t.navBar {\n\t\tposition: relative;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: 8px 0;\n\t\tcolor: #6c757d;\n\t\tfont-weight: 500;\n\t\tdiv {\n\t\t\tdisplay: flex;\n\t\t\tmin-width: 250px;\n\t\t\t&:first-of-type {\n\t\t\t\tjustify-content: flex-end;\n\t\t\t}\n\t\t\t&:last-of-type {\n\t\t\t\tjustify-content: flex-start;\n\t\t\t}\n\t\t\tul {\n\t\t\t\tdisplay: flex;\n\t\t\t\tli {\n\t\t\t\t\tpadding: 8px 10px;\n\t\t\t\t\tfont-size: 0.9rem;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tcolor: #343a40;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.navTitle {\n\t\t\tpadding: 0 20px;\n\t\t\tmin-width: auto;\n\t\t\tfont-size: 1.5rem;\n\t\t\tfont-weight: 600;\n\t\t\tcolor: #000000;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n\t@media "," {\n\t\t.drawer {\n\t\t\tdisplay: block;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.background {\n\t\t\t",";\n\t\t\ttransition: visibility 0.5s;\n\t\t\tvisibility: ",";\n\t\t\t.navBar {\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: flex-end;\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: ","px;\n\t\t\t\tbottom: 0;\n\t\t\t\ttransition: left 0.5s;\n\t\t\t\tbox-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.3);\n\t\t\t\twidth: 200px;\n\t\t\t\tbackground: white;\n\t\t\t\t.navTitle {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t> div {\n\t\t\t\t\tmin-width: auto;\n\t\t\t\t\tul {\n\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\tli {\n\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.tablet}),Object(ct.c)("modalBackground"),Object(ct.a)("switchNav","visibility","hidden"),Object(ct.b)("navLeft")),st=function(t){var n=t.children,e=t.link,i=t.onClick;return Object(W.jsx)(at,{children:e?Object(W.jsx)("a",{href:e,target:"_blank",children:n}):Object(W.jsx)("div",{onClick:i,children:n})})},at=(J.d.button(d||(d=Object(P.a)(['\n\tfont-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n\tfont-weight: 700;\n\tborder: 0;\n\tborder-radius: 3em;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tline-height: 1;\n\t',";\n\t",";\n"])),(function(t){return t.primary?Object(J.c)(l||(l=Object(P.a)(["\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tbackground-color: #1ea7fd;\n\t\t\t  "]))):Object(J.c)(b||(b=Object(P.a)(["\n\t\t\t\t\tcolor: #333;\n\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n\t\t\t  "])))}),(function(t){switch(t.size){case"small":return"font-size: 12px; padding: 10px 16px;";case"medium":return"font-size: 14px; padding: 11px 20px";case"large":return"font-size: 16px; padding: 12px 24px;"}})),J.d.button(j||(j=Object(P.a)(["\n\tposition: fixed;\n\tbottom: 15px;\n\tright: 20px;\n\tpadding: 0;\n\tcursor: pointer;\n\t/* background: white; */\n\tborder: none;\n\t/* box-shadow: 0px 5px 5px 0.5px rgba(0, 0, 0, 0.2); */\n\toutline: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 50%;\n\twidth: 30px;\n\theight: 30px;\n\ttransition: height 0.3s;\n\t&:hover {\n\t\twidth: 30px;\n\t\theight: 45px;\n\t}\n\ta {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tsvg {\n\t\t\twidth: inherit;\n\t\t\theight: inherit;\n\t\t}\n\t}\n"])))),dt=function(t){var n=t.title,e=t.desc,i=t.center,c=void 0!==i&&i,r=Object(Q.a)(t,["title","desc","center"]),o=Object(X.a)({center:c},r);return Object(W.jsxs)(lt,Object(X.a)(Object(X.a)({id:n},o),{},{children:[Object(W.jsx)("h2",{children:n}),e&&Object(W.jsx)("p",{children:e})]}))},lt=J.d.div(p||(p=Object(P.a)(['\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 100px;\n\tjustify-content: center;\n\twidth: 60%;\n\tcolor: #3f4165;\n\tmargin-bottom: 20px;\n\th2 {\n\t\tfont-family: "Noto Sans KR", sans-serif;\n\t\ttext-transform: uppercase;\n\t\tletter-spacing: -0.05rem;\n\t\tfont-size: 35px;\n\t\tfont-weight: 800;\n\t\ttext-align: ',";\n\t}\n\tp {\n\t\tfont-size: 17px;\n\t\tfont-weight: 300;\n\t\tline-height: 1.5;\n\t\tpadding: 5px 0;\n\t}\n"])),(function(t){return t.center?"center":"unset"})),bt=e(25),jt=function(t){var n=t.text,e=t.type,i=void 0===e?"skill":e,c=Object(Q.a)(t,["text","type"]),r=Object(X.a)({type:i},c);return Object(W.jsx)(pt,Object(X.a)(Object(X.a)({},r),{},{children:n}))},pt=J.d.span(x||(x=Object(P.a)(["\n\tdisplay: inline-flex;\n\talign-items: center;\n\ttext-transform: uppercase;\n\tbackground: #c5c6c4;\n\tfont-weight: 300;\n\tborder-radius: 4px;\n\tfont-size: 0.6rem;\n\tline-height: 0.8;\n\tcolor: white;\n\tpadding: 5px 6px;\n\tmargin: 1px;\n"]))),xt=e(42),ht=e(46),ut=e(45),ft=e.n(ut),Ot=(e(88),e(89),function(t){var n=t.image,e=t.title,i=t.details,c=t.type,r=void 0===c?"default":c,o=t.link,s=t.setVisable;Object(z.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow=""}}));var a={type:r};return Object(W.jsx)(gt,Object(X.a)(Object(X.a)({onClick:function(){return s(!1)}},a),{},{children:Object(W.jsxs)(mt,Object(X.a)(Object(X.a)({onClick:function(t){t.stopPropagation()}},a),{},{children:["default"===r&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"modalHeader",children:[Object(W.jsx)("h2",{className:"title",children:e}),Object(W.jsx)(ht.a,{className:"closeBtn",onClick:function(){return s(!1)}})]}),Object(W.jsxs)("div",{className:"modalBody",children:[Object(W.jsx)("div",{className:"imageList",children:Object(W.jsx)(ft.a,Object(X.a)(Object(X.a)({className:"slick"},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:n&&n.map((function(t,n){return Object(W.jsx)("img",{src:t},n)}))}))}),Object(W.jsx)("div",{className:"details",children:Object(W.jsx)("ul",{children:null===i||void 0===i?void 0:i.map((function(t,n){return Object(W.jsx)("li",{children:t},n)}))})})]})]}),"youtube"===r&&Object(W.jsx)(xt.a,{videoId:o&&o,opts:{height:"390",width:"640",playerVars:{autoplay:1}}})]}))}))}),gt=J.d.div(h||(h=Object(P.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: fixed;\n\tbackground: ",";\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 15;\n"])),(function(t){return"default"===t.type?"rgba(0, 0, 0, 0.7)":"none"})),mt=J.d.div(u||(u=Object(P.a)(["\n\t",";\n\n\t.modalHeader {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tbackground: white;\n\t\tborder-bottom: 1px solid #dee2e6;\n\t\tborder-radius: 3px 3px 0 0;\n\t\twidth: 100%;\n\t\tpadding: 15px;\n\t\t/* margin-bottom: 10px; */\n\t\t.title {\n\t\t\tpadding-left: 10px;\n\t\t\tfont-size: 1.4rem;\n\t\t\tfont-weight: 500;\n\t\t}\n\t\t.closeBtn {\n\t\t\tcolor: gray;\n\t\t\tbackground: white;\n\t\t\tfont-size: 25px;\n\t\t\ttransition: all 0.3s;\n\t\t\t&:hover {\n\t\t\t\tcursor: pointer;\n\t\t\t\tcolor: red;\n\t\t\t\ttransform: rotate(-90deg);\n\t\t\t}\n\t\t}\n\t}\n\t.modalBody {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbackground: white;\n\t\tmin-height: 400px;\n\t\twidth: 550px;\n\t\tpadding: 10px 30px 20px 30px;\n\t\tborder-radius: 0 0 3px 3px;\n\t\t.imageList {\n\t\t\twidth: 430px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin-bottom: 23px;\n\t\t\t.slick-arrow::before {\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 240px;\n\t\t\t\tpadding: 5px;\n\t\t\t}\n\t\t\tdiv {\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\t\t}\n\t}\n\t.details {\n\t\tborder-top: 1px solid #dee2e6;\n\t\tmargin-top: 10px;\n\t\toverflow: scroll;\n\t\theight: 260px;\n\t\tcolor: #333333;\n\t\tul {\n\t\t\tpadding: 10px;\n\t\t\tbox-sizing: border-box;\n\t\t\tfont-size: 0.85rem;\n\t\t\tli {\n\t\t\t\tmargin-left: 20px;\n\t\t\t\tlist-style: disc;\n\t\t\t\tline-height: 1.3rem;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tpadding: 5px 0;\n\t\t\t}\n\t\t}\n\t}\n\tz-index: 20;\n"])),(function(t){return"dafuelt"==t.type?Object(J.c)(f||(f=Object(P.a)(["\n\t\t\t\t\tbox-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n\t\t\t\t\twidth: 580px;\n\t\t\t  "]))):Object(J.c)(O||(O=Object(P.a)(["\n\t\t\t\t\tbox-shadow: none;\n\t\t\t  "])))})),vt=function(t){var n=t.title,e=t.image,i=t.intro,c=t.description,r=t.details,o=t.stack,s=t.period,a=t.link,d=Object(z.useState)(!1),l=Object(it.a)(d,2),b=l[0],j=l[1],p=Object(z.useState)(!1),x=Object(it.a)(p,2),h=x[0],u=x[1],f=function(t){"defaultModal"===t?(u(!1),j(!0)):"youtubeModal"===t?(j(!1),u(!0)):(j(!1),u(!1))};return Object(W.jsxs)(yt,{children:[Object(W.jsx)("th",{className:"title",children:Object(W.jsx)("div",{onClick:function(){return f("defaultModal")},children:e&&Object(W.jsx)("img",{src:e[0],alt:n})})}),Object(W.jsx)("td",{className:"descirption",children:Object(W.jsxs)("div",{children:[Object(W.jsxs)("div",{className:"description_text",children:[Object(W.jsx)("div",{children:i}),c.map((function(t,n){return Object(W.jsx)("div",{children:t},n)})),Object(W.jsx)("div",{className:"period",children:s})]}),Object(W.jsx)("div",{children:o.map((function(t,n){return Object(W.jsx)(jt,{type:"skill",text:t},n)}))})]})}),Object(W.jsxs)("td",{className:"etc",children:[a.github&&Object(W.jsx)("div",{children:Object(W.jsx)("a",{href:a.github,target:"_blank",children:Object(W.jsx)(bt.b,{})})}),a.youtube&&Object(W.jsx)("div",{onClick:function(){return f("youtubeModal")},children:Object(W.jsx)(bt.a,{})})]}),Object(W.jsxs)("td",{children:[b&&Object(W.jsx)(Ot,{image:e,title:n,details:r,setVisable:j}),h&&Object(W.jsx)(Ot,{type:"youtube",link:a.youtube,setVisable:u})]})]})},yt=J.d.tr(g||(g=Object(P.a)(["\n\tborder-bottom: 1px solid gray;\n\theight: 100%;\n\tth {\n\t\tpadding: 20px 0;\n\t}\n\t> .title,\n\t.etc {\n\t\tvertical-align: middle;\n\t\ttext-align: center;\n\t}\n\t> .title {\n\t\tmargin: 0 auto;\n\t\tdiv {\n\t\t\tcursor: pointer;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tfont-weight: 700;\n\t\t\timg {\n\t\t\t\twidth: 160px;\n\t\t\t\theight: 110px;\n\t\t\t\topacity: 0.9;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\twidth: 160px;\n\t\t\t\theight: 110px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tz-index: 3;\n\t\t\t\tbackground: rgba(0, 0, 0, 0.4);\n\t\t\t\tbox-shadow: rgba(0, 0, 0, 0.15) 4px 4px;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tcolor: white;\n\t\t\t\tposition: absolute;\n\t\t\t\ttransition: all 0.3s;\n\t\t\t\tpadding: 5px 0;\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.1);\n\t\t\t\t\tcolor: black;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.descirption {\n\t\theight: 1px;\n\t\t// \ub192\uc774 \uaf3c\uc218\n\t\t> div {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\theight: 100%;\n\t\t\tpadding: 1px 5px;\n\t\t\tjustify-content: space-between;\n\t\t\tline-height: 1.3;\n\t\t\t.description_text {\n\t\t\t\tdiv {\n\t\t\t\t\tfont-size: 0.85rem;\n\t\t\t\t\tline-height: 1.3;\n\t\t\t\t\t&:first-of-type {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\tpadding-bottom: 4px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.period {\n\t\t\t\t\tpadding: 10px 0;\n\t\t\t\t\tcolor: gray;\n\t\t\t\t\tfont-size: 0.76rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tpadding: 15px 2px;\n\t}\n\t.etc {\n\t\tdiv {\n\t\t\tcursor: pointer;\n\t\t\tfont-size: 30px;\n\t\t\t&:first-of-type {\n\t\t\t\ttransition: all 0.3s;\n\t\t\t\t&:hover {\n\t\t\t\t\tcolor: gray;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&:last-of-type {\n\t\t\t\ttransition: all 0.3s;\n\t\t\t\t&:hover {\n\t\t\t\t\tcolor: red;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),wt=function(t){var n=t.title,e=t.desc,i=t.item,c=t.tailText,r=Object(Q.a)(t,["title","desc","item","tailText"]),o=Object(X.a)({title:n,desc:e,item:i},r);return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(dt,{title:n,desc:e}),Object(W.jsxs)(kt,Object(X.a)(Object(X.a)({},o),{},{children:[Object(W.jsx)("div",{children:Object(W.jsxs)("table",{children:[Object(W.jsxs)("colgroup",{children:[Object(W.jsx)("col",{width:"20%"}),Object(W.jsx)("col",{width:"73%"}),Object(W.jsx)("col",{width:"7%"})]}),Object(W.jsx)("thead",{children:Object(W.jsxs)("tr",{children:[Object(W.jsx)("th",{children:"Project"}),Object(W.jsx)("th",{children:"Description"}),Object(W.jsx)("th",{children:"Ect"})]})}),Object(W.jsx)("tbody",{children:i.map((function(t,n){return Object(W.jsx)(vt,Object(X.a)({},t),n)}))})]})}),Object(W.jsx)("div",{className:"tales",children:c})]}))]})},kt=J.d.div(m||(m=Object(P.a)(["\n\tpadding: 1rem;\n\tbackground: white;\n\tborder-radius: 3px;\n\tbox-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n\tdiv {\n\t\ttable {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"]))),zt=e(47),Nt=e.n(zt),Tt=function(t){var n=t.title,e=t.desc,i=t.item,c=t.initialDesc,r=Object(Q.a)(t,["title","desc","item","initialDesc"]),o=Object(z.useState)(c),s=Object(it.a)(o,2),a=s[0],d=s[1],l=Object(z.useState)(!1),b=Object(it.a)(l,2),j=b[0],p=b[1],x=function(t){d(t),p((function(t){return!t}))},h=Object(X.a)({title:n,desc:e,item:i,descOver:j},r);return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(dt,{title:n,desc:e}),Object(W.jsxs)(St,Object(X.a)(Object(X.a)({},h),{},{children:[Object(W.jsx)("div",{className:"skillDesc",children:a}),Object(W.jsx)("div",{className:"skillList",children:i.map((function(t,n){var e=t.title,i=t.logo,r=t.description;return Object(W.jsx)("div",{onMouseOver:function(){return x(r)},onMouseOut:function(){return x(c)},children:i?Object(W.jsx)("img",{src:i,alt:e}):Object(W.jsx)("span",{children:e})},n)}))})]}))]})},St=J.d.div(v||(v=Object(P.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbackground: #ededed;\n\tbox-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n\t.skillDesc {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbackground: ",";\n\t\tcolor: #7c7a7a;\n\t\tborder-radius: 4px;\n\t\tfont-size: 0.8rem;\n\t\tfont-weight: 400;\n\t\tline-height: 1.5;\n\t\twidth: 100%;\n\t\tmin-height: 100px;\n\t\tborder-radius: 5px;\n\t\tpadding: 15px 10px;\n\t\ttext-align: center;\n\t}\n\t.skillList {\n\t\tuser-select: none;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tflex-flow: row wrap;\n\t\twidth: 100%;\n\t\t> div {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\ttext-align: center;\n\t\t\tbackground: #ededed;\n\t\t\tborder-radius: 0 0 4px 4px;\n\t\t\tmargin-top: 0;\n\t\t\tfont-size: 0.7rem;\n\t\t\tflex-grow: 1;\n\t\t\theight: 60px;\n\t\t\tpadding: 10px;\n\t\t\timg {\n\t\t\t\t/* width: 100%; */\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tpadding: 15px;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tbackground: #ffffff;\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.descOver?"#ffffff":"#ededed"})),Ct=function(t){var n=Object.assign({},t),e=Object(X.a)({},n);return Object(W.jsxs)(Ht,Object(X.a)(Object(X.a)({},e),{},{children:[Object(W.jsx)("p",{className:"line"}),Object(W.jsx)("div",{children:" \u24b8 2021. HAM JUN HO \ud604\uc7ac \ud398\uc774\uc9c0\ub294 \uc544\uc9c1 \ubbf8\uc644\uc131\uc785\ub2c8\ub2e4."})]}))},Ht=J.d.footer(y||(y=Object(P.a)(["\n\tposition: relative;\n\tbottom: 50px;\n\tfont-size: 0.7rem;\n\tbackground: #eaeae9;\n\twidth: 100%;\n\tdiv {\n\t\t&:first-of-type {\n\t\t\tpadding: 5px 0;\n\t\t\tfont-weight: 400;\n\t\t\tul {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-around;\n\t\t\t\tli {\n\t\t\t\t\tpadding: 8px;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\tcolor: #9321fd;\n\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&:last-of-type {\n\t\t\tfont-size: 0.7rem;\n\t\t\tcolor: #7475aa;\n\t\t\tpadding: 5px 0;\n\t\t\tdisplay: flex;\n\t\t\tfont-weight: 400;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\tp.line {\n\t\twidth: 100%;\n\t\theight: 1.5px;\n\t\tbackground: #d8d8d7;\n\t\tmargin: 13px 0;\n\t}\n"]))),Et=e(48),Lt=function(t){var n=t.title,e=void 0===n?"CONTACT":n;return Object(W.jsxs)(Bt,{children:[Object(W.jsx)(dt,{title:e,center:!0}),Object(W.jsxs)("div",{children:[Object(W.jsx)("div",{children:Object(W.jsx)("img",{src:"./img/me.jpg",alt:"HAMJUNHO"})}),Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{children:"Phone . 010-9215-9984"}),Object(W.jsx)("span",{children:"Email . beginal01@gmail.com"}),Object(W.jsx)("span",{children:"Blog . https://jsbeginner.tistory.com/"}),Object(W.jsx)("span",{children:"GitHub . https://github.com/beginal"}),Object(W.jsx)("span",{children:"Hobby . \ub4dc\ub77c\ub9c8\uc2dc\uccad, \uac8c\uc784, \ucf54\ub529"}),Object(W.jsx)("p",{children:"\uc6b0\ud558\ub2e8 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc2dc\uba74 \uc774\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(W.jsx)("a",{href:"https://www.rocketpunch.com/@beginal01/jobhunt",children:"\uc785\uc0ac \uc81c\uc548 \ud558\ub7ec\uac00\uae30"})]})]})]})},Bt=J.d.div(w||(w=Object(P.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\t/* background: white; */\n\tpadding: 10px;\n\tborder-radius: 4px;\n\t> div {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tdiv {\n\t\t\t&:first-of-type {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\timg {\n\t\t\t\t\twidth: 250px;\n\t\t\t\t\theight: 280px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&:last-of-type {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tfont-size: 0.95rem;\n\t\t\t\tpadding: 0 10px;\n\t\t\t\tline-height: 2;\n\t\t\t}\n\t\t}\n\t}\n"]))),It=J.d.div(k||(k=Object(P.a)(["\n\tbackground: #eaeae9;\n\tmain {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin: 0 95px;\n\t\tpadding-bottom: 120px;\n\t}\n\t@media "," {\n\t\tmain {\n\t\t\tmargin: 0 45px;\n\t\t}\n\t}\n"])),(function(t){return t.theme.tablet})),Mt=function(){var t=Object(S.b)();Object(z.useEffect)((function(){Object(V.a)(U.a.mark((function n(){var e,i;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Nt.a.get("./requests.json");case 2:e=n.sent,i=e.data,t(L(i.project)),t(B(i.skills));case 6:case"end":return n.stop()}}),n)})))()}),[]);var n=Object(S.c)((function(t){return t.resumeReducer})),e=n.project,i=n.skills;return Object(W.jsxs)(It,{children:[Object(W.jsx)(nt,{children:Object(W.jsx)(Y,{size:"X-large",color:"white",label:"\uac1c\ubc1c\uc790 \ud568\uc900\ud638 \uc785\ub2c8\ub2e4"})}),Object(W.jsx)(rt,{menu:["INDEX","CONTACT","PROJECT","SKILL","ABCDE","FGHIU"],navTitle:"HAM JUN HO"}),Object(W.jsxs)("main",{children:[Object(W.jsxs)($,{title:"INDEX",children:[Object(W.jsx)("span",{children:"\uc9c1\uc811 \uc6f9\ud398\uc774\uc9c0\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uace0 \uc2f6\ub2e4\ub294 \uc0dd\uac01\uc73c\ub85c 2019\ub144\ubd80\ud130 \uac1c\ubc1c \uacf5\ubd80\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \ud3ec\uae30\ud558\uc9c0 \uc54a\uace0 \ub2ec\ub824\uc628 \uc9c0\uae08\uc740 \uc5b4\uc5ff\ud55c React \uac1c\ubc1c\uc790\ub77c\uace0 \ub9d0\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4. \uac1c\ubc1c\uc5d0\uc11c\uc758 \ud6a8\uc728\uc744 \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud569\ub2c8\ub2e4. \ucf54\ub4dc\uc758 \ud6a8\uc728\uc744 \ub192\uc774\uae30 \uc704\ud574 \ub9ac\ud329\ud1a0\ub9c1\uc5d0 \ub9ce\uc740 \uc2dc\uac04\uc744 \ud560\uc560\ud558\ub294 \ud3b8\uc785\ub2c8\ub2e4. '\uc774\ub807\uac8c\ub3c4 \ud560 \uc218 \uc788\uad6c\ub098' \ub77c\ub294\uac78 \uae68\ub2ec\uc558\uc744\ub54c \uae30\ubd84\uc774 \ub108\ubb34 \uc88b\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ubc18\ubcf5\uc801\uc778 \uc791\uc5c5\uc744 \uc790\ub3d9\ud654 \ud558\ub294 \uc77c\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc790\uc8fc \uc4f0\ub294 \uc870\ud569\ud0a4\ub098 PC \uc0ac\uc6a9 \ud328\ud134 \ub4f1\uc744 \ub2e8\ucd95\ud0a4\ub85c \ub4f1\ub85d\ud574\ub450\uace0 \ud3b8\ud558\uac8c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud300\uc73c\ub85c\uc11c \uc6c0\uc9c1\uc774\ub294 \uac1c\ubc1c\uc790\uc778 \ub9cc\ud07c \ud611\uc5c5\uc744 \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud569\ub2c8\ub2e4."}),Object(W.jsx)("p",{style:{color:"red",fontSize:"0.9rem"},children:"2021.02.26 - \uae30\ub2a5 \uad6c\ud604\uc740 \uac70\uc758\ub2e4 \uc644\uc131\ub418\uc5b4\uac00\uace0\uc788\uc9c0\ub9cc \uc544\uc9c1 \ubd80\uc871\ud55c\ubd80\ubd84\uc774 \ub9ce\uc2b5\ub2c8\ub2e4. Mobile, Tablet \ud398\uc774\uc9c0\ub294 \uace7 \uc791\uc5c5 \uc608\uc815\uc785\ub2c8\ub2e4. \uc644\uc131\ub418\uae30 \uc804\uae4c\uc9c0 \uc6b0\uce21\ud558\ub2e8\uc758 Notion \uc544\uc774\ucf58\uc744 \ub20c\ub7ec \ub178\uc158 \uc774\ub825\uc11c\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694!"})]}),Object(W.jsx)(Lt,{}),Object(W.jsx)(wt,{title:"PROJECT",item:e,desc:"\ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c \uc124\uba85\uc124\uba85",tailText:"\uc774\ubbf8\uc9c0\ub97c \ud074\ub9ad\ud558\uc2dc\uba74 \uac01 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc744 \ud655\uc778\ud558\uc2e4\uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(W.jsx)(Tt,{title:"SKILL",desc:"Skillset",initialDesc:"\uac01 \ud56d\ubaa9\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub824\ubcf4\uc138\uc694.",item:i})]}),Object(W.jsx)(st,{link:"https://www.notion.so/page0blue/Ham-Jun-Ho-73ff9b8c6a9f471392614cc8b8d7a80e",children:Object(W.jsx)(Et.a,{})}),Object(W.jsx)(Ct,{github:"https://github.com/beginal"})]})},Rt=e(49),Dt=function(){return Object(W.jsxs)("div",{children:[Object(W.jsxs)(Rt.a,{children:[Object(W.jsx)("link",{href:"//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css",rel:"stylesheet"}),Object(W.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap",rel:"stylesheet"})]}),Object(W.jsx)(Mt,{})]})};T.a.render(Object(W.jsx)(S.a,{store:D,children:Object(W.jsxs)(J.a,{theme:K,children:[Object(W.jsx)(F,{}),Object(W.jsx)(Dt,{})]})}),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.7bb06b6e.chunk.js.map