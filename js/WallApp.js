var wall;
(function (wall) {
    'use strict';
    var wallApp = angular.module('wall', [
        'ngResource'
    ]).directive('masonry', wall.MasonryDirective.prototype.injection()).directive('masonryItem', wall.MasonryItemDirective.prototype.injection()).directive('whenScrolled', wall.WhenScrolledDirective.prototype.injection()).filter('desactivateTopic', wall.DesactivateTopicFilter.prototype.injection()).service('flickrServices', wall.FlickrServices.prototype.injection()).controller('wallAppController', wall.WallCtrl.prototype.injection());
})(wall || (wall = {}));
//@ sourceMappingURL=WallApp.js.map
