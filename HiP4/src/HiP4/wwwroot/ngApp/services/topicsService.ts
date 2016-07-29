namespace HiP4.Services {

    export class TopicsService {

        private topicResource;

        public listPosts() {
            return this.topicResource.query();
        }

        public savePosts(make) {
            return this.topicResource.save(make).$promise;
        }
    }
}