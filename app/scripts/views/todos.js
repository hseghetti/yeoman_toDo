/*global YeomanToDo, Backbone, JST*/

YeomanToDo.Views = YeomanToDo.Views || {};

(function () {
    'use strict';

    YeomanToDo.Views.Todos = Backbone.View.extend({

        template: JST['app/scripts/templates/todos.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
