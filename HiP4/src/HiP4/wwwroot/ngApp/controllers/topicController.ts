namespace HiP4.Controllers {



    export class TopicsController {
        public selectedTopic;
        public topics;
        public topic = [];
        public postId;
        public posts;

        public getPost() {
            this.$http.get('/api/posts/getactiveposts').success
                ((results) => {
                    this.posts = [];
                    for (let i in results) {
                        if (results[i].topicId == this.selectedTopic.id) {

                            this.posts.push(results[i]);
                           
                        }

                    }

                   

                });
            // it not sorting the data now category

        }

        public getTopics() {

            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].id == this.postId.category) {

                    this.topic = this.topic[i];

                }

            }

        }

        constructor(private $http: ng.IHttpService) {
            this.$http.get('/api/topics').success((results) => {
                this.topics = results;

            });

        }
    }


    angular.module('HiP4').controller('TopicsController', TopicsController);
}
