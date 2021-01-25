(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{IeNb:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"UserInvitePage",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=a("0cfB"),i=a("/MKj"),o=a("pkzr"),c=a("HJRA"),u=a("lzJ5"),s=a("ZGyg"),m=function(e){var t=e.navModel;return r.a.createElement(s.a,{navModel:t},r.a.createElement(s.a.Contents,null,r.a.createElement("h3",{className:"page-sub-heading"},"Invite User"),r.a.createElement("div",{className:"p-b-2"},"Send invite or add existing Grafana user to the organization",r.a.createElement("span",{className:"highlight-word"}," ",c.b.user.orgName)),r.a.createElement(o.a,null)))};t.default=Object(l.hot)(e)(Object(i.connect)((function(e){return{navModel:Object(u.a)(e.navIndex,"users")}}))(m))}.call(this,a("3UD+")(e))},pkzr:function(e,t,a){"use strict";(function(e){var n=a("q1tI"),r=a.n(n),l=a("kDLi"),i=a("ZFWI"),o=a("GQ3c"),c=a("t8hP"),u=a("3SGO"),s=a("/MKj"),m=a("0cfB"),d=a("HJRA"),p=a("Obii");function v(e,t,a,n,r,l,i){try{var o=e[l](i),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(n,r)}var E=[{label:"Viewer",value:o.OrgRole.Viewer},{label:"Editor",value:o.OrgRole.Editor},{label:"Admin",value:o.OrgRole.Admin}],f={updateLocation:u.d};t.a=Object(m.hot)(e)(Object(s.connect)(null,f)((function(e){var t=e.updateLocation,a=function(){var e,a=(e=regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.getBackendSrv)().post("/api/org/invites",a);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),d.a.emit(p.AppEvents.alertError,["Failed to send invite",e.t0.message]);case 8:t({path:"org/users/"});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function i(e){v(l,n,r,i,o,"next",e)}function o(e){v(l,n,r,i,o,"throw",e)}i(void 0)}))});return function(e){return a.apply(this,arguments)}}(),n={name:"",email:"",role:o.OrgRole.Editor,sendEmail:!0};return r.a.createElement(l.Form,{defaultValues:n,onSubmit:a},(function(e){var t=e.register,a=e.control,n=e.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Field,{invalid:!!n.loginOrEmail,error:n.loginOrEmail?"Email or Username is required":void 0,label:"Email or Username"},r.a.createElement(l.Input,{name:"loginOrEmail",placeholder:"email@example.com",ref:t({required:!0})})),r.a.createElement(l.Field,{invalid:!!n.name,label:"Name"},r.a.createElement(l.Input,{name:"name",placeholder:"(optional)",ref:t})),r.a.createElement(l.Field,{invalid:!!n.role,label:"Role"},r.a.createElement(l.InputControl,{as:l.RadioButtonGroup,control:a,options:E,name:"role"})),r.a.createElement(l.Field,{invalid:!!n.sendEmail,label:"Send invite email"},r.a.createElement(l.Switch,{name:"sendEmail",ref:t})),r.a.createElement(l.HorizontalGroup,null,r.a.createElement(l.Button,{type:"submit"},"Submit"),r.a.createElement(l.LinkButton,{href:p.locationUtil.assureBaseUrl(Object(i.c)().appSubUrl+"/org/users"),variant:"secondary"},"Back")))}))})))}).call(this,a("3UD+")(e))}}]);
//# sourceMappingURL=UserInvitePage.ddf7518003180e1ca7bc.js.map