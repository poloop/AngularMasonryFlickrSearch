/**
* Created with JetBrains WebStorm.
* User: plong
* Date: 18/03/13
* Time: 17:19
* To change this template use File | Settings | File Templates.
*/
/// <reference path='../_all.ts' />
var wall;
(function (wall) {
    var WallMedia = (function () {
        function WallMedia() {
        }
        return WallMedia;
    })();
    wall.WallMedia = WallMedia;

    var WallItem = (function () {
        function WallItem() {
        }
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
//# sourceMappingURL=WallModel.js.map
