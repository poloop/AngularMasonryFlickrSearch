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
            console.log('WhenScrolledDirective');
            $(window).bind('scroll', function () {
                console.log('scroll ' + ' ' + $(window).scrollTop() + ' ' + $(window).height() + ' ' + raw.scrollHeight);
                if($(window).scrollTop() + $(window).height() >= raw.scrollHeight) {
                    console.log('WhenScrolledDirective apply');
                }
            });
        };
        return WhenScrolledDirective;
    })();
    wall.WhenScrolledDirective = WhenScrolledDirective;    
})(wall || (wall = {}));
//@ sourceMappingURL=WhenScrolledDirective.js.map