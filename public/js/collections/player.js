define([
    'collections/realtime',
    'models/player'
], function(RealtimeCollection, Player){
    return RealtimeCollection.extend({
        model: Player
    });
});
