// Allows backbone to be loaded as an amd module
// This assumes the backbone library has already been included
if (!window.Backbone) {
    throw "Backbone must be included prior to being loaded as an AMD module";
}
define(function(){
    return window.Backbone;
});
