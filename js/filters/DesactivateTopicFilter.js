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
        DesactivateTopicFilter.prototype.execute = function (items, values) {
            if (typeof values === "undefined") { values = []; }
            var arr = [];
            var data = items;
            if(data == undefined) {
                return arr;
            }
            for(var i = 0; i < data.length; i++) {
                if(values.indexOf(data[i].searchTag) == -1) {
                    arr.push(data[i]);
                }
            }
            if(arr.length < items.length) {
                for(var j = 0; j < values.length; j++) {
                    $('.masonry').masonry('reload');
                }
            }
            return arr;
        };
        return DesactivateTopicFilter;
    })();
    wall.DesactivateTopicFilter = DesactivateTopicFilter;    
})(wall || (wall = {}));
//@ sourceMappingURL=DesactivateTopicFilter.js.map
