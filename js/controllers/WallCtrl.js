var wall;
(function (wall) {
    'use strict';
    var WallCtrl = (function () {
        function WallCtrl($scope, $filter, flickrServices) {
            var _this = this;
            this.scope = $scope;
            this.filter = $filter;
            this.flickrServices = flickrServices;
            this.scope.searchTagItems = [];
            this.scope.topic = [];
            $scope.deleteTopic = function (value) {
                return _this.deleteTopic(value);
            };
            $scope.desactivateTopic = function (value) {
                return _this.desactivateTopic(value);
            };
            $scope.submitSearch = function () {
                return _this.submitSearch();
            };
            $scope.onLoadedImage = function () {
                return _this.onLoadedImage();
            };
            $(window).resize(function () {
            });
        }
        WallCtrl.prototype.injection = function () {
            return [
                '$scope', 
                '$filter', 
                'flickrServices', 
                WallCtrl
            ];
        };
        WallCtrl.prototype.onLoadedImage = function () {
            console.log("LOADED");
        };
        WallCtrl.prototype.submitSearch = function () {
            var tagWallItem = new wall.WallItem();
            tagWallItem.type = "topic-item";
            tagWallItem.title = (this.scope.searchTag) ? this.scope.searchTag.toUpperCase() : "ANY";
            tagWallItem.template = "partials/wallTag.html";
            tagWallItem.searchTag = tagWallItem.title;
            var searchTagItem = new wall.SearchTagItem();
            searchTagItem.label = tagWallItem.title;
            this.scope.searchTagItems.push(searchTagItem);
            if(!this.scope.items) {
                this.scope.items = [
                    tagWallItem
                ];
            } else {
                this.scope.items.push(tagWallItem);
            }
            this.refreshWall(this.scope, this.scope.searchTag);
        };
        WallCtrl.prototype.deleteTopic = function (value) {
            alert("DELETE " + value);
            var i = 0;
            while(i < this.scope.items.length) {
                if(this.scope.items[i].searchTag == value) {
                    this.scope.items.splice(i, 1);
                } else {
                    i++;
                }
            }
            i = 0;
            while(i < this.scope.searchTagItems.length) {
                if(this.scope.searchTagItems[i].label == value) {
                    this.scope.searchTagItems.splice(i, 1);
                } else {
                    i++;
                }
            }
            var $masonry = $('.masonry');
            $masonry.masonry('remove', $('.' + value)).masonry('reload');
        };
        WallCtrl.prototype.desactivateTopic = function (value) {
            $('.masonry').masonry('reload');
            var searchTagItem = this.getSearchTagItemByLabel(value);
            if(searchTagItem.state == 'activate') {
                searchTagItem.state = 'desactivate';
                this.scope.topic.push(value);
            } else {
                searchTagItem.state = 'activate';
                this.scope.topic.splice(this.scope.topic.indexOf(value), 1);
            }
            console.log("desactivateTopic");
        };
        WallCtrl.prototype.getSearchTagItemByLabel = function (value) {
            for(var i = 0; i < this.scope.searchTagItems.length; i++) {
                if(this.scope.searchTagItems[i].label == value) {
                    return this.scope.searchTagItems[i];
                }
            }
            return undefined;
        };
        WallCtrl.prototype.getAllItems = function (successCallback, tags) {
            console.log(this.flickrServices.getName());
            var result = this.flickrServices.get({
                tags: tags
            }, function (data) {
                successCallback(data);
            });
            console.log("hop " + result);
        };
        WallCtrl.prototype.refreshWall = function (scope, tags) {
            this.getAllItems(function (data) {
                console.log(data);
                for(var i = 0; i < data.items.length; i++) {
                    data.items[i].template = "partials/wallItem.html";
                    data.items[i].searchTag = (tags) ? tags.toUpperCase() : "ANY";
                }
                if(!scope.items) {
                    scope.items = data.items;
                } else {
                    scope.items = scope.items.concat(data.items);
                }
            }, tags);
        };
        return WallCtrl;
    })();
    wall.WallCtrl = WallCtrl;    
})(wall || (wall = {}));
//@ sourceMappingURL=WallCtrl.js.map
