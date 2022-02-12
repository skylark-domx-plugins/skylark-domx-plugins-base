/**
 * skylark-domx-plugins-base - The skylark plugins library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-domx-data","./plugins","./plugin"],function(t,e,n){"use strict";var i=e.pluginKlasses;function r(e,n,r,s,a,o,u,l){var p=n.split(":"),d=p[1];n=p[0],d||(d=n);var f=t.data(e,d);if("instance"===r)return f;if("destroy"===r){if(!f)throw new Error("The plugin instance is not existed");f.destroy(),f=void 0}else if(f)r&&f.reset(r);else{if(void 0!==r&&"object"!=typeof r)throw new Error("The options must be a plain object");f=new(0,i[n])(e,r,s,a,o,u,l),t.data(e,d,f)}return f}return n.instantiate=function(t,e){return r(t,this.prototype.pluginName,e)},e.instantiate=r});
//# sourceMappingURL=sourcemaps/instantiate.js.map
