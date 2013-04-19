var wall;
(function (wall) {
    'use strict';
    var WhenScrolledDirective = (function () {
        function WhenScrolledDirective() {
            var _this = this;
            this.restrict = 'AC';
            this.link = function ($scope, element, attributes) {
                return _this.linkFn($scope, element, attributes);
            };
        }
        WhenScrolledDirective.prototype.injection = function () {
            return [
                function () {
                    return new WhenScrolledDirective();
                }            ];
        };
        WhenScrolledDirective.prototype.linkFn = function ($scope, element, attributes) {
            var raw = element[0];
            $(window).bind('scroll', function () {
                if($(window).scrollTop() + $(window).height() >= raw.scrollHeight) {
                }
            });
        };
        return WhenScrolledDirective;
    })();
    wall.WhenScrolledDirective = WhenScrolledDirective;    
})(wall || (wall = {}));
//@ sourceMappingURL=WhenScrolledDirective.js.map
