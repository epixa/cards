/**
 * Base for all models that synchronize through socket io
 *
 * Any model extending this must specify a property called "context" which is
 * passed along to the backend to identify what type of data is being modified.
 *
 * The backend should listen for the model:sync socket.io event in order to
 * handle any changes that are synchronized.
 */
define([
    'backbone',
    'app'
], function(Backbone, App){
    return Backbone.Model.extend({
        sync: function(method, model, options) {
            var data = {};
            var context = model.context;

            if (model.isNew()) {
                data = model.toJSON();
            } else if (model.hasChanged()) {
                data = model.changedAttributes();
            }

            return App.socket.emit('model:sync', method, context, data, function(error, data){
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
