namespace HiP4.Controllers {

    export class PostDetailController {
        public postId;
        public post;
        public reply;

        constructor(private postsService: HiP4.Services.PostsService,
            private replyService: HiP4.Services.ReplyService,
            private $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService)
        {
            this.postId = $stateParams["id"];
            //this.post = postsService.getPost(this.postId);
            this.getPost();
            
            
            this.reply = replyService.getActiveReplies();
        }

        getPost() {
            
            this.post = this.postsService.getPost(this.postId);
            
        }
        getActiveReplies(postId) {
            
            this.reply = this.replyService.getActiveReplies();

        }
        //saveReply(data, postId) {
        //    this.replyService.saveReply(data, postId)
        //        .then(() => {
        //            this.$state.go("posts")
        //                .catch((data) => {
        //                    console.log(data);
        //                });
        //        });
        //}
        cancel() {
            this.$state.go("posts");

        }
        
    }

    

}