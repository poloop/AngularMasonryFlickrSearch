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

    export class DesactivateTopicFilter{

        private scope: IWallScope;

        public injection(): any[] {
            return [
                () => { return new DesactivateTopicFilter(); }
            ]
        }

        constructor(
            ) {
            return this.execute;
        }

        execute(items : WallItem[], values : String[] = []) : any[] {
            //console.log("DesactivateTopicFilter : execute");

            var arr = [];

            var data = items;
            if(data == undefined) return arr;
            for(var i = 0; i < data.length; i++) {
                if(values.indexOf(data[i].searchTag) == -1) arr.push(data[i]);
            }
            if(arr.length < items.length)
            {
                for(var j = 0; j < values.length; j++)
                {
                    //$('.masonry').masonry('remove', $('.' + values[j]));
                    $('.masonry').masonry('reload');
                }
            }
            return arr;
        }
    }
}