namespace HiP4.Controllers {

    export class CreateReplyController {
        public reply;
        public postId;
        public replyId;
        public post;

        constructor(private replyService: HiP4.Services.ReplyService,
            private postsService: HiP4.Services.PostsService,
            private $state: angular.ui.IStateService,
            private $stateParams: angular.ui.IStateParamsService
        ) {
           
            this.postId = $stateParams["id"];
            this.getPost();
        }
        getPost() {
            console.log(this.post);
            this.post = this.postsService.getPost(this.postId);
        }
        getReply(id) {
            this.reply = this.replyService.getReply(id);
        }

        saveReply(data) {
            
            this.reply.postId = this.postId;
            this.replyService.saveReply(this.reply).then((data) => {
                this.$state.go("posts")


            });

        }

        saveReply1(data) {
            debugger;
            this.getReply(this.replyId);
            this.reply.postId = this.postId;
            this.reply.replyId = this.replyId;
            this.replyService.saveReply(this.reply).then((data) => {
                this.$state.go("posts")


            });

        }
        cancel() {
            this.$state.go("posts");


        }

    }


}