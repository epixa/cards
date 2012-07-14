// Allows underscore to be loaded as an amd module
// This assumes the underscore library has already been included
if (!window._) {
    throw "Underscore must be included prior to being loaded as an AMD module";
}
define(function(){
    return window._;
});
