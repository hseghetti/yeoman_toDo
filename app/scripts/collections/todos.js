/*global YeomanToDo, Backbone*/

YeomanToDo.Collections = YeomanToDo.Collections || {};

(function () {
    'use strict';

    YeomanToDo.Collections.Todos = Backbone.Collection.extend({

        model: YeomanToDo.Models.Todos

    });

})();
