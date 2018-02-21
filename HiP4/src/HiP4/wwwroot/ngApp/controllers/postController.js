var HiP4;
(function (HiP4) {
    var Controllers;
    (function (Controllers) {
        var PostsController = (function () {
            function PostsController(postsService, replyService, $stateParams, $state) {
                this.postsService = postsService;
                this.replyService = replyService;
                this.$state = $state;
                this.postId = $stateParams['id'];
                this.post = postsService.getActivePosts();
                this.replyService.getPostReplies(this.postId);
            }
            PostsController.prototype.getActivePost = function () {
                debugger;
                this.post = this.postsService.getActivePosts();
            };
            PostsController.prototype.getPostReplies = function (id) {
                debugger;
                this.replies = this.replyService.getPostReplies(this.postId);
            };
            return PostsController;
        }());
        Controllers.PostsController = PostsController;
        //export class UserPostController {
        //    public post;
        //    public reply;
        //    constructor(private postsService: HiP4.Services.PostsService,
        //    private replyService: HiP4.Services.ReplyService)
        //    {
        //        this.post = postsService.getUserPosts();
        //        this.reply = replyService.getUserReplies();
        //    }
        //    public getUserPosts() {
        //        debugger;
        //        this.post = this.postsService.getUserPosts();
        //    }
        //    public getUserReplies() {
        //        this.reply = this.replyService.getUserReplies();
        //    }
        //}
        var AdminPostController = (function () {
            function AdminPostController(postsService, replyService) {
                this.postsService = postsService;
                this.replyService = replyService;
                this.post = postsService.getAllPosts();
                this.reply = replyService.getAllReplies();
            }
            AdminPostController.prototype.getAllPosts = function (postId) {
                this.post = this.postsService.getAllPosts();
            };
            AdminPostController.prototype.getAllReplies = function () {
                this.reply = this.replyService.getAllReplies();
            };
            return AdminPostController;
        }());
        Controllers.AdminPostController = AdminPostController;
    })(Controllers = HiP4.Controllers || (HiP4.Controllers = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=postController.js.map