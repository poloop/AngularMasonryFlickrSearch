/**
 * Created with JetBrains WebStorm.
 * User: plong
 * Date: 18/03/13
 * Time: 16:58
 * To change this template use File | Settings | File Templates.
 */

/// <reference path='../_all.ts' />
module wall {
    'use strict';

    export class WallCtrl {

        private flickrServices: FlickrServices;
        private scope: IWallScope;
        private filter: ng.IFilterService;

        public injection(): any[] {
            return [
                '$scope',
                '$filter',
                'flickrServices',
                WallCtrl
            ]
        }

        constructor(
            $scope : IWallScope,
            $filter : ng.IFilterService,
            flickrServices : FlickrServices
            ) {

            this.scope = $scope;
            this.filter = $filter;
            this.flickrServices = flickrServices;
            this.scope.searchTagItems = [];

            this.scope.topic = [];
            //this.refreshWall($scope);

            $scope.deleteTopic = (value: string) => this.deleteTopic(value);
            $scope.desactivateTopic = (value : string) => this.desactivateTopic(value);
            $scope.submitSearch = () => this.submitSearch();
            $scope.onLoadedImage = () => this.onLoadedImage();
            
            $(window).resize(function() {
                console.log('RESIZE');
            })
        }

        onLoadedImage() {
            console.log("LOADED");
        }

        submitSearch() {


            var tagWallItem = new wall.WallItem();
            tagWallItem.type = "topic-item";
            tagWallItem.title = (this.scope.searchTag) ? this.scope.searchTag.toUpperCase() : "ANY";
            tagWallItem.template = "partials/wallTag.html";
            tagWallItem.searchTag = tagWallItem.title;

            var searchTagItem = new wall.SearchTagItem();
            searchTagItem.label = tagWallItem.title;
            this.scope.searchTagItems.push(searchTagItem);

            if(!this.scope.items){
                this.scope.items = [tagWallItem];
            } else {
                this.scope.items.push(tagWallItem);
            }

            this.refreshWall(this.scope, this.scope.searchTag);
        }

        deleteTopic(value: string) {
            alert("DELETE " + value);
            var i = 0;
            while(i < this.scope.items.length)
            {
                if(this.scope.items[i].searchTag == value) {
                    this.scope.items.splice(i, 1);
                } else {
                    i++;
                }
            }
            i = 0;
            while(i < this.scope.searchTagItems.length)
            {
                if(this.scope.searchTagItems[i].label == value) {
                    this.scope.searchTagItems.splice(i, 1);
                } else {
                    i++;
                }
            }
            var $masonry = $('.masonry');
            $masonry
                .masonry('remove', $('.' + value))
                .masonry('reload');
        }

        desactivateTopic(value: string) {

            $('.masonry').masonry('reload');
            var searchTagItem = this.getSearchTagItemByLabel(value);
            if(searchTagItem.state == 'activate')
            {
                searchTagItem.state = 'desactivate';
                this.scope.topic.push(value);
            } else
            {
                searchTagItem.state = 'activate';
                this.scope.topic.splice(this.scope.topic.indexOf(value), 1);
            }
            console.log("desactivateTopic");
        }

        getSearchTagItemByLabel(value : string) : SearchTagItem
        {
            for(var i = 0; i < this.scope.searchTagItems.length; i++)
            {
                if(this.scope.searchTagItems[i].label == value) return this.scope.searchTagItems[i];
            }
            return undefined
        }

        getAllItems(successCallback : Function, tags ?: string): void
        {
            console.log(this.flickrServices.getName());
            var result : any = this.flickrServices.get({tags : tags}, function (data) {
                successCallback(data);
            });
            console.log("hop " + result);

        }

        refreshWall(scope: IWallScope, tags ?: string):void
        {
            this.getAllItems(function (data) {
                console.log(data);
                for(var i = 0; i < data.items.length; i++)
                {
                    data.items[i].template = "partials/wallItem.html";
                    data.items[i].searchTag = (tags) ? tags.toUpperCase() : "ANY";
                }
                if(!scope.items)
                    scope.items = data.items;
                else
                    scope.items = scope.items.concat(data.items);
            }, tags);
        }
    }
}