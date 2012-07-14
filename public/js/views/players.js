/**
 * Handles presentation logic for a players collection
 *
 * Whenever a new player is added or removed to the collection, the entire
 * template is re-rendered.
 */
define([
    'backbone',
    'text!templates/players.html'
], function(Backbone, template){
    return Backbone.View.extend({
        initialize: function(){
            this.collection.on('reset', this.render, this);
            this.collection.on('add', this.render, this);
            this.collection.on('remove', this.render, this);
        },

        render: function(){
            var compiledTemplate = _.template(template, {players: this.collection});
            this.$el.html(compiledTemplate);
            return this;
        }
    });
});
