require.config({
    paths: {
        jquery: 'libraries/jquery/jquery',
        underscore: 'libraries/underscore/underscore.amd',
        backbone: 'libraries/backbone/backbone.amd',
        text: 'libraries/require/text',
        templates: '../templates'
    }
});

define([
    'jquery',
    'backbone',
    'app',
    'models/room',
    'views/room'
], function($, Backbone, App, Room, RoomView){
    // jquery is being loaded as an AMD module, so it was not available when backbone was first loaded
    Backbone.setDomLibrary($);

    var router = new Backbone.Router;
    router.route('room/:name', 'room', function(name){
        App.socket = io.connect();

        App.socket.on('error', App.error);

        App.socket.on('connect', function(){
            var view = new RoomView({model: new Room.Model(), el: $('body')});
            view.model.fetch({
                name: name,
                success: function(room){
                    room.players.fetch({room: room.id});
                }
            });
        });
    });
    Backbone.history.start({pushState: true});
});
