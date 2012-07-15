/**
 * Base for all collections that synchronize through socket io
 *
 * Any collection extending this must have a model defined that itself has a
 * context property defined.
 *
 * The backend should listen for the collection:sync socket.io event in order
 * to handle any changes that are synchronized.
 */
define([
    'backbone',
    'app'
], function(Backbone, App){
    return Backbone.Collection.extend({
        sync: function(method, collection, options) {
            var data = collection.toJSON();
            var context = collection.model.prototype.context;

            return App.socket.emit('collection:sync', method, context, data, function(error, data){
                if (error) {
                    console.error(error);
                    options['error'](error);
                    return;
                }
                options['success'](data);
            });
        }
    });
});
