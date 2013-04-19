/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 20/03/13
 * Time: 18:35
 * To change this template use File | Settings | File Templates.
 */

/// <reference path='../_all.ts' />
module wall {
    'use strict';

    export class MasonryItemDirective {

        public restrict : string;
        public transclude : bool;
        public link: ($scope : ng.IScope, element : JQuery, attributes : any) => any;
        public compile: (tElement : JQuery, tAttributes : any, transclude : bool) => any;

        private $compile : ng.ICompileService;
        private timeout : ng.ITimeoutService;

        public injection(): any[]  {
            return [
                '$compile',
                '$timeout',
                ($compile : ng.ICompileService, $timeout : ng.ITimeoutService) => { return new MasonryItemDirective($compile, $timeout); }
            ]
        }

        constructor(
            $compile : ng.ICompileService,
            $timeout : ng.ITimeoutService
            ) {
            this.$compile = $compile;
            this.timeout = $timeout;
            this.restrict = 'C';
            this.transclude = false;
            this.link = ($scope, element, attributes) => this.linkFn($scope, element, attributes);
            this.compile = (tElement, tAttributes, transclude) => this.compileFn(tElement, tAttributes, transclude);
            //console.log('MasonryItemDirective');
        }

        compileFn(tElement : JQuery, tAttributes : any, transclude : bool) {
            return {
                pre : ($scope : any, iElement : JQuery, attributes : any) => this.preLinkFn($scope, iElement, attributes),
                post : ($scope : any, iElement : JQuery, attributes : any) => this.postLinkFn($scope, iElement, attributes)
            }
        }

        preLinkFn($scope : any, element : JQuery, attributes : any) : any {

        }

        postLinkFn($scope : any, element : JQuery, attributes : any) : any {
            
            element.css({opacity : 0});
            //$('.masonry').masonry('appended', element, false);
            

            var timeout = this.timeout;
            $scope.onLoadTemplate = function() {
                console.log("MasonryItemDirective :: onLoadTemplate " + $scope.wallItem.type);
                if($scope.wallItem.type == "topic-item")
                {
                    element.css({opacity : 1});
                }
                
            }


        }

        linkFn($scope : any, element : JQuery, attributes : any) : any {
            console.log('MasonryItemDirective link');
            
        }
    }
}
