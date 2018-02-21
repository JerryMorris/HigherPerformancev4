var HiP4;
(function (HiP4) {
    var Controllers;
    (function (Controllers) {
        var DeletePostController = (function () {
            function DeletePostController(postsService, $state, $stateParams) {
                this.postsService = postsService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.postId = $stateParams["id"];
                this.getPost();
            }
            DeletePostController.prototype.getPost = function () {
                debugger;
                this.post = this.postsService.getPost(this.postId);
            };
            DeletePostController.prototype.deletePost = function () {
                var _this = this;
                debugger;
                this.post.isActive = false;
                this.postsService.updatePost(this.post).then(function () {
                    _this.$state.go("home");
                });
            };
            DeletePostController.prototype.cancel = function () {
                this.$state.go("home");
            };
            return DeletePostController;
        }());
        Controllers.DeletePostController = DeletePostController;
    })(Controllers = HiP4.Controllers || (HiP4.Controllers = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=postDeleteController.js.map