/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 19/03/13
 * Time: 17:53
 * To change this template use File | Settings | File Templates.
 */


/// <reference path='../_all.ts' />
module wall {
    'use strict';

    export class FlickrServices {

        private resource : ng.resource.IResourceClass<any>;

        private name : string = "FlickrServices";

        public injection() : any[] {
            return [
                '$resource',
                FlickrServices
            ]
        }

        constructor($resource : ng.resource.IResourceService) {
            this.resource = $resource('http://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'get': { 'method': 'JSONP' } });
            console.log("hip");
        }

        get (search : Object, successCallback : Function) : any {
            console.log("FlickrServices :: get()");
            return this.resource.get(search,
                function(data) {
                    console.log("SUCCESS");
                    successCallback(data);
                },
                function(data) {
                    console.log("FAIL");
                });
        }

        getName() : string {
            return this.name;
        }
    }
}

