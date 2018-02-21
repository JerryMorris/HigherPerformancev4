var HiP4;
(function (HiP4) {
    var Controllers;
    (function (Controllers) {
        var CreatePostController = (function () {
            function CreatePostController(postsService, $state) {
                this.postsService = postsService;
                this.$state = $state;
            }
            CreatePostController.prototype.savePost = function () {
                var _this = this;
                this.postsService.savePost(this.post).then(function () {
                    _this.$state.go("home");
                });
            };
            CreatePostController.prototype.cancel = function () {
                this.$state.go("home");
            };
            return CreatePostController;
        }());
        Controllers.CreatePostController = CreatePostController;
    })(Controllers = HiP4.Controllers || (HiP4.Controllers = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=CreatePostController.js.map