var wall;
(function (wall) {
    'use strict';
    var FlickrServices = (function () {
        function FlickrServices($resource) {
            this.name = "FlickrServices";
            this.resource = $resource('http://api.flickr.com/services/feeds/photos_public.gne', {
                format: 'json',
                jsoncallback: 'JSON_CALLBACK'
            }, {
                'get': {
                    'method': 'JSONP'
                }
            });
            console.log("hip");
        }
        FlickrServices.prototype.injection = function () {
            return [
                '$resource', 
                FlickrServices
            ];
        };
        FlickrServices.prototype.get = function (search, successCallback) {
            console.log("FlickrServices :: get()");
            return this.resource.get(search, function (data) {
                console.log("SUCCESS");
                successCallback(data);
            }, function (data) {
                console.log("FAIL");
            });
        };
        FlickrServices.prototype.getName = function () {
            return this.name;
        };
        return FlickrServices;
    })();
    wall.FlickrServices = FlickrServices;    
})(wall || (wall = {}));
//@ sourceMappingURL=FlickrServices.js.map
