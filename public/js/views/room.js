/**
 * Handles presentation logic for a room model
 *
 * Whenever the room details change, the view is re-rendered.
 */
define([
    'backbone',
    'views/players',
    'text!templates/room.html'
], function(Backbone, PlayersView, template){
    return Backbone.View.extend({
        initialize: function(){
            this.model.on('change', this.render, this);
        },

        render: function(){
            var compiledTemplate = _.template(template, {room: this.model});
            this.$el.html(compiledTemplate);

            new PlayersView({collection: this.model.players, el: this.$('#players')});
            return this;
        }
    });
});
