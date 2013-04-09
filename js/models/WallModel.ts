/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 18/03/13
 * Time: 17:19
 * To change this template use File | Settings | File Templates.
 */

/// <reference path='../_all.ts' />

module wall {
    export class WallMedia {
        m : string;
    }

    export class WallItem {
        title : string;
        media : WallMedia;
        type: string;
        template: string;
        searchTag: string;
    }

    export class SearchTagItem {
        label : string;
    }
}