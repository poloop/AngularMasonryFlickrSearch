/**
* Created with JetBrains WebStorm.
* User: plong
* Date: 26/03/13
* Time: 15:47
* To change this template use File | Settings | File Templates.
*/
/// <reference path='../_all.ts' />
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
                }
            ];
        };

        WhenScrolledDirective.prototype.linkFn = function ($scope, element, attributes) {
            var raw = element[0];

            //console.log('WhenScrolledDirective');
            $(window).bind('scroll', function () {
                //console.log('scroll ' + ' ' + $(window).scrollTop() + ' ' + $(window).height() + ' ' + raw.scrollHeight);
                if ($(window).scrollTop() + $(window).height() >= raw.scrollHeight) {
                    //console.log('WhenScrolledDirective apply');
                    //$scope.$apply(attributes.whenScrolled);
                }
            });
        };
        return WhenScrolledDirective;
    })();
    wall.WhenScrolledDirective = WhenScrolledDirective;
})(wall || (wall = {}));
//# sourceMappingURL=WhenScrolledDirective.js.map
