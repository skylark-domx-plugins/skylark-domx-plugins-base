/**
 * skylark-domx-plugins-base - The skylark plugins library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./plugins","./instantiate"],function(t,n,r){"use strict";var i=Array.prototype.slice;return n.shortcutter=function(e,o){return function(a,l){var c=r(a,e,"instance");if("instance"===l)return c||null;if(!c){let t=i.call(arguments,2);if(t.unshift(a,e,"object"==typeof l&&l||{}),c=r.apply(n,t),"string"!=typeof l)return this}if(l){let n=i.call(arguments,1);if(o)return o.apply(c,n);if("string"==typeof l){var s=l;if(!c)throw new Error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'");if(!t.isFunction(c[s])||"_"===s.charAt(0))throw new Error("no such method '"+s+"' for "+e+" plugin instance");n=i.call(n,1);var f=c[s].apply(c,n);return f==c&&(f=void 0),f}}}}});
//# sourceMappingURL=sourcemaps/shortcutter.js.map
