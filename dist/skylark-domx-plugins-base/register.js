/**
 * skylark-domx-plugins-base - The skylark plugins library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","skylark-domx-query","skylark-domx-velm","./plugins","./shortcutter"],function(t,i,r,n,s){"use strict";var e=Array.prototype.slice,a=n.pluginKlasses,l=n.shortcuts;return n.register=function(n,o,u,c){var v=n.prototype.pluginName;if(a[v]=n,o){u&&t.isFunction(u)&&(c=u,u=null),u&&(v=v+":"+u);var h=l[o]=s(v,c);i.fn[o]=function(t){var i=this;if(this.length||"instance"!==t){var r=e.call(arguments);this.each(function(){var t=e.call(r);t.unshift(this);var n=h.apply(void 0,t);void 0!==n&&(i=n)})}else i=void 0;return i},r.partial(o,function(t){var i=h(this._elm,t);return void 0===i&&(i=this),i})}}});
//# sourceMappingURL=sourcemaps/register.js.map
