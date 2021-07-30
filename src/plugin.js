define([
    "skylark-langx-ns",
    "skylark-langx-types",
    "skylark-langx-objects",
    "skylark-langx-funcs",
    "skylark-langx-events/Emitter",
    "skylark-domx-noder",
    "skylark-domx-data",
    "skylark-domx-eventer",
    "skylark-domx-finder",
    "skylark-domx-geom",
    "skylark-domx-styler",
    "skylark-domx-fx",
    "skylark-domx-query",
    "skylark-domx-velm",
    "./plugins"
], function(
    skylark,
    types,
    objects,
    funcs,
    Emitter, 
    noder, 
    datax, 
    eventer, 
    finder, 
    geom, 
    styler, 
    fx, 
    $, 
    elmx,
    plugins
) {
    "use strict";

    var slice = Array.prototype.slice,
        concat = Array.prototype.concat;

    function parentClass(ctor){
        if (ctor.hasOwnProperty("superclass")) {
            return ctor.superclass;
        }

        return Object.getPrototypeOf(ctor);
    }

 
    var Plugin =   Emitter.inherit({
        klassName: "Plugin",

        _construct : function(elm,options) {
           this._elm = elm;
           this._initOptions(options);
        },

        _initOptions : function(options) {
          var ctor = this.constructor,
              cache = ctor.cache = (ctor.hasOwnProperty("cache") ? ctor.cache : {}),
              defaults = cache.defaults;
          if (!defaults) {
            var  ctors = [];
            do {
              ctors.unshift(ctor);
              if (ctor === Plugin) {
                break;
              }
              ctor = parentClass(ctor);
            } while (ctor);

            defaults = cache.defaults = {};
            for (var i=0;i<ctors.length;i++) {
              ctor = ctors[i];
              if (ctor.prototype.hasOwnProperty("options")) {
                objects.mixin(defaults,ctor.prototype.options,true);
              }
              if (ctor.hasOwnProperty("options")) {
                objects.mixin(defaults,ctor.options,true);
              }
            }
          }
          Object.defineProperty(this,"options",{
            value :objects.mixin({},defaults,options,true)
          });

          //return this.options = langx.mixin({},defaults,options);
          return this.options;
        },


        destroy: function() {

            this._destroy();

            // remove all event lisener
            this.unlistenTo();
            // remove data 
            datax.removeData(this._elm,this.pluginName );
        },

        _destroy: funcs.noop,

        _delay: function( handler, delay ) {
            function handlerProxy() {
                return ( typeof handler === "string" ? instance[ handler ] : handler )
                    .apply( instance, arguments );
            }
            var instance = this;
            return setTimeout( handlerProxy, delay || 0 );
        },

        elmx : function(elm) {
            if (elm) {
                return elmx(elm);
            }
            if (!this._velm) {
                this._velm = elmx(this._elm);
            }
            return this._velm;
        },

        $ : function(elm) {
            if (elm) {
                return $(elm,this._elm);
            }
            if (!this._$elm) {
                this._$elm = $(this._elm);
            }            
            return this._$elm;
        },

        option: function( key, value ) {
            var options = key;
            var parts;
            var curOption;
            var i;

            if ( arguments.length === 0 ) {

                // Don't return a reference to the internal hash
                return objects.mixin( {}, this.options );
            }

            if ( typeof key === "string" ) {

                // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split( "." );
                key = parts.shift();
                if ( parts.length ) {
                    curOption = options[ key ] = objects.mixin( {}, this.options[ key ] );
                    for ( i = 0; i < parts.length - 1; i++ ) {
                        curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
                        curOption = curOption[ parts[ i ] ];
                    }
                    key = parts.pop();
                    if ( arguments.length === 1 ) {
                        return curOption[ key ] === undefined ? null : curOption[ key ];
                    }
                    curOption[ key ] = value;
                } else {
                    if ( arguments.length === 1 ) {
                        return this.options[ key ] === undefined ? null : this.options[ key ];
                    }
                    options[ key ] = value;
                }
            }

            this._setOptions( options );

            return this;
        },

        _setOptions: function( options ) {
            var key;

            for ( key in options ) {
                this._setOption( key, options[ key ] );
            }

            return this;
        },

        _setOption: function( key, value ) {

            this.options[ key ] = value;

            return this;
        },

        getUID : function (prefix) {
            prefix = prefix || "plugin";
            do prefix += ~~(Math.random() * 1000000)
            while (document.getElementById(prefix))
            return prefix;
        },

        elm : function() {
            return this._elm;
        }

    });


    return  plugins.Plugin = Plugin;
});