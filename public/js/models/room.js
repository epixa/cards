/**
 * The game room
 *
 * Game rooms are the unique endpoints that you use to play games with a group
 * friends. The game that is currently being played within a room can be
 * changed by the players at any time, and there can be any number of players
 * within the game room at any given time (this will likely change).
 *
 * Each room also keeps track of its associated web socket namespace.
 */
define([
    'app',
    'models/realtime',
    'collections/player'
], function(App, RealtimeModel, Players){
    return RealtimeModel.extend({
        context: 'Room',
        idAttribute: '_id',
        players: new Players()
    });
});
