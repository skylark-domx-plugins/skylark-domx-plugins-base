define([
    "skylark-domx-query",
    "skylark-domx-velm",
	"./plugins",
	"./instantiate",
	"./plugin",
	"./register",
	"./shortcutter"
],function($,elmx,plugins,instantiate,Plugin,register,shortcutter){
    "use strict";

    var slice = Array.prototype.slice;

    $.fn.plugin = function(name,options) {
        var args = slice.call( arguments, 1 ),
            self = this,
            returnValue ;

        this.each(function(){
            returnValue = instantiate.apply(self,[this,name].concat(args));
        });
        return returnValue;
    };

    elmx.partial("plugin",function(name,options) {
        var args = slice.call( arguments, 1 );
        return instantiate.apply(this,[this._elm,name].concat(args));
    }); 

	return plugins;
});