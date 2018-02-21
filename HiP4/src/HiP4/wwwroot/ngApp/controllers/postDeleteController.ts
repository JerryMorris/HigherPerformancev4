namespace HiP4.Controllers {

    export class DeletePostController {
        public postId;
        public post;

        constructor(private postsService: HiP4.Services.PostsService,
            private $state: angular.ui.IStateService,
            private $stateParams: angular.ui.IStateParamsService)
        {
            this.postId = $stateParams["id"];
            this.getPost();
        }

        getPost()
        {
            debugger;
            this.post = this.postsService.getPost(this.postId);
        }

        deletePost()
        {
            debugger;
            this.post.isActive = false;
            this.postsService.updatePost(this.post).then(() =>
            {
                this.$state.go("home");

            });
        }

        cancel()
        {
            this.$state.go("home");
        }

    }
}