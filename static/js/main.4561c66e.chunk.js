(this.webpackJsonpprivate=this.webpackJsonpprivate||[]).push([[0],{49:function(e,t,r){},52:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(0),a=r(21),i=r.n(a),s=r(53),u=r(20),l=Object.freeze({root:"/"}),o=(r(49),r(14)),j=function(e){var t=function(e,t){var r=Object(n.useState)(null),c=Object(o.a)(r,2),a=c[0],i=c[1],s=Object(n.useState)(-1),u=Object(o.a)(s,2),l=u[0],j=u[1],d=Object(n.useState)(""),O=Object(o.a)(d,2),h=O[0],b=O[1],f=Object(n.useState)(""),p=Object(o.a)(f,2),m=p[0],F=p[1];Object(n.useEffect)((function(){e(a)}));var x=function(){i(null),j(-1),b(""),F(""),t(0)};return{filterValue:a,checkedValue:l,_setCheckedValue:function(e){a||j(e)},minValue:h,maxValue:m,_onclickSetFilter:function(){if(a)x();else{var e={};0===l?e.check="cloudy":1===l&&(e.check="sunny"),h&&(e.min=h),m&&(e.max=m),i(e)}},_setTemperatureValue:function(e){var t=e.target;if(t){var r=e.target.value;"min-temperature"===t.id&&r>=-100&&r<=100&&r&&b(e.target.value),"max-temperature"===t.id&&r>=-100&&r<=100&&r&&F(e.target.value)}}}}(e.setFilter,e.setActive),r=t.filterValue,a=t.checkedValue,i=t._setCheckedValue,s=t.minValue,u=t.maxValue,l=t._onclickSetFilter,j=t._setTemperatureValue;return Object(c.jsxs)("div",{className:"filter",children:[Object(c.jsx)("span",{className:"checkbox ".concat(0===a?"selected":""," ").concat(r?"blocked":"").trim(),onClick:function(){return i(0)},children:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e"}),Object(c.jsx)("span",{className:"checkbox ".concat(1===a?"selected":""," ").concat(r?"blocked":"").trim(),onClick:function(){return i(1)},children:"\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e"}),Object(c.jsxs)("p",{className:"custom-input",children:[Object(c.jsx)("label",{htmlFor:"min-temperature",children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),Object(c.jsx)("input",{id:"min-temperature",type:"number",min:"-100",max:"100",onChange:j,value:s,disabled:r?"blocked":""})]}),Object(c.jsxs)("p",{className:"custom-input",children:[Object(c.jsx)("label",{htmlFor:"max-temperature",children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),Object(c.jsx)("input",{id:"max-temperature",type:"number",min:"-100",max:"100",onChange:j,value:u,disabled:r?"blocked":""})]}),Object(c.jsx)("button",{onClick:l,disabled:-1===a&&!s&&!u,children:r?"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c":"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c"})]})},d=r(54),O=r(55),h=function(e){var t,r=e.data,n=e.isFetching,a=function(e){var t=e.data,r=e.isFetching,c=e.currentActive;return{currentHeadValue:!r&&t&&t.length&&t.find((function(e,t){return t===c}))}}({data:r,isFetching:n,currentActive:e.currentActive}).currentHeadValue,i=a.day,s=a.type,u=a.temperature,l=a.rain_probability,o=a.humidity,j=new Date(i),h=!n&&r&&r.length&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"head",children:[Object(c.jsx)("div",{className:"icon ".concat(s)}),Object(c.jsxs)("div",{className:"current-date",children:[Object(c.jsx)("p",{children:(t=Object(d.a)(j,"eeee",{locale:O.a}),"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1))}),Object(c.jsx)("span",{children:Object(d.a)(j,"d MMMM",{locale:O.a})})]})]},i),Object(c.jsxs)("div",{className:"current-weather",children:[Object(c.jsx)("p",{className:"temperature",children:u}),Object(c.jsxs)("p",{className:"meta",children:[Object(c.jsxs)("span",{className:"rainy",children:[l,"%"]}),Object(c.jsxs)("span",{className:"humidity",children:[o,"%"]})]})]})]});return Object(c.jsx)(c.Fragment,{children:h})},b=function(e){var t,r=e.data,n=e.index,a=e.currentActive,i=e.setActive,s=r.day,u=r.type,l=r.temperature,o=Object(d.a)(new Date(s),"cccc",{locale:O.a});return Object(c.jsxs)("div",{className:"day ".concat(u," ").concat(n===a?"selected":""),onClick:function(){return i(n)},children:[Object(c.jsx)("p",{children:(t=o,"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1))}),Object(c.jsx)("span",{children:l})]})},f=function(e){var t=e.data,r=e.isFetching,n=e.currentActive,a=e.setActive,i=!r&&t&&t.length&&t.map((function(e,t){return Object(c.jsx)(b,{data:e,index:t,currentActive:n,setActive:a},String(e.day))}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"forecast",children:i})})},p=r(28),m=r.n(p),F=r(33),x=Object.freeze({forecast:{fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return fetch("".concat("https://lab.lectrum.io/rtx/api","/forecast"),{method:"GET"})}))}}),g=Object.freeze({FORECAST_START_FETCHING:"FORECAST_START_FETCHING",FORECAST_STOP_FETCHING:"FORECAST_STOP_FETCHING",FORECAST_FILL:"FORECAST_FILL",FORECAST_SET_FETCHING_ERROR:"FORECAST_SET_FETCHING_ERROR",FORECAST_FETCH_ASYNC:"FORECAST_FETCH_ASYNC"}),v=Object.freeze({startFetching:function(){return{type:g.FORECAST_START_FETCHING}},stopFetching:function(){return{type:g.FORECAST_STOP_FETCHING}},fill:function(e){return{type:g.FORECAST_FILL,payload:e}},setFetchingError:function(e){return{type:g.FORECAST_SET_FETCHING_ERROR,error:!0,payload:e}},fetchAsync:function(){return function(){var e=Object(F.a)(m.a.mark((function e(t){var r,c,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v.startFetching()),e.next=3,x.forecast.fetch();case 3:if(200!==(r=e.sent).status){e.next=12;break}return e.next=7,r.json();case 7:c=e.sent,n=c.data,t(v.fill(n)),e.next=14;break;case 12:a={status:r.status},t(v.setFetchingError(a));case 14:t(v.stopFetching());case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),_=function(e){var t=function(){var e=Object(u.b)();Object(n.useEffect)((function(){e(v.fetchAsync())}),[e]);var t=Object(u.c)((function(e){return e.forecast}));return{data:t.data,isFetching:t.isFetching,error:t.error}}(),r=t.isFetching,c=t.data,a=t.error;if(!e)return{isFetching:r,data:!r&&c&&c.length&&c.filter((function(e,t){return t<7})),error:a};if(e&&!r){var i=e.check,s=e.min,l=e.max,o=c.filter((function(e){return e.type===i})),j=0;return s&&l?i?{isFetching:r,data:o.filter((function(e){return e.temperature>=s&&e.temperature<=l&&j++<7})),error:a}:{isFetching:r,data:c.filter((function(e){return e.temperature>=s&&e.temperature<=l&&j++<7})),error:a}:s?i?{isFetching:r,data:o.filter((function(e){return e.temperature>=s&&j++<7})),error:a}:{isFetching:r,data:c.filter((function(e){return e.temperature>=s&&j++<7})),error:a}:l?i?{isFetching:r,data:o.filter((function(e){return e.temperature<=l&&j++<7})),error:a}:{isFetching:r,data:c.filter((function(e){return e.temperature<=l&&j++<7})),error:a}:{isFetching:r,data:!r&&o&&o.length&&o.filter((function(e,t){return t<7})),error:a}}return{isFetching:r,data:c,error:a}},T=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),r=t[0],a=t[1],i=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2);return{valueFilter:t[0],setFilter:t[1]}}(),s=i.valueFilter,u=i.setFilter,l=_(s),d=l.isFetching,O=l.data,b=l.error;if(b&&404===b.status)return Object(c.jsx)("p",{className:"message",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"});if(b&&404!==b.status)return Object(c.jsx)("p",{className:"message",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"});var p=d&&Object(c.jsx)("div",{className:"pswp__preloader__icn",children:Object(c.jsx)("div",{className:"pswp__preloader__cut",children:Object(c.jsx)("div",{className:"pswp__preloader__donut"})})}),m=!d&&O&&0===O.length&&Object(c.jsx)("p",{className:"message",children:"\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"}),F=!d&&O&&O.length&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{data:O,isFetching:d,currentActive:r}),Object(c.jsx)(f,{data:O,isFetching:d,currentActive:r,setActive:a})]});return Object(c.jsxs)(c.Fragment,{children:[p,Object(c.jsx)(j,{setFilter:u,setActive:a}),F||m]})},E=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("main",{children:Object(c.jsx)(T,{})})})},S=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(s.c,{children:Object(c.jsx)(s.a,{exact:!0,path:l.root,children:Object(c.jsx)(E,{})})})})},C=r(12),A=Object(C.a)(),N=r(36),R=r(13),y=r(15),k={data:null,isFetching:!1,error:null},w=Object(R.c)({forecast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,r=t.type,c=t.payload;switch(r){case g.FORECAST_START_FETCHING:return Object(y.a)(Object(y.a)({},e),{},{isFetching:!0});case g.FORECAST_STOP_FETCHING:return Object(y.a)(Object(y.a)({},e),{},{isFetching:!1});case g.FORECAST_SET_FETCHING_ERROR:return Object(y.a)(Object(y.a)({},e),{},{error:c,data:null});case g.FORECAST_FILL:return Object(y.a)(Object(y.a)({},e),{},{data:c,error:null});default:return e}}}),I=r(34),H=r(35),V=(Object(I.createLogger)({duration:!0,collapsed:!0,colors:{title:function(e){return e.error?"firebrick":"deepskyblue"},prevState:function(){return"#1C5FAF"},action:function(){return"#149945"},nextState:function(){return"#A47104"},error:function(){return"#ff0005"}}}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,R.d),G=[H.a];var L=Object(R.e)(w,V(R.a.apply(void 0,Object(N.a)(G)))),M=function(){return Object(c.jsx)(u.a,{store:L,children:Object(c.jsx)(s.b,{history:A,children:Object(c.jsx)(S,{})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(c.jsx)(M,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.4561c66e.chunk.js.map