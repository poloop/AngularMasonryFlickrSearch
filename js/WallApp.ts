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
        .filter('desactivateTopic', DesactivateTopicFilter.prototype.injection())
        .service('flickrServices', FlickrServices.prototype.injection())
        .controller('wallAppController', WallCtrl.prototype.injection());


    /*wallApp.directive('masonry', function ($parse) {
        return {
            restrict: 'AC',
            link: function (scope, elem, attrs) {
                elem.masonry({ itemSelector: '.masonry-item', columnWidth: $parse(attrs.masonry)(scope) });
            }
        };
    });*/
    /*
    wallApp.directive('masonryItem', function ($compile, $timeout) {
        return {
            restrict: 'AC',
            link: function (scope : ng.IScope, elem : JQuery, attrs : any) {

                elem.hide();
                elem.html($compile(elem.html())(scope));
                //elem.parents('.masonry').masonry('destroy');
                elem.imagesLoaded(function () {
                    $timeout(function() {
                        //console.log('imageLoaded ' + elem.parent());
                        elem.show();
                        elem.parents('.masonry').masonry('reload');

                    }, 2000);
                });

            }
        };
    });
    */
}

