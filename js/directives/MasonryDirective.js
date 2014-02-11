/**
* Created with JetBrains WebStorm.
* User: plong
* Date: 20/03/13
* Time: 18:23
* To change this template use File | Settings | File Templates.
*/
/// <reference path='../_all.ts' />
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
                }
            ];
        };

        MasonryDirective.prototype.linkFn = function ($scope, element, attributes) {
            console.log('MasonryDirective');

            element.masonry({
                itemSelector: '.masonry-item',
                isFitWidth: true,
                /*
                columnWidth: function( containerWidth ) {
                
                if($(".container").width() == 940) {
                return 240;
                }
                
                var width = $(window).width();
                var col = 300;
                
                if(width < 1200 && width >= 980) {
                col = 240;
                }
                else if(width < 980 && width >= 768) {
                col = 240;
                }
                
                return col;
                }
                */
                columnWidth: 260
            });
            /*
            element.nested({
            selector: '.masonry-item',
            minWidth: 100
            });
            */
        };
        return MasonryDirective;
    })();
    wall.MasonryDirective = MasonryDirective;
})(wall || (wall = {}));
//# sourceMappingURL=MasonryDirective.js.map
