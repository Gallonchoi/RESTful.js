/*********************************************************************
 *   Filename:    restful.js
 *   Version:     0.0.1
 *
 *   Description: a RESTful api for javascript
 *
 *   Author:      Gallon Choi <GallonQ@gmail.com>
 *   GitHub:      https://github.com/Gallonchoi/RESTful.js
 *   Status:      Experimental, do not distribute.
 *
 ********************************************************************/
"use strict";
var restAPI = {
    bind: function(selector, success, error) {
        this._rest(selector, success, error);
    },
    bindAll: function(success, error) {
        this._rest('form.restful', success, error);
    },
    _rest: function(selector, success, error) {
        var self = this;
        $(selector).submit(function() {
            var action = $(this).data('action');
            var method = $(this).data('method');
            var data = $(this).serializeArray();
            $.ajax({
                url: action,
                type: method,
                data: data,
                success: function(res) {
                    if(self._isFunction(success)) {
                        success(res);
                    }
                },
                error: function(res) {
                    if(self._isFunction(error)) {
                        error(res);
                    }
                },
                dataType: 'json'
            });
            return false;
        });
    },
    _isFunction: function(fun) {
        return typeof(fun) === 'function';
    }
};
