namespace HiP4.Services {

    export class TopicsService {

        private topicResource;

        constructor($resource: ng.resource.IResourceService)
        {
            this.topicResource = $resource('/api/topics/:id', null);
        }

        public listTopics()
        {
            debugger;
            return this.topicResource.query();
        }

        //public savePosts(make) {
        //    return this.topicResource.save(make).$promise;
        //}
    }
    angular.module('HiP4').service('topicsService', TopicsService);
}