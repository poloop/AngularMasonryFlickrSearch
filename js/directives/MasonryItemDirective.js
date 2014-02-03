/**
* Created with JetBrains WebStorm.
* User: plong
* Date: 20/03/13
* Time: 18:35
* To change this template use File | Settings | File Templates.
*/
/// <reference path='../_all.ts' />
var wall;
(function (wall) {
    'use strict';

    var MasonryItemDirective = (function () {
        function MasonryItemDirective($compile, $timeout) {
            var _this = this;
            this.$compile = $compile;
            this.timeout = $timeout;
            this.restrict = 'C';
            this.transclude = false;
            this.link = function ($scope, element, attributes) {
                return _this.linkFn($scope, element, attributes);
            };
            this.compile = function (tElement, tAttributes, transclude) {
                return _this.compileFn(tElement, tAttributes, transclude);
            };
            //console.log('MasonryItemDirective');
        }
        MasonryItemDirective.prototype.injection = function () {
            return [
                '$compile',
                '$timeout',
                function ($compile, $timeout) {
                    return new MasonryItemDirective($compile, $timeout);
                }
            ];
        };

        MasonryItemDirective.prototype.compileFn = function (tElement, tAttributes, transclude) {
            var _this = this;
            return {
                pre: function ($scope, iElement, attributes) {
                    return _this.preLinkFn($scope, iElement, attributes);
                },
                post: function ($scope, iElement, attributes) {
                    return _this.postLinkFn($scope, iElement, attributes);
                }
            };
        };

        MasonryItemDirective.prototype.preLinkFn = function ($scope, element, attributes) {
        };

        MasonryItemDirective.prototype.postLinkFn = function ($scope, element, attributes) {
            element.css({ opacity: 0 });

            //$('.masonry').masonry('appended', element, false);
            var timeout = this.timeout;
            $scope.onLoadTemplate = function () {
                console.log("MasonryItemDirective :: onLoadTemplate " + $scope.wallItem.type);
                if ($scope.wallItem.type == "topic-item") {
                    element.css({ opacity: 1 });
                }
            };
        };

        MasonryItemDirective.prototype.linkFn = function ($scope, element, attributes) {
            console.log('MasonryItemDirective link');
        };
        return MasonryItemDirective;
    })();
    wall.MasonryItemDirective = MasonryItemDirective;
})(wall || (wall = {}));
//# sourceMappingURL=MasonryItemDirective.js.map
