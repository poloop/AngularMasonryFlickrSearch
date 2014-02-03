/**
* Created with JetBrains WebStorm.
* User: plong
* Date: 18/03/13
* Time: 16:42
* To change this template use File | Settings | File Templates.
*/
/// <reference path='_all.ts' />
var wall;
(function (wall) {
    'use strict';

    var wallApp = angular.module('wall', ['ngResource']).directive('masonry', wall.MasonryDirective.prototype.injection()).directive('masonryItem', wall.MasonryItemDirective.prototype.injection()).directive('whenScrolled', wall.WhenScrolledDirective.prototype.injection()).directive('addMasonry', wall.AddMasonryImageDirective.prototype.injection()).filter('desactivateTopic', function () {
        return function (items, values) {
            return wall.DesactivateTopicFilter.filter(items, values);
        };
    }).service('flickrServices', wall.FlickrServices.prototype.injection()).controller('wallAppController', wall.WallCtrl.prototype.injection());
})(wall || (wall = {}));
//# sourceMappingURL=WallApp.js.map
