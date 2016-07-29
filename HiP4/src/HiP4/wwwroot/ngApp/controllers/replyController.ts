namespace HiP4.Controllers {

    export class ReplyController {
        public reply;
        public replyVm: any;
        public postId;
        public post;
        constructor(
            private postsService: HiP4.Services.PostsService,
            private $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService) {
            this.replyVm = {};
            this.postId = $stateParams["id"];
            this.getPost();
        }

        getPost() {
            
            this.post = this.postsService.getPost(this.postId);
        }

        saveReply() {
            console.log(this.postId);
            this.replyVm.title = this.reply.title;
            this.replyVm.message = this.reply.message;
            this.replyVm.postId = this.postId;
            this.replyVm.isActive = "true";
            this.postsService.saveReply(this.replyVm).then(() => {
            this.$state.go("posts");

           });

       }

        cancel() {
            this.$state.go("posts");

        }

    }


}