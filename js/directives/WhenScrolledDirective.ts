/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 26/03/13
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */

/// <reference path='../_all.ts' />
module wall {
    'use strict';

    export class WhenScrolledDirective {

        public restrict : string;
        public link: ($scope : IWallScope, element : JQuery, attributes : any) => any;


        public injection(): any[]  {
            return [
                () => { return new WhenScrolledDirective(); }
            ]
        }

        constructor() {
            this.restrict = 'AC';
            this.link = ($scope, element, attributes) => this.linkFn($scope, element, attributes);
        }

        linkFn($scope : IWallScope, element : JQuery, attributes : any) : any {
            var raw = element[0];
            //console.log('WhenScrolledDirective');
            $(window).bind('scroll', function() {
                //console.log('scroll ' + ' ' + $(window).scrollTop() + ' ' + $(window).height() + ' ' + raw.scrollHeight);
                if($(window).scrollTop() + $(window).height() >= raw.scrollHeight) {
                    //console.log('WhenScrolledDirective apply');
                    //$scope.$apply(attributes.whenScrolled);
                }
            });

        }
    }
}