define([
    "skylark-langx-types",
    "./plugins",
    "./instantiate"
], function(
    types,
    plugins,
    instantiate
) {
    "use strict";

    var slice = Array.prototype.slice;

    function shortcutter(pluginName,extfn) {
       /*
        * Create or get or destory a plugin instance assocated with the element,
        * and also you can execute the plugin method directory;
        */
        return function (elm,options) {
            var  plugin = instantiate(elm, pluginName,"instance");
            if ( options === "instance" ) {
              return plugin || null;
            }

            if (!plugin) {
                plugin = instantiate(elm, pluginName,typeof options == 'object' && options || {});
                if (typeof options != "string") {
                  return this;
                }
            } 
            if (options) {
                var args = slice.call(arguments,1); //2
                if (extfn) {
                    return extfn.apply(plugin,args);
                } else {
                    if (typeof options == 'string') {
                        var methodName = options;

                        if ( !plugin ) {
                            throw new Error( "cannot call methods on " + pluginName +
                                " prior to initialization; " +
                                "attempted to call method '" + methodName + "'" );
                        }

                        if ( !types.isFunction( plugin[ methodName ] ) || methodName.charAt( 0 ) === "_" ) {
                            throw new Error( "no such method '" + methodName + "' for " + pluginName +
                                " plugin instance" );
                        }

                        args = slice.call(args,1); //remove method name

                        var ret = plugin[methodName].apply(plugin,args);
                        if (ret == plugin) {
                          ret = undefined;
                        }

                        return ret;
                    }                
                }                
            }

        }

    }


    return  plugins.shortcutter = shortcutter;
});