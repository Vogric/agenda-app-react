(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),i=(t(14),t(8)),m=t(2),o=t(4),u=t(5),s=t(17),d=function(e){var a=e.crearCita,t=Object(n.useState)({nameEvent:"",date:"",hour:"",description:""}),r=Object(m.a)(t,2),c=r[0],i=r[1],d=function(e){i(Object(u.a)(Object(u.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))},E=c.nameEvent,h=c.date,p=c.hour,f=c.description,v=Object(n.useState)(!1),g=Object(m.a)(v,2),b=g[0],N=g[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Add an event to your agenda"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==E.trim()&&""!==h.trim()&&""!==p.trim()&&""!==f.trim()?(c.id=Object(s.a)(),a(c),i({nameEvent:"",date:"",hour:"",description:""})):N(!0)}},l.a.createElement("label",null,"Name of the event"),l.a.createElement("input",{type:"text",name:"nameEvent",className:"u-full-width",placeholder:"Name of the event",onChange:d,value:E}),l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{name:"description",placeholder:"Insert a description",className:"u-full-width",onChange:d,value:f}),l.a.createElement("label",null,"Date"),l.a.createElement("input",{type:"date",name:"date",className:"u-full-width",onChange:d,value:h}),l.a.createElement("label",null,"Hour"),l.a.createElement("input",{type:"time",name:"hour",className:"u-full-width",onChange:d,value:p}),l.a.createElement("button",{type:"submit",className:"u-full-width button-success "},"Add Event"),b?l.a.createElement("p",{className:"alerta-error animate__animated animate__zoomIn"},"Make sure you complete everything"):null))},E=function(e){var a=e.cita,t=e.eliminarCita;return l.a.createElement("div",{className:"cita animate__animated animate__rollIn"},l.a.createElement("p",null,"Name of the event: ",l.a.createElement("span",null," ",a.nameEvent," ")),l.a.createElement("p",null,"Description: ",l.a.createElement("span",null," ",a.description," ")),l.a.createElement("p",null,"Date: ",l.a.createElement("span",null," ",a.date," ")),l.a.createElement("p",null,"Hour: ",l.a.createElement("span",null," ",a.hour," ")),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return t(a.id)}},"Delete \xd7"))};var h=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var a=Object(n.useState)(e),t=Object(m.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("citas"))?localStorage.setItem("citas",JSON.stringify(r)):localStorage.setItem("citas",JSON.stringify([]))}),[r]);var o=function(e){var a=r.filter((function(a){return a.id!==e}));c(a)},u=0===r.length?"There are no events assigned":"Manage your events";return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"signature"},"\xa9 2020 - Braian Vogri\u010d"),l.a.createElement("h1",{className:"animate__animated animate__fadeIn"},"MyAgenda"),l.a.createElement("div",{className:"container animate__animated animate__fadeIn"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(d,{crearCita:function(e){c([].concat(Object(i.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",{className:"citas animate__animated animate__fadeIn"},u),r.map((function(e){return l.a.createElement(E,{key:e.id,cita:e,eliminarCita:o})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d937e76c.chunk.js.map