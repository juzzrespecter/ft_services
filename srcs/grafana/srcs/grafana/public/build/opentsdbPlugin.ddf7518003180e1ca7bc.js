(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"02dm":function(t,e,r){"use strict";r.r(e);var a=r("KHwQ"),n=r.n(a),i=r("LvDl"),o=r.n(i),s=r("Obii"),u=r("t8hP"),l=r("5kRJ");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function m(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(t){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(l.a)();return p(this,e),(r=m(this,y(e).call(this,t))).templateSrv=a,r.type="opentsdb",r.url=t.url,r.name=t.name,r.withCredentials=t.withCredentials,r.basicAuth=t.basicAuth,t.jsonData=t.jsonData||{},r.tsdbVersion=t.jsonData.tsdbVersion||1,r.tsdbResolution=t.jsonData.tsdbResolution||1,r.lookupLimit=t.jsonData.lookupLimit||1e3,r.tagKeys={},r.aggregatorsPromise=null,r.filterTypesPromise=null,r}var r,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),r=e,(a=[{key:"query",value:function(t){var e=this,r=this.convertToTSDBTime(t.range.raw.from,!1,t.timezone),a=this.convertToTSDBTime(t.range.raw.to,!0,t.timezone),n=[];o.a.each(t.targets,(function(r){r.metric&&n.push(e.convertTargetToQuery(r,t,e.tsdbVersion))}));var i=o.a.compact(n);if(o.a.isEmpty(i))return Promise.resolve({data:[]});var s={};return o.a.each(i,(function(t){t.filters&&t.filters.length>0?o.a.each(t.filters,(function(t){s[t.tagk]=!0})):o.a.each(t.tags,(function(t,e){s[e]=!0}))})),t.targets=o.a.filter(t.targets,(function(t){return!0!==t.hide})),this.performTimeSeriesQuery(i,r,a).then((function(r){var a=e.mapMetricsToTargets(r.data,t,e.tsdbVersion);return{data:o.a.map(r.data,(function(r,n){return-1===(n=a[n])&&(n=0),e._saveTagKeys(r),e.transformMetricData(r,s,t.targets[n],t,e.tsdbResolution)}))}}))}},{key:"annotationQuery",value:function(t){var e=this.convertToTSDBTime(t.rangeRaw.from,!1,t.timezone),r=this.convertToTSDBTime(t.rangeRaw.to,!0,t.timezone),a=[],n=[];a.push({aggregator:"sum",metric:t.annotation.target});var i=o.a.compact(a);return this.performTimeSeriesQuery(i,e,r).then((function(e){if(e.data[0]){var r=e.data[0].annotations;t.annotation.isGlobal&&(r=e.data[0].globalAnnotations),r&&o.a.each(r,(function(e){var r={text:e.description,time:1e3*Math.floor(e.startTime),annotation:t.annotation};n.push(r)}))}return n}))}},{key:"targetContainsTemplate",value:function(t){if(t.filters&&t.filters.length>0)for(var e=0;e<t.filters.length;e++)if(this.templateSrv.variableExists(t.filters[e].filter))return!0;if(t.tags&&Object.keys(t.tags).length>0)for(var r in t.tags)if(this.templateSrv.variableExists(t.tags[r]))return!0;return!1}},{key:"performTimeSeriesQuery",value:function(t,e,r){var a=!1;2===this.tsdbResolution&&(a=!0);var n={start:e,queries:t,msResolution:a,globalAnnotations:!0};3===this.tsdbVersion&&(n.showQuery=!0),r&&(n.end=r);var i={method:"POST",url:this.url+"/api/query",data:n};return this._addCredentialOptions(i),Object(u.getBackendSrv)().datasourceRequest(i)}},{key:"suggestTagKeys",value:function(t){return Promise.resolve(this.tagKeys[t]||[])}},{key:"_saveTagKeys",value:function(t){var e=Object.keys(t.tags);o.a.each(t.aggregateTags,(function(t){e.push(t)})),this.tagKeys[t.metric]=e}},{key:"_performSuggestQuery",value:function(t,e){return this._get("/api/suggest",{type:e,q:t,max:this.lookupLimit}).then((function(t){return t.data}))}},{key:"_performMetricKeyValueLookup",value:function(t,e){if(!t||!e)return Promise.resolve([]);var r=e.split(",").map((function(t){return t.trim()})),a=r[0],n=a+"=*";r.length>1&&(n+=","+r.splice(1).join(","));var i=t+"{"+n+"}";return this._get("/api/search/lookup",{m:i,limit:this.lookupLimit}).then((function(t){t=t.data.results;var e=[];return o.a.each(t,(function(t){-1===e.indexOf(t.tags[a])&&e.push(t.tags[a])})),e}))}},{key:"_performMetricKeyLookup",value:function(t){return t?this._get("/api/search/lookup",{m:t,limit:1e3}).then((function(t){t=t.data.results;var e=[];return o.a.each(t,(function(t){o.a.each(t.tags,(function(t,r){-1===e.indexOf(r)&&e.push(r)}))})),e})):Promise.resolve([])}},{key:"_get",value:function(t,e){var r={method:"GET",url:this.url+t,params:e};return this._addCredentialOptions(r),Object(u.getBackendSrv)().datasourceRequest(r)}},{key:"_addCredentialOptions",value:function(t){(this.basicAuth||this.withCredentials)&&(t.withCredentials=!0),this.basicAuth&&(t.headers={Authorization:this.basicAuth})}},{key:"metricFindQuery",value:function(t){if(!t)return Promise.resolve([]);var e;try{e=this.templateSrv.replace(t,{},"distributed")}catch(t){return Promise.reject(t)}var r=function(t){return o.a.map(t,(function(t){return{text:t}}))},a=e.match(/metrics\((.*)\)/);if(a)return this._performSuggestQuery(a[1],"metrics").then(r);var n=e.match(/tag_names\((.*)\)/);if(n)return this._performMetricKeyLookup(n[1]).then(r);var i=e.match(/tag_values\((.*?),\s?(.*)\)/);if(i)return this._performMetricKeyValueLookup(i[1],i[2]).then(r);var s=e.match(/suggest_tagk\((.*)\)/);if(s)return this._performSuggestQuery(s[1],"tagk").then(r);var u=e.match(/suggest_tagv\((.*)\)/);return u?this._performSuggestQuery(u[1],"tagv").then(r):Promise.resolve([])}},{key:"testDatasource",value:function(){return this._performSuggestQuery("cpu","metrics").then((function(){return{status:"success",message:"Data source is working"}}))}},{key:"getAggregators",value:function(){return this.aggregatorsPromise?this.aggregatorsPromise:(this.aggregatorsPromise=this._get("/api/aggregators").then((function(t){return t.data&&o.a.isArray(t.data)?t.data.sort():[]})),this.aggregatorsPromise)}},{key:"getFilterTypes",value:function(){return this.filterTypesPromise?this.filterTypesPromise:(this.filterTypesPromise=this._get("/api/config/filters").then((function(t){return t.data?Object.keys(t.data).sort():[]})),this.filterTypesPromise)}},{key:"transformMetricData",value:function(t,e,r,a,n){var i=this.createMetricLabel(t,r,e,a),s=[];return o.a.each(t.dps,(function(t,e){2===n?s.push([t,1*e]):s.push([t,1e3*e])})),{target:i,datapoints:s}}},{key:"createMetricLabel",value:function(t,e,r,a){if(e.alias){var n=o.a.clone(a.scopedVars||{});return o.a.each(t.tags,(function(t,e){n["tag_"+e]={value:t}})),this.templateSrv.replace(e.alias,n)}var i=t.metric,s=[];return o.a.isEmpty(t.tags)||o.a.each(o.a.toPairs(t.tags),(function(t){o.a.has(r,t[0])&&s.push(t[0]+"="+t[1])})),o.a.isEmpty(s)||(i+="{"+s.join(", ")+"}"),i}},{key:"convertTargetToQuery",value:function(t,e,r){if(!t.metric||t.hide)return null;var a={metric:this.templateSrv.replace(t.metric,e.scopedVars,"pipe"),aggregator:"avg"};if(t.aggregator&&(a.aggregator=this.templateSrv.replace(t.aggregator)),t.shouldComputeRate&&(a.rate=!0,a.rateOptions={counter:!!t.isCounter},t.counterMax&&t.counterMax.length&&(a.rateOptions.counterMax=parseInt(t.counterMax,10)),t.counterResetValue&&t.counterResetValue.length&&(a.rateOptions.resetValue=parseInt(t.counterResetValue,10)),r>=2&&(a.rateOptions.dropResets=!(a.rateOptions.counterMax||a.rateOptions.ResetValue&&0!==a.rateOptions.ResetValue))),!t.disableDownsampling){var i=this.templateSrv.replace(t.downsampleInterval||e.interval);i.match(/\.[0-9]+s/)&&(i=1e3*parseFloat(i)+"ms"),a.downsample=i+"-"+t.downsampleAggregator,t.downsampleFillPolicy&&"none"!==t.downsampleFillPolicy&&(a.downsample+="-"+t.downsampleFillPolicy)}if(t.filters&&t.filters.length>0){if(a.filters=n.a.copy(t.filters),a.filters)for(var o in a.filters)a.filters[o].filter=this.templateSrv.replace(a.filters[o].filter,e.scopedVars,"pipe")}else if(a.tags=n.a.copy(t.tags),a.tags)for(var s in a.tags)a.tags[s]=this.templateSrv.replace(a.tags[s],e.scopedVars,"pipe");return t.explicitTags&&(a.explicitTags=!0),a}},{key:"mapMetricsToTargets",value:function(t,e,r){var a,n,i=this;return o.a.map(t,(function(t){return 3===r?t.query.index:o.a.findIndex(e.targets,(function(r){return r.filters&&r.filters.length>0?r.metric===t.metric:r.metric===t.metric&&o.a.every(r.tags,(function(r,s){return a=i.templateSrv.replace(r,e.scopedVars,"pipe"),n=a.split("|"),o.a.includes(n,t.tags[s])||"*"===a}))}))}))}},{key:"interpolateVariablesInQueries",value:function(t,e){var r=this;return t.length?t.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t,{metric:r.templateSrv.replace(t.metric,e)})})):t}},{key:"convertToTSDBTime",value:function(t,e,r){return"now"===t?null:(t=s.dateMath.parse(t,e,r)).valueOf()}}])&&h(r.prototype,a),i&&h(r,i),e}(s.DataSourceApi);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function O(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(t,r){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(a=O(this,w(e).call(this,t,r))).errors=a.validateTarget(),a.aggregators=["avg","sum","min","max","dev","zimsum","mimmin","mimmax"],a.fillPolicies=["none","nan","null","zero"],a.filterTypes=["wildcard","iliteral_or","not_iliteral_or","not_literal_or","iwildcard","literal_or","regexp"],a.tsdbVersion=a.datasource.tsdbVersion,a.target.aggregator||(a.target.aggregator="sum"),a.target.downsampleAggregator||(a.target.downsampleAggregator="avg"),a.target.downsampleFillPolicy||(a.target.downsampleFillPolicy="none"),a.datasource.getAggregators().then((function(t){0!==t.length&&(a.aggregators=t)})),a.datasource.getFilterTypes().then((function(t){0!==t.length&&(a.filterTypes=t)})),a.suggestMetrics=function(t,e){a.datasource.metricFindQuery("metrics("+t+")").then(a.getTextValues).then(e)},a.suggestTagKeys=function(t,e){a.datasource.suggestTagKeys(a.target.metric).then(e)},a.suggestTagValues=function(t,e){a.datasource.metricFindQuery("suggest_tagv("+t+")").then(a.getTextValues).then(e)},a}var r,a,n;return e.$inject=["$scope","$injector"],function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,t),r=e,(a=[{key:"targetBlur",value:function(){this.errors=this.validateTarget(),this.refresh()}},{key:"getTextValues",value:function(t){return o.a.map(t,(function(t){return s.textUtil.escapeHtml(t.text)}))}},{key:"addTag",value:function(){this.target.filters&&this.target.filters.length>0&&(this.errors.tags="Please remove filters to use tags, tags and filters are mutually exclusive."),this.addTagMode?(this.target.tags||(this.target.tags={}),this.errors=this.validateTarget(),this.errors.tags||(this.target.tags[this.target.currentTagKey]=this.target.currentTagValue,this.target.currentTagKey="",this.target.currentTagValue="",this.targetBlur()),this.addTagMode=!1):this.addTagMode=!0}},{key:"removeTag",value:function(t){delete this.target.tags[t],this.targetBlur()}},{key:"editTag",value:function(t,e){this.removeTag(t),this.target.currentTagKey=t,this.target.currentTagValue=e,this.addTag()}},{key:"closeAddTagMode",value:function(){this.addTagMode=!1}},{key:"addFilter",value:function(){if(this.target.tags&&o.a.size(this.target.tags)>0&&(this.errors.filters="Please remove tags to use filters, tags and filters are mutually exclusive."),this.addFilterMode){if(this.target.filters||(this.target.filters=[]),this.target.currentFilterType||(this.target.currentFilterType="iliteral_or"),this.target.currentFilterGroupBy||(this.target.currentFilterGroupBy=!1),this.errors=this.validateTarget(),!this.errors.filters){var t={type:this.target.currentFilterType,tagk:this.target.currentFilterKey,filter:this.target.currentFilterValue,groupBy:this.target.currentFilterGroupBy};this.target.filters.push(t),this.target.currentFilterType="literal_or",this.target.currentFilterKey="",this.target.currentFilterValue="",this.target.currentFilterGroupBy=!1,this.targetBlur()}this.addFilterMode=!1}else this.addFilterMode=!0}},{key:"removeFilter",value:function(t){this.target.filters.splice(t,1),this.targetBlur()}},{key:"editFilter",value:function(t,e){this.removeFilter(e),this.target.currentFilterKey=t.tagk,this.target.currentFilterValue=t.filter,this.target.currentFilterType=t.type,this.target.currentFilterGroupBy=t.groupBy,this.addFilter()}},{key:"closeAddFilterMode",value:function(){this.addFilterMode=!1}},{key:"validateTarget",value:function(){var t={};if(this.target.shouldDownsample)try{this.target.downsampleInterval?s.rangeUtil.describeInterval(this.target.downsampleInterval):t.downsampleInterval="You must supply a downsample interval (e.g. '1m' or '1h')."}catch(e){t.downsampleInterval=e.message}return this.target.tags&&o.a.has(this.target.tags,this.target.currentTagKey)&&(t.tags="Duplicate tag key '"+this.target.currentTagKey+"'."),t}}])&&T(r.prototype,a),n&&T(r,n),e}(r("LzXI").QueryCtrl);j.templateUrl="partials/query.editor.html";var P=r("q1tI"),S=r.n(P),_=r("kDLi");function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){V(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function V(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var E=_.LegacyForms.Select,x=_.LegacyForms.Input,M=[{label:"<=2.1",value:1},{label:"==2.2",value:2},{label:"==2.3",value:3}],C=[{label:"second",value:1},{label:"millisecond",value:2}],L=function(t){var e,r,a,n=t.onChange,i=t.value;return S.a.createElement(S.a.Fragment,null,S.a.createElement("h5",null,"OpenTSDB settings"),S.a.createElement("div",{className:"gf-form"},S.a.createElement(_.InlineFormLabel,{width:7},"Version"),S.a.createElement(E,{options:M,value:null!==(e=M.find((function(t){return t.value===i.jsonData.tsdbVersion})))&&void 0!==e?e:M[0],onChange:R("tsdbVersion",i,n)})),S.a.createElement("div",{className:"gf-form"},S.a.createElement(_.InlineFormLabel,{width:7},"Resolution"),S.a.createElement(E,{options:C,value:null!==(r=C.find((function(t){return t.value===i.jsonData.tsdbResolution})))&&void 0!==r?r:C[0],onChange:R("tsdbResolution",i,n)})),S.a.createElement("div",{className:"gf-form"},S.a.createElement(_.InlineFormLabel,{width:7},"Lookup Limit"),S.a.createElement(x,{type:"number",value:null!==(a=i.jsonData.lookupLimit)&&void 0!==a?a:1e3,onChange:K("lookupLimit",i,n)})))},R=function(t,e,r){return function(a){r(D({},e,{jsonData:D({},e.jsonData,V({},t,a.value))}))}},K=function(t,e,r){return function(a){r(D({},e,{jsonData:D({},e.jsonData,V({},t,a.currentTarget.value))}))}};r.d(e,"plugin",(function(){return Q}));var B=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)};B.templateUrl="partials/annotations.editor.html";var Q=new s.DataSourcePlugin(v).setQueryCtrl(j).setConfigEditor((function(t){var e=t.options,r=t.onOptionsChange;return S.a.createElement(S.a.Fragment,null,S.a.createElement(_.DataSourceHttpSettings,{defaultUrl:"http://localhost:4242",dataSourceConfig:e,onChange:r}),S.a.createElement(L,{value:e,onChange:r}))})).setAnnotationQueryCtrl(B)}}]);
//# sourceMappingURL=opentsdbPlugin.ddf7518003180e1ca7bc.js.map