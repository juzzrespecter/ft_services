(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Cqi4:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"AdminSettings",(function(){return h}));var r=n("q1tI"),o=n.n(r),a=n("/MKj"),i=n("0cfB"),c=n("t8hP"),u=n("lzJ5"),s=n("ZGyg");function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(){var t,n;y(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=b(this,(t=d(e)).call.apply(t,[this].concat(o)))).state={settings:{},isLoading:!0},n}var n,r,a,i,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:(i=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.getBackendSrv)().get("/api/admin/settings");case 2:e=t.sent,this.setState({settings:e,isLoading:!1});case 4:case"end":return t.stop()}}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=i.apply(t,e);function a(t){p(o,n,r,a,c,"next",t)}function c(t){p(o,n,r,a,c,"throw",t)}a(void 0)}))},function(){return u.apply(this,arguments)})},{key:"render",value:function(){var t=this.state,e=t.settings,n=t.isLoading,r=this.props.navModel;return o.a.createElement(s.a,{navModel:r},o.a.createElement(s.a.Contents,{isLoading:n},o.a.createElement("div",{className:"grafana-info-box span8",style:{margin:"20px 0 25px 0"}},"These system settings are defined in grafana.ini or custom.ini (or overridden in ENV variables). To change these you currently need to restart grafana."),o.a.createElement("table",{className:"filter-table"},o.a.createElement("tbody",null,Object.entries(e).map((function(t,e){var n=f(t,2),r=n[0],a=n[1];return o.a.createElement(o.a.Fragment,{key:"section-".concat(e)},o.a.createElement("tr",null,o.a.createElement("td",{className:"admin-settings-section"},r),o.a.createElement("td",null)),Object.entries(a).map((function(t,e){var n=f(t,2),r=n[0],a=n[1];return o.a.createElement("tr",{key:"property-".concat(e)},o.a.createElement("td",{style:{paddingLeft:"25px"}},r),o.a.createElement("td",{style:{whiteSpace:"break-spaces"}},a))})))}))))))}}])&&m(n.prototype,r),a&&m(n,a),e}(o.a.PureComponent);e.default=Object(i.hot)(t)(Object(a.connect)((function(t){return{navModel:Object(u.a)(t.navIndex,"server-settings")}}))(h))}.call(this,n("3UD+")(t))}}]);
//# sourceMappingURL=AdminSettings.ddf7518003180e1ca7bc.js.map