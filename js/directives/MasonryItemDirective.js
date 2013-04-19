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
        }
        MasonryItemDirective.prototype.injection = function () {
            return [
                '$compile', 
                '$timeout', 
                function ($compile, $timeout) {
                    return new MasonryItemDirective($compile, $timeout);
                }            ];
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
            element.css({
                opacity: 0
            });
            var timeout = this.timeout;
            $scope.onLoadTemplate = function () {
                console.log("MasonryItemDirective :: onLoadTemplate " + $scope.wallItem.type);
                if($scope.wallItem.type == "topic-item") {
                    element.css({
                        opacity: 1
                    });
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
//@ sourceMappingURL=MasonryItemDirective.js.map
