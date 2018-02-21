var HiP4;
(function (HiP4) {
    var Controllers;
    (function (Controllers) {
        var CreateReplyController = (function () {
            function CreateReplyController(replyService, postsService, $state, $stateParams) {
                this.replyService = replyService;
                this.postsService = postsService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.postId = $stateParams["id"];
                this.getPost();
            }
            CreateReplyController.prototype.getPost = function () {
                console.log(this.post);
                this.post = this.postsService.getPost(this.postId);
            };
            CreateReplyController.prototype.getReply = function (id) {
                this.reply = this.replyService.getReply(id);
            };
            CreateReplyController.prototype.saveReply = function (data) {
                var _this = this;
                this.reply.postId = this.postId;
                this.replyService.saveReply(this.reply).then(function (data) {
                    _this.$state.go("posts");
                });
            };
            CreateReplyController.prototype.saveReply1 = function (data) {
                var _this = this;
                debugger;
                this.getReply(this.replyId);
                this.reply.postId = this.postId;
                this.reply.replyId = this.replyId;
                this.replyService.saveReply(this.reply).then(function (data) {
                    _this.$state.go("posts");
                });
            };
            CreateReplyController.prototype.cancel = function () {
                this.$state.go("posts");
            };
            return CreateReplyController;
        }());
        Controllers.CreateReplyController = CreateReplyController;
    })(Controllers = HiP4.Controllers || (HiP4.Controllers = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=createReplyController.js.map