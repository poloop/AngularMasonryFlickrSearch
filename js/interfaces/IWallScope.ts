/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 21/03/13
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */

/// <reference path='../_all.ts' />

module wall {
    'use strict';

    export interface IWallScope extends ng.IScope {
        items: WallItem[];
        searchTagItems : SearchTagItem[];

        topic : string;

        parse: ng.IParseService;
        compile: ng.ICompileService;

        searchTag: string;

        submitSearch: () => void;
        deleteTopic: (string) => void;
        desactivateTopic: (string) => void;
        filterBySearchTag: (string) => void;
    }
}