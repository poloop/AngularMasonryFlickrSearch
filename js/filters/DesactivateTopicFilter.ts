/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 08/04/13
 * Time: 19:08
 * To change this template use File | Settings | File Templates.
 */

/// <reference path='../_all.ts' />
module wall {
    'use strict';

    export class DesactivateTopicFilter {

        private scope: IWallScope;
        private filter: ng.IFilterService;

        public injection(): any[] {
            return [
                '$filter',
                ($filter : ng.IFilterService) => { return new DesactivateTopicFilter($filter); }
            ]
        }

        constructor(
                $filter : ng.IFilterService
            ) {
            this.filter = $filter;
            return this.execute;
        }

        execute() {

        }
    }
}