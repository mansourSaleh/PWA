(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),l=(n(19),n(5)),i=n(1);var s=function(){return o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"About"))};var u=function(){return o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"This is PWA if you are using chrome it will prompt you to add the app to your home screen"))};var m=function(){return o.a.createElement("div",{className:"app"},o.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=+966509111136"}," ",o.a.createElement("h1",null,"whatsApp"),"+966-509111136"),o.a.createElement("h1",null,"m0509111136@gmail.com"))};var h=function(){return o.a.createElement(l.a,null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/contact"},"Contact")))),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/about"},o.a.createElement(s,null)),o.a.createElement(i.a,{exact:!0,path:"/contact"},o.a.createElement(m,null)),o.a.createElement(i.a,{exact:!0,path:"/"},o.a.createElement(u,null))))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PWA",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/PWA","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.ac19cea6.chunk.js.map