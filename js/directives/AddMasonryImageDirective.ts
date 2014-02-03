/// <reference path='../_all.ts' />
module wall {
    'use strict';

    export class AddMasonryImageDirective {

        public restrict : string;
        public transclude : boolean;
        public link: ($scope : ng.IScope, element : JQuery, attributes : any) => any;

        public injection(): any[]  {
            return [
                () => { return new AddMasonryImageDirective(); }
            ]
        }

        constructor(
            ) {
            this.restrict = 'A';
            this.link = ($scope, element, attributes) => this.linkFn($scope, element, attributes);
        }

        linkFn($scope : ng.IScope, element : JQuery, attributes : any) : any {
            console.log("AddMasonryImageDirective " + $scope);
            setTimeout(function(val) { //looks like timeout or deferred solves the issue
                $('.masonry').imagesLoaded(function() {
                    $('.masonry').masonry('reload');
                    element.parent().parent().css({opacity : 1});
                });
            }, 1000);
        }

    }
}