var wall;
(function (wall) {
    'use strict';
    var MasonryDirective = (function () {
        function MasonryDirective($parse) {
            var _this = this;
            this.parse = $parse;
            this.restrict = 'AC';
            this.link = function ($scope, element, attributes) {
                return _this.linkFn($scope, element, attributes);
            };
        }
        MasonryDirective.prototype.injection = function () {
            return [
                '$parse', 
                function ($parse) {
                    return new MasonryDirective($parse);
                }            ];
        };
        MasonryDirective.prototype.linkFn = function ($scope, element, attributes) {
            console.log('MasonryDirective');
            element.masonry({
                itemSelector: '.masonry-item',
                isFitWidth: true
            });
        };
        return MasonryDirective;
    })();
    wall.MasonryDirective = MasonryDirective;    
})(wall || (wall = {}));
//@ sourceMappingURL=MasonryDirective.js.map
