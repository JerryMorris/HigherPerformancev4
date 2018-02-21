namespace HiP4.Controllers
{



    export class TopicsController
    {
        public topicId;
        public topics;
        public topic = {};
        public postId;
        public posts;
        public post;
        public username;

        constructor(private topicsService: HiP4.Services.TopicsService,
            private postsService: HiP4.Services.PostsService,
            private $stateParams: ng.ui.IStateParamsService)
        {
            
            this.topicId = $stateParams['id'];
            this.getTopics();
            
            

        }

        public getTopics()
        {
            this.topic = this.topicsService.listTopics();
        }

        public getPostByTopicId(topicId)
        {
            this.posts = this.postsService.getPostbyTopicId(topicId.id);
        }

        

    }

    angular.module('HiP4').controller('TopicsController', TopicsController);
}
