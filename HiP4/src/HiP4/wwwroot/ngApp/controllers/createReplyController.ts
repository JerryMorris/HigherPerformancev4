namespace HiP4.Controllers {

    export class CreateReplyController {
        public reply;
        public postId;
        public post;
        
        constructor(private replyService: HiP4.Services.ReplyService,
            private postsService: HiP4.Services.PostsService,
            private $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService
        ) {
           this.postId = $stateParams["id"];
            this.getPost();
        }
        getPost() {
            console.log(this.post);
            this.post = this.replyService.getPost(this.postId);
        }

        //saveReply(data) {
            
        //    console.log(id, data);
        //    this.postsService.saveReply(id, data).then((data) => {
        //        this.$state.go("posts")
                   
               
        //    });

        //}

        cancel() {
            this.$state.go("posts");

        }

    }


}