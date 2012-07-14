/**
 * Controls the set up of the client websocket and renders the specified game
 * room to the current HTML page.
 *
 * TODO: Replace with a backbone route
 */
define([
    'app',
    'models/room',
    'views/room'
], function(App, Room, RoomView){
    return function(roomName){
        App.socket = io.connect();

        App.socket.on('error', App.error);

        App.socket.on('connect', function(){
            var view = new RoomView({model: new Room.Model(), el: $('body')});
            view.model.fetch({
                name: roomName,
                success: function(room){
                    room.players.fetch({room: room.id});
                }
            });
        });
    };
});
