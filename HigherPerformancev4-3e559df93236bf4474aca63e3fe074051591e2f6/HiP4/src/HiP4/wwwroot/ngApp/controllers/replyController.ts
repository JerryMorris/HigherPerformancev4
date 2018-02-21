namespace HiP4.Controllers {

    export class ReplyController {
        public reply;
        public replyVm: any;
        public postId;
        public post;
        constructor(
            private replyService: HiP4.Services.ReplyService,
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
            debugger;
            this.reply.postId = this.postId;
            this.replyService.saveReply(this.reply).then(() => {
                this.$state.go("posts");

            });

        }

        cancel() {
            this.$state.go("posts");

        }

    }


}