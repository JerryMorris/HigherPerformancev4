namespace HiP4.Controllers {

    export class PostsController {
        public post;
        public reply;
        public postId;



        constructor(private postsService: HiP4.Services.PostsService) {
            this.post = postsService.getActivePosts();
        }
        public getActivePost() {
            this.post = this.postsService.getActivePosts();
        }
    }
    export class UserPostController {
        public post;
        public reply;
        constructor(private postsService: HiP4.Services.PostsService) {
            this.post = postsService.getUserPosts();
            this.reply = postsService.getUserReplies();
        }
        public getUserPosts() {
            this.post = this.postsService.getUserPosts();
           
        }
        public getUserReplies() {
            this.reply = this.postsService.getUserReplies();
        }
    }

    export class AdminPostController {
        public post;
        public reply;

        constructor(private postsService: HiP4.Services.PostsService)
        {
            this.post = postsService.getAllPosts();
            this.reply = postsService.getAllReplies();
        }
        public getAllPosts(postId) {
            this.post = this.postsService.getAllPosts();
        }
        public getAllReplies() {
            this.reply = this.postsService.getAllReplies();
        }

    }

}

