namespace HiP4.Controllers {

    export class PostEditController {
        public post;
        private postId;

        constructor(private postsService: HiP4.Services.PostsService,
            private $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService) {
            this.postId = $stateParams["id"]
            this.getPost();
        }
        getPost() {
            this.post = this.postsService.getPost(this.postId);
        }


        savePost() {
            this.postsService.savePost(this.post).then(() => {
                this.$state.go("posts");

            });

        }
        postToEdit() {
            console.log(this.post);
            this.postsService.postToEdit(this.post).then(() => {
                this.$state.go("user");

            });
        }

        deletePost(postId) {
            this.postsService.deletePost(this.postId).then(() => {
                this.$state.go("user");
            });
        }
        cancel() {
            this.$state.go("posts");
        }
    }
}




