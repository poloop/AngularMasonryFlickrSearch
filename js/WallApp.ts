/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 18/03/13
 * Time: 16:42
 * To change this template use File | Settings | File Templates.
 */

/// <reference path='_all.ts' />
module wall {
    'use strict';

    var wallApp = angular.module('wall', ['ngResource'])
        .directive('masonry', MasonryDirective.prototype.injection())
        .directive('masonryItem', MasonryItemDirective.prototype.injection())
        .directive('whenScrolled', WhenScrolledDirective.prototype.injection())
        .directive('addMasonry', AddMasonryImageDirective.prototype.injection())
        .filter('desactivateTopic', () => {
            return(items, values) => {
                return DesactivateTopicFilter.filter(items, values);
            }
        })
        .service('flickrServices', FlickrServices.prototype.injection())
        .controller('wallAppController', WallCtrl.prototype.injection());

    //.filter('desactivateTopic', DesactivateTopicFilter.prototype.injection())
}

