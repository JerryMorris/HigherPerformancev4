var HiP4;
(function (HiP4) {
    var Controllers;
    (function (Controllers) {
        var TopicsController = (function () {
            function TopicsController(topicsService, postsService, $stateParams) {
                this.topicsService = topicsService;
                this.postsService = postsService;
                this.$stateParams = $stateParams;
                this.topic = {};
                this.topicId = $stateParams['id'];
                this.getTopics();
            }
            TopicsController.prototype.getTopics = function () {
                this.topic = this.topicsService.listTopics();
            };
            TopicsController.prototype.getPostByTopicId = function (topicId) {
                this.posts = this.postsService.getPostbyTopicId(topicId.id);
            };
            return TopicsController;
        }());
        Controllers.TopicsController = TopicsController;
        angular.module('HiP4').controller('TopicsController', TopicsController);
    })(Controllers = HiP4.Controllers || (HiP4.Controllers = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=topicController.js.map