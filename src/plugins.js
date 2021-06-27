define([
    "skylark-langx-ns"
], function(skylark) {
    "use strict";

    var pluginKlasses = {},
        shortcuts = {};


    return  skylark.attach("domx.plugins",{
        pluginKlasses,
        shortcuts
    });
});