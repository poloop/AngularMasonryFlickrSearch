var wall;
(function (wall) {
    var WallMedia = (function () {
        function WallMedia() { }
        return WallMedia;
    })();
    wall.WallMedia = WallMedia;    
    var WallItem = (function () {
        function WallItem() { }
        return WallItem;
    })();
    wall.WallItem = WallItem;    
    var SearchTagItem = (function () {
        function SearchTagItem() {
            this.state = "activate";
        }
        return SearchTagItem;
    })();
    wall.SearchTagItem = SearchTagItem;    
})(wall || (wall = {}));
//@ sourceMappingURL=WallModel.js.map
