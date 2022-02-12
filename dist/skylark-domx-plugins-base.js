/**
 * skylark-domx-plugins-base - The skylark plugins library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,n){var e=n.define,require=n.require,i="function"==typeof e&&e.amd,r=!i&&"undefined"!=typeof exports;if(!i&&!e){var s={};e=n.define=function(t,n,e){"function"==typeof e?(s[t]={factory:e,deps:n.map(function(n){return function(t,n){if("."!==t[0])return t;var e=n.split("/"),i=t.split("/");e.pop();for(var r=0;r<i.length;r++)"."!=i[r]&&(".."==i[r]?e.pop():e.push(i[r]));return e.join("/")}(n,t)}),resolved:!1,exports:null},require(t)):s[t]={factory:null,resolved:!0,exports:e}},require=n.require=function(t){if(!s.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=s[t];if(!module.resolved){var e=[];module.deps.forEach(function(t){e.push(require(t))}),module.exports=module.factory.apply(n,e)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-domx-plugins-base/plugins",["skylark-langx-ns"],function(t){"use strict";return t.attach("domx.plugins",{pluginKlasses:{},shortcuts:{}})}),t("skylark-langx-events/Emitter",["skylark-langx-types","skylark-langx-objects","skylark-langx-arrays","skylark-langx-klass","./events","./event","./listener"],function(t,n,e,i,r,s,o){var a=Array.prototype.slice,l=e.compact,u=t.isDefined,p=t.isPlainObject,c=t.isFunction,h=t.isString,f=(t.isEmptyObject,n.mixin);n.safeMixin;function y(t){var n=(""+t).split(".");return{name:n[0],ns:n.slice(1).join(" ")}}var d=new Map,m=o.inherit({_prepareArgs:function(t,n){return n=u(n)?[t].concat(n):[t]},on:function(t,n,e,i,r,s){var o=this,a=this._hub||(this._hub={});if(p(t))return r=i,each(t,function(t,i){o.on(t,n,e,i,r,s)}),this;if(h(n)||c(i)||(r=i,i=e,e=n,n=void 0),c(e)&&(r=i,i=e,e=null),!i)throw new Error("No callback function");if(!c(i))throw new Error("The callback  is not afunction");return h(t)&&(t=t.split(/\s/)),t.forEach(function(t){var o=y(t),l=o.name,u=o.ns;(a[l]||(a[l]=[])).push({fn:i,selector:n,data:e,ctx:r,ns:u,one:s})}),this},one:function(t,n,e,i,r){return this.on(t,n,e,i,r,1)},emit:function(t){if(!this._hub)return this;var n=this;h(t)&&(t=new s(t)),Object.defineProperty(t,"target",{value:this});var e=a.call(arguments,1);return e=this._prepareArgs(t,e),[t.type||t.name,"all"].forEach(function(i){var r=y(i),s=r.name,o=r.ns,a=n._hub[s];if(a){for(var u=a.length,c=!1,h=0;h<u;h++){if(t.isImmediatePropagationStopped&&t.isImmediatePropagationStopped())return this;var d=a[h];(!o||d.ns&&d.ns.startsWith(o))&&(d.data&&(t.data=f({},d.data,t.data)),2==e.length&&p(e[1])&&(t.data=t.data||{},f(t.data,e[1])),d.fn.apply(d.ctx,e),d.one&&(a[h]=null,c=!0))}c&&(n._hub[i]=l(a))}}),this},queueEmit:function(t){const n=t.type||t;let e=d.get(this);e||(e=new Map,d.set(this,e));const i=e.get(n);e.delete(n),window.clearTimeout(i);const r=window.setTimeout(()=>{0===e.size&&(e=null,d.delete(this)),this.trigger(t)},0);e.set(n,r)},listened:function(t){var n=(this._hub||(this._events={}))[t]||[];return n.length>0},off:function(t,n){if(t){var e=this._hub||(this._hub={});return h(t)&&(t=t.split(/\s/)),t.forEach(function(t){var i=y(t),r=i.name,s=i.ns,o=e[r];if(o){var a=[];if(n||s)for(var l=0,u=o.length;l<u;l++)n&&o[l].fn!==n&&o[l].fn._!==n?a.push(o[l]):!s||o[l].ns&&0==o[l].ns.indexOf(s)||a.push(o[l]);a.length?e[r]=a:delete e[r]}}),this}this._hub=null},trigger:function(){return this.emit.apply(this,arguments)},queueTrigger:function(t){return this.queueEmit.apply(this,arguments)}});return r.Emitter=m}),t("skylark-domx-plugins-base/plugin",["skylark-langx-ns","skylark-langx-types","skylark-langx-objects","skylark-langx-funcs","skylark-langx-events/Emitter","skylark-domx-noder","skylark-domx-data","skylark-domx-eventer","skylark-domx-finder","skylark-domx-geom","skylark-domx-styler","skylark-domx-fx","skylark-domx-query","skylark-domx-velm","skylark-domx","./plugins"],function(t,n,e,i,r,s,o,a,l,u,p,c,h,f,y,d){"use strict";Array.prototype.slice,Array.prototype.concat;function m(t){return t.hasOwnProperty("superclass")?t.superclass:Object.getPrototypeOf(t)}var g=r.inherit({klassName:"Plugin",_domx:y,_construct:function(t,n){this._elm=t,this._initOptions(n)},_initOptions:function(t){var n=this.constructor,i=n.cache=n.hasOwnProperty("cache")?n.cache:{},r=i.defaults;if(!r){var s=[];do{if(s.unshift(n),n===g)break;n=m(n)}while(n);r=i.defaults={};for(var o=0;o<s.length;o++)(n=s[o]).prototype.hasOwnProperty("options")&&e.mixin(r,n.prototype.options,!0),n.hasOwnProperty("options")&&e.mixin(r,n.options,!0)}return Object.defineProperty(this,"options",{value:e.mixin({},r,t,!0)}),this.options},destroy:function(){this._destroy(),this.unlistenTo(),o.removeData(this._elm,this.pluginName)},_destroy:i.noop,_delay:function(t,n){var e=this;return setTimeout(function(){return("string"==typeof t?e[t]:t).apply(e,arguments)},n||0)},elmx:function(t){return t?f(t):(this._velm||(this._velm=f(this._elm)),this._velm)},$:function(t){return t?h(t,this._elm):(this._$elm||(this._$elm=h(this._elm)),this._$elm)},option:function(t,n){var i,r,s,o=t;if(0===arguments.length)return e.mixin({},this.options);if("string"==typeof t)if(o={},i=t.split("."),t=i.shift(),i.length){for(r=o[t]=e.mixin({},this.options[t]),s=0;s<i.length-1;s++)r[i[s]]=r[i[s]]||{},r=r[i[s]];if(t=i.pop(),1===arguments.length)return void 0===r[t]?null:r[t];r[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=n}return this._setOptions(o),this},_setOptions:function(t){var n;for(n in t)this._setOption(n,t[n]);return this},_setOption:function(t,n){return this.options[t]=n,this},getUID:function(t){t=t||"plugin";do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},elm:function(){return this._elm},ensureListenedEmitter:function(t){return t.on?t:h(t)},listenTo:function(t,e,i,s,o){return(n.isString(t)||n.isArray(t)||n.isPlainObject(t))&&(o=s,s=i,i=e,e=t,t=this._elm),r.prototype.listenTo.call(this,t,e,i,s,o)},unlistenTo:function(t,e,i){return(n.isString(t)||n.isArray(t)||n.isPlainObject(t))&&(i=e,e=t,t=this._elm),r.prototype.unlistenTo.call(this,t,e,i)}});return d.Plugin=g}),t("skylark-domx-plugins-base/instantiate",["skylark-domx-data","./plugins","./plugin"],function(t,n,e){"use strict";var i=n.pluginKlasses;function r(n,e,r,s,o,a,l,u){var p=e.split(":"),c=p[1];e=p[0],c||(c=e);var h=t.data(n,c);if("instance"===r)return h;if("destroy"===r){if(!h)throw new Error("The plugin instance is not existed");h.destroy(),h=void 0}else if(h)r&&h.reset(r);else{if(void 0!==r&&"object"!=typeof r)throw new Error("The options must be a plain object");var f=i[e];h=new f(n,r,s,o,a,l,u),t.data(n,c,h)}return h}return e.instantiate=function(t,n){return r(t,this.prototype.pluginName,n)},n.instantiate=r}),t("skylark-domx-plugins-base/shortcutter",["skylark-langx-types","./plugins","./instantiate"],function(t,n,e){"use strict";var i=Array.prototype.slice;return n.shortcutter=function(r,s){return function(o,a){var l=e(o,r,"instance");if("instance"===a)return l||null;if(!l){let t=i.call(arguments,2);if(t.unshift(o,r,"object"==typeof a&&a||{}),l=e.apply(n,t),"string"!=typeof a)return this}if(a){let n=i.call(arguments,1);if(s)return s.apply(l,n);if("string"==typeof a){var u=a;if(!l)throw new Error("cannot call methods on "+r+" prior to initialization; attempted to call method '"+u+"'");if(!t.isFunction(l[u])||"_"===u.charAt(0))throw new Error("no such method '"+u+"' for "+r+" plugin instance");n=i.call(n,1);var p=l[u].apply(l,n);return p==l&&(p=void 0),p}}}}}),t("skylark-domx-plugins-base/register",["skylark-langx-types","skylark-domx-query","skylark-domx-velm","./plugins","./shortcutter"],function(t,n,e,i,r){"use strict";var s=Array.prototype.slice,o=i.pluginKlasses,a=i.shortcuts;return i.register=function(i,l,u,p){var c=i.prototype.pluginName;if(o[c]=i,l){u&&t.isFunction(u)&&(p=u,u=null),u&&(c=c+":"+u);var h=a[l]=r(c,p);n.fn[l]=function(t){var n=this;if(this.length||"instance"!==t){var e=s.call(arguments);this.each(function(){var t=s.call(e);t.unshift(this);var i=h.apply(void 0,t);void 0!==i&&(n=i)})}else n=void 0;return n},e.partial(l,function(t){var n=h(this._elm,t);return void 0===n&&(n=this),n})}}}),t("skylark-domx-plugins-base/main",["skylark-domx-query","skylark-domx-velm","./plugins","./instantiate","./plugin","./register","./shortcutter"],function(t,n,e,i,r,s,o){"use strict";var a=Array.prototype.slice;return t.fn.plugin=function(t,n){var e,r=a.call(arguments,1),s=this;return this.each(function(){e=i.apply(s,[this,t].concat(r))}),e},n.partial("plugin",function(t,n){var e=a.call(arguments,1);return i.apply(this,[this._elm,t].concat(e))}),e}),t("skylark-domx-plugins-base",["skylark-domx-plugins-base/main"],function(t){return t})}(e),!i){var o=require("skylark-langx-ns");r?module.exports=o:n.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-plugins-base.js.map
