/**
 * skylark-domx-plugins-base - The skylark plugins library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-domx-data","./plugins","./plugin"],function(t,e,n){"use strict";var i=e.pluginKlasses;function r(e,n,r){var s=n.split(":"),a=s[1];n=s[0],a||(a=n);var o=t.data(e,a);if("instance"===r)return o;if("destroy"===r){if(!o)throw new Error("The plugin instance is not existed");o.destroy(),o=void 0}else if(o)r&&o.reset(r);else{if(void 0!==r&&"object"!=typeof r)throw new Error("The options must be a plain object");o=new(0,i[n])(e,r),t.data(e,a,o)}return o}return n.instantiate=function(t,e){return r(t,this.prototype.pluginName,e)},e.instantiate=r});
//# sourceMappingURL=sourcemaps/instantiate.js.map
