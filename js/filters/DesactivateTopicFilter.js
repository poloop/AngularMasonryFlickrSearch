var wall;
(function (wall) {
    'use strict';
    var DesactivateTopicFilter = (function () {
        function DesactivateTopicFilter($filter) {
            this.filter = $filter;
            return this.execute;
        }
        DesactivateTopicFilter.prototype.injection = function () {
            return [
                '$filter', 
                function ($filter) {
                    return new DesactivateTopicFilter($filter);
                }            ];
        };
        DesactivateTopicFilter.prototype.execute = function () {
        };
        return DesactivateTopicFilter;
    })();
    wall.DesactivateTopicFilter = DesactivateTopicFilter;    
})(wall || (wall = {}));
//@ sourceMappingURL=DesactivateTopicFilter.js.map
