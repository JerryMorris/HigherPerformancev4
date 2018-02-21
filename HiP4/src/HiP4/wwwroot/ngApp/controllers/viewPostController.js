var HiP4;
(function (HiP4) {
    var Controllers;
    (function (Controllers) {
        var ViewPostController = (function () {
            function ViewPostController(postsService, replyService, $stateParams, $state, $window) {
                this.postsService = postsService;
                this.replyService = replyService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.$window = $window;
                this.postId = this.$stateParams['id'];
                this.getPost();
                this.getPostReply();
            }
            ViewPostController.prototype.likePost = function () {
                var _this = this;
                this.post.likes = this.post.likes + 1;
                this.postsService.updatePost(this.post).then(function () {
                    _this.$state.go("home");
                });
            };
            ViewPostController.prototype.likeReply = function () {
                var _this = this;
                this.reply.likes = this.reply.likes + 1;
                this.replyService.updateReply(this.reply).then(function () {
                    _this.$state.go("home");
                });
            };
            ViewPostController.prototype.getPost = function () {
                debugger;
                this.post = this.postsService.getPost(this.postId);
            };
            ViewPostController.prototype.createReply = function () {
                var _this = this;
                debugger;
                this.replys.postId = this.postId;
                this.replys.isActive = true;
                this.replyService.saveReply(this.replys).then(function () {
                    _this.$state.reload();
                });
            };
            ViewPostController.prototype.getPostReply = function () {
                debugger;
                this.reply = this.replyService.getPostReplies(this.postId);
            };
            ViewPostController.prototype.replyToReply = function (id) {
                var _this = this;
                debugger;
                this.replys.replyId = id;
                this.replys.isActive = true;
                this.replyService.saveReply(this.replys).then(function () {
                    _this.$state.reload();
                });
            };
            ViewPostController.prototype.getRepliesToReply = function (id) {
                debugger;
                this.replied = this.replyService.getRepliesToReply(id);
            };
            return ViewPostController;
        }());
        Controllers.ViewPostController = ViewPostController;
    })(Controllers = HiP4.Controllers || (HiP4.Controllers = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=viewPostController.js.map