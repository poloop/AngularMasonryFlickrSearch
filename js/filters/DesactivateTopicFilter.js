var wall;
(function (wall) {
    'use strict';
    var DesactivateTopicFilter = (function () {
        function DesactivateTopicFilter() {
            return this.execute;
        }
        DesactivateTopicFilter.prototype.injection = function () {
            return [
                function () {
                    return new DesactivateTopicFilter();
                }            ];
        };
        DesactivateTopicFilter.prototype.execute = function (items, value) {
            if (typeof value === "undefined") { value = ''; }
            console.log("DesactivateTopicFilter : execute");
            var arr = [];
            var data = items;
            if(data == undefined) {
                return arr;
            }
            for(var i = 0; i < data.length; i++) {
                if(data[i].searchTag != value) {
                    arr.push(data[i]);
                }
            }
            if(arr.length < items.length) {
                $('.masonry').masonry('remove', $('.' + value));
                $('.masonry').masonry('reload');
            }
            return arr;
        };
        return DesactivateTopicFilter;
    })();
    wall.DesactivateTopicFilter = DesactivateTopicFilter;    
})(wall || (wall = {}));
//@ sourceMappingURL=DesactivateTopicFilter.js.map
