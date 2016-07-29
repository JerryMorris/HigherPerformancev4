namespace HiP4.Services {

    export class ReplyService {
        private replyResource;
        private postResource;
        
        constructor($resource: ng.resource.IResourceService) {
            this.replyResource = $resource('/api/replies', null, {
                getActiveReplies: {
                    method: 'GET',
                    url: '/api/replies/getactivereplies',
                    isArray: true
                },
                getUserReplies: {
                    method: 'GET',
                    url: '/api/replies/getuserreplies',
                    isArray: true
                },
                getAllReplies: {
                    method: 'GET',
                    url: '/api/replies/getallreplies',
                    isArray: true
                }
               
            });
            this.postResource = $resource('/api/posts/:id')
        }
        getActiveReplies() {
            return this.replyResource.getActiveReplies();
        }

        getUserReplies() {
            return this.replyResource.getUserReplies();

        }

        getAllReplies() {
            return this.replyResource.getAlReplies();
        }
        getPost(postId) {

            return this.replyResource.get({ id: postId });
        }
        //CRUD-Create
        saveReply(data, id) {
            debugger;
            return this.replyResource.save(data, id).$promise;
           
        }

        //CRUD-Read
        getReplies() {
            return this.replyResource.query();
        }
        
        //CrUD Update
       
        //CRUD-Delete
        deleteReply(replyId) {
            return this.replyResource.delete({ id: replyId }).$promise;

        }

    }
    angular.module('HiP4').service('replyService', ReplyService);

}