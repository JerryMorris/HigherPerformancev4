namespace HiP4.Controllers {

    export class PostsController {
        public post;
        public reply;
        public postId;
        public replies;



        constructor(private postsService: HiP4.Services.PostsService,
            private replyService: HiP4.Services.ReplyService, $stateParams: angular.ui.IStateParamsService,
            private $state: angular.ui.IStateService) {
            this.postId = $stateParams['id'];
            this.post = postsService.getActivePosts();
            this.replyService.getPostReplies(this.postId);
        }
        public getActivePost() {
            debugger;
            this.post = this.postsService.getActivePosts();
        }

        public getPostReplies(id) {
            debugger;
            this.replies = this.replyService.getPostReplies(this.postId);
        }
    }
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

    export class AdminPostController {
        public post;
        public reply;

        constructor(private postsService: HiP4.Services.PostsService,
            private replyService: HiP4.Services.ReplyService)
        {
            this.post = postsService.getAllPosts();
            this.reply = replyService.getAllReplies();
        }
        public getAllPosts(postId) {
            this.post = this.postsService.getAllPosts();
        }
        public getAllReplies() {
            this.reply = this.replyService.getAllReplies();
        }

    }

}

