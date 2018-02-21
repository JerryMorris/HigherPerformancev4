var HiP4;
(function (HiP4) {
    var Services;
    (function (Services) {
        var TopicsService = (function () {
            function TopicsService($resource) {
                this.topicResource = $resource('/api/topics/:id', null);
            }
            TopicsService.prototype.listTopics = function () {
                debugger;
                return this.topicResource.query();
            };
            return TopicsService;
        }());
        Services.TopicsService = TopicsService;
        angular.module('HiP4').service('topicsService', TopicsService);
    })(Services = HiP4.Services || (HiP4.Services = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=topicsService.js.map