var HiP4;
(function (HiP4) {
    var Controllers;
    (function (Controllers) {
        var PostEditController = (function () {
            function PostEditController(postsService, $state, $stateParams) {
                this.postsService = postsService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.postId = $stateParams['id'];
                this.getPost();
            }
            PostEditController.prototype.getPost = function () {
                this.post = this.postsService.getPost(this.postId);
            };
            PostEditController.prototype.savePost = function () {
                var _this = this;
                debugger;
                this.postsService.updatePost(this.post).then(function () {
                    _this.$state.go("home");
                });
            };
            PostEditController.prototype.deletePost = function (id) {
                var _this = this;
                debugger;
                this.postsService.deletePost(this.postId).then(function () {
                    _this.$state.go("admin");
                });
            };
            PostEditController.prototype.cancel = function () {
                this.$state.go("home");
            };
            return PostEditController;
        }());
        Controllers.PostEditController = PostEditController;
    })(Controllers = HiP4.Controllers || (HiP4.Controllers = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=postToEditController.js.map