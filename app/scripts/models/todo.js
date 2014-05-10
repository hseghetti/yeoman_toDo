/*global YeomanToDo, Backbone*/

YeomanToDo.Models = YeomanToDo.Models || {};

(function () {
    'use strict';

    YeomanToDo.Models.Todo = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
