var HiP4;
(function (HiP4) {
    var Controllers;
    (function (Controllers) {
        var ReplyController = (function () {
            function ReplyController(replyService, postsService, $state, $stateParams) {
                this.replyService = replyService;
                this.postsService = postsService;
                this.$state = $state;
                this.replyVm = {};
                this.postId = $stateParams["id"];
                this.getPost();
            }
            ReplyController.prototype.getPost = function () {
                this.post = this.postsService.getPost(this.postId);
            };
            ReplyController.prototype.saveReply = function () {
                var _this = this;
                debugger;
                this.reply.postId = this.postId;
                this.replyService.saveReply(this.reply).then(function () {
                    _this.$state.go("posts");
                });
            };
            ReplyController.prototype.cancel = function () {
                this.$state.go("posts");
            };
            return ReplyController;
        }());
        Controllers.ReplyController = ReplyController;
    })(Controllers = HiP4.Controllers || (HiP4.Controllers = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=replyController.js.map