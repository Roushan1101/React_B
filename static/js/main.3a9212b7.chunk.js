(this.webpackJsonpnew1=this.webpackJsonpnew1||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(17),s=n.n(r),i=(n(23),n(24),n(8)),j=n(2),l=(n(13),n(25),n(0));var u=function(){return Object(l.jsxs)("nav",{className:"navbar bg-dark container",children:[Object(l.jsx)("h4",{children:Object(l.jsx)(i.b,{className:"link",to:"/",children:"Home"})}),Object(l.jsx)("h4",{children:Object(l.jsx)(i.b,{className:"link",to:"/next",children:"Next"})}),Object(l.jsx)("h4",{children:Object(l.jsx)(i.b,{className:"link",to:"/handle",children:"Handle"})}),Object(l.jsx)("h4",{children:Object(l.jsx)(i.b,{className:"link",to:"/trash",children:"Trash"})})]})},o=n(7);n(32);var b=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{class:"main",children:Object(l.jsxs)("div",{class:"timer",children:[Object(l.jsx)("h4",{class:"current",children:n}),Object(l.jsx)("input",{type:"number",id:"val",placeholder:"Enter Seconds.."}),Object(l.jsx)("button",{className:"btn-dark",id:"s",onClick:function(){for(var e=document.getElementById("val").value,t=function(t){t<=e?setTimeout((function(){a(t)}),1e3+1e3*t):setTimeout((function(){a("Time Up !")}),1e3+1e3*t)},n=0;n<=e+1;n++)t(n)},children:" Start "}),Object(l.jsx)("button",{className:"btn-dark",id:"e",onClick:function(){window.location.reload(!1)},children:" Reset "})]})}),Object(l.jsx)("div",{class:"main1"}),Object(l.jsx)("div",{class:"main2"})]})};n(33);var d=function(){var e=Object(c.useState)("Hello"),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{className:"div1",children:[Object(l.jsx)("h1",{children:n}),Object(l.jsx)("input",{type:"text",placeholder:"Name..",onChange:function(e){a("Hello "+e.target.value)}})]})};n(34);var h=function(){var e=Object(c.useState)("Hola !"),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{className:"hel",children:[Object(l.jsxs)("h1",{children:["Square: ",n]}),Object(l.jsx)("input",{type:"number",placeholder:"Enter integer value..",onChange:function(e){a(e.target.value*e.target.value)}})]})};n(35);var O=function(){var e=Object(c.useState)({count:0}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{className:"trash",children:[Object(l.jsxs)("h4",{children:["Hello Arrya Destructure ",n.count]}),Object(l.jsx)("button",{onClick:function(e){a((function(e){return{count:e.count=0}}))},children:"Reset"}),Object(l.jsx)("button",{onClick:function(){a((function(e){return{count:Number(e.count)+1}}))},children:"Plus+1"}),Object(l.jsx)("input",{type:"number",placeholder:"Enter Integer..",id:"fname",onChange:function(e){a((function(t){return{count:e.target.value}}))}})]})};var x=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(j.a,{path:"/",exact:!0,children:Object(l.jsx)(b,{})}),Object(l.jsx)(j.a,{path:"/next",children:Object(l.jsx)(d,{})}),Object(l.jsx)(j.a,{path:"/handle",children:Object(l.jsx)(h,{})}),Object(l.jsx)(j.a,{path:"/trash",children:Object(l.jsx)(O,{})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[36,1,2]]]);
//# sourceMappingURL=main.3a9212b7.chunk.js.map