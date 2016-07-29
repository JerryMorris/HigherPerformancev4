namespace HiP4.Controllers {

    export class CreatePostController {
        public post;
        constructor(private postsService: HiP4.Services.PostsService,
            private $state: angular.ui.IStateService){
        }

        savePost() {
            this.postsService.savePost(this.post).then(() => {
                this.$state.go("posts");
                
            });
            
        }
       
        cancel() {
            this.$state.go("posts");
            
        }

    }



}