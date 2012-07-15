define([
    'models/realtime'
], function(RealtimeModel){
    return RealtimeModel.extend({
        context: 'Player',
        idAttribute: '_id'
    });
});
