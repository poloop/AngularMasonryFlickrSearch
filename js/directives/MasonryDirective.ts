/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 20/03/13
 * Time: 18:23
 * To change this template use File | Settings | File Templates.
 */

/// <reference path='../_all.ts' />
module wall {
    'use strict';

    export class MasonryDirective {

        public restrict : string;
        public link: ($scope : ng.IScope, element : JQuery, attributes : any) => any;

        private parse : ng.IParseService;

        public injection(): any[]  {
            return [
                '$parse',
                ($parse : ng.IParseService) => { return new MasonryDirective($parse); }
            ]
        }

        constructor(
            $parse : ng.IParseService
            ) {
            this.parse = $parse;
            this.restrict = 'AC';
            this.link = ($scope, element, attributes) => this.linkFn($scope, element, attributes);
        }

        linkFn($scope : ng.IScope, element : JQuery, attributes : any) : any {
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
                //columnWidth: this.parse(attributes.masonry)($scope)
                //isAnimated: true
            });

            /*
            element.nested({
                selector: '.masonry-item',
                minWidth: 100
            });
            */
        }
    }
}