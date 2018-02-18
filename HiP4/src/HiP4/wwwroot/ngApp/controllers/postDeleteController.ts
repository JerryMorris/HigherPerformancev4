namespace HiP4.Controllers {

    export class DeletePostController {
        public postId;

        constructor(private postService: HiP4.Services.PostsService, $stateParams: angular.ui.IStateParamsService) {
            this.postId = $stateParams["id"];
        }

        deletePost(id) {
            this.postService.deletePost(this.postId);

        

        }

    }
}