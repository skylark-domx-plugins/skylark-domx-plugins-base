/**
 * skylark-domx-plugins-base - The skylark plugins library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-domx-query","skylark-domx-velm","./plugins","./instantiate","./plugin","./register","./shortcutter"],function(t,n,r,i,a,e,l){"use strict";var c=Array.prototype.slice;return t.fn.plugin=function(t,n){var r,a=c.call(arguments,1),e=this;return this.each(function(){r=i.apply(e,[this,t].concat(a))}),r},n.partial("plugin",function(t,n){var r=c.call(arguments,1);return i.apply(this,[this._elm,t].concat(r))}),r});
//# sourceMappingURL=sourcemaps/main.js.map
