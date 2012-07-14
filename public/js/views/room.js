/**
 * Handles presentation logic for a room model
 *
 * Whenever the room details change, the view is re-rendered.
 */
define([
    'backbone',
    'views/players'
], function(Backbone, PlayersView){
    return Backbone.View.extend({
        views: {},

        initialize: function(){
            this.model.on('change', this.render, this);
            this.views.players = new PlayersView({collection: this.model.players});
            this.views.players.el = this.$('#players');
        },

        render: function(){
            console.log('RoomView.render', this.model);
            return this;
        }
    });
});
