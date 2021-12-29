/**
 * skylark-domx-plugins-base - The skylark plugins library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns","skylark-langx-types","skylark-langx-objects","skylark-langx-funcs","skylark-langx-events/Emitter","skylark-domx-noder","skylark-domx-data","skylark-domx-eventer","skylark-domx-finder","skylark-domx-geom","skylark-domx-styler","skylark-domx-fx","skylark-domx-query","skylark-domx-velm","skylark-domx","./plugins"],function(t,i,n,e,s,r,o,l,a,u,h,p,m,y,c,f){"use strict";Array.prototype.slice,Array.prototype.concat;function k(t){return t.hasOwnProperty("superclass")?t.superclass:Object.getPrototypeOf(t)}var d=s.inherit({klassName:"Plugin",_domx:c,_construct:function(t,i){this._elm=t,this._initOptions(i)},_initOptions:function(t){var i=this.constructor,e=i.cache=i.hasOwnProperty("cache")?i.cache:{},s=e.defaults;if(!s){var r=[];do{if(r.unshift(i),i===d)break;i=k(i)}while(i);s=e.defaults={};for(var o=0;o<r.length;o++)(i=r[o]).prototype.hasOwnProperty("options")&&n.mixin(s,i.prototype.options,!0),i.hasOwnProperty("options")&&n.mixin(s,i.options,!0)}return Object.defineProperty(this,"options",{value:n.mixin({},s,t,!0)}),this.options},destroy:function(){this._destroy(),this.unlistenTo(),o.removeData(this._elm,this.pluginName)},_destroy:e.noop,_delay:function(t,i){var n=this;return setTimeout(function(){return("string"==typeof t?n[t]:t).apply(n,arguments)},i||0)},elmx:function(t){return t?y(t):(this._velm||(this._velm=y(this._elm)),this._velm)},$:function(t){return t?m(t,this._elm):(this._$elm||(this._$elm=m(this._elm)),this._$elm)},option:function(t,i){var e,s,r,o=t;if(0===arguments.length)return n.mixin({},this.options);if("string"==typeof t)if(o={},t=(e=t.split(".")).shift(),e.length){for(s=o[t]=n.mixin({},this.options[t]),r=0;r<e.length-1;r++)s[e[r]]=s[e[r]]||{},s=s[e[r]];if(t=e.pop(),1===arguments.length)return void 0===s[t]?null:s[t];s[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(t){var i;for(i in t)this._setOption(i,t[i]);return this},_setOption:function(t,i){return this.options[t]=i,this},getUID:function(t){t=t||"plugin";do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},elm:function(){return this._elm},ensureListenedEmitter:m,listenTo:function(t,n,e,r,o){return(i.isString(t)||i.isArray(t)||i.isPlainObject(t))&&(o=r,r=e,e=n,n=t,t=this._elm),s.prototype.listenTo.call(this,t,n,e,r,o)},unlistenTo:function(t,n,e){return(i.isString(t)||i.isArray(t)||i.isPlainObject(t))&&(e=n,n=t,t=this._elm),s.prototype.unlistenTo.call(this,t,n,e)}});return f.Plugin=d});
//# sourceMappingURL=sourcemaps/plugin.js.map
