var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
    return window._; //Underscore should be loaded on the page
});