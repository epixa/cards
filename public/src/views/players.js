/**
 * Handles presentation logic for a players collection
 *
 * Whenever a new player is added or removed to the collection, the entire
 * template is re-rendered.
 */
define(function(){
    return Backbone.View.extend({
        initialize: function(){
            this.collection.on('reset', this.render, this);
            this.collection.on('add', this.render, this);
            this.collection.on('remove', this.render, this);
        },

        render: function(){
            console.log('PlayersView.render', this.collection);
            return this;
        }
    });
});
