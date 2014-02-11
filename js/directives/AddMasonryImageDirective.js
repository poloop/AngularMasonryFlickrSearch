/// <reference path='../_all.ts' />
var wall;
(function (wall) {
    'use strict';

    var AddMasonryImageDirective = (function () {
        function AddMasonryImageDirective() {
            var _this = this;
            this.restrict = 'A';
            this.link = function ($scope, element, attributes) {
                return _this.linkFn($scope, element, attributes);
            };
        }
        AddMasonryImageDirective.prototype.injection = function () {
            return [
                function () {
                    return new AddMasonryImageDirective();
                }
            ];
        };

        AddMasonryImageDirective.prototype.linkFn = function ($scope, element, attributes) {
            console.log("AddMasonryImageDirective " + $scope);
            setTimeout(function (val) {
                $('.masonry').imagesLoaded(function () {
                    $('.masonry').masonry('reload');
                    element.parent().parent().css({ opacity: 1 });
                });
            }, 1000);
        };
        return AddMasonryImageDirective;
    })();
    wall.AddMasonryImageDirective = AddMasonryImageDirective;
})(wall || (wall = {}));
//# sourceMappingURL=AddMasonryImageDirective.js.map
