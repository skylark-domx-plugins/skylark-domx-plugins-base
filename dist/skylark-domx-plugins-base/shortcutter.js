/**
 * skylark-domx-plugins-base - The skylark plugins library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./plugins","./instantiate"],function(t,r,n){"use strict";var i=Array.prototype.slice;return r.shortcutter=function(r,e){return function(o,a){var c=n(o,r,"instance");if("instance"===a)return c||null;if(!c&&(c=n(o,r,"object"==typeof a&&a||{}),"string"!=typeof a))return this;if(a){var l=i.call(arguments,1);if(e)return e.apply(c,l);if("string"==typeof a){var s=a;if(!c)throw new Error("cannot call methods on "+r+" prior to initialization; attempted to call method '"+s+"'");if(!t.isFunction(c[s])||"_"===s.charAt(0))throw new Error("no such method '"+s+"' for "+r+" plugin instance");l=i.call(l,1);var u=c[s].apply(c,l);return u==c&&(u=void 0),u}}}}});
//# sourceMappingURL=sourcemaps/shortcutter.js.map
