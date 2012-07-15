define([
    'models/realtime'
], function(RealtimeModel){
    return RealtimeModel.extend({
        context: 'Game',
        idAttribute: '_id'
    });
});
