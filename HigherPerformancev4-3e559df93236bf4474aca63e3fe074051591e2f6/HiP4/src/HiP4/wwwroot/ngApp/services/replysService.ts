namespace HiP4.Services
{

    export class ReplyService
    {
        private replyResource;


        constructor($resource: ng.resource.IResourceService)
        {
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
                },
                getPostReplies: {
                    method: 'GET',
                    url: '/api/replies/getpostreplies',
                    isArray: true
                },
                getRepliesToReply: {
                    method: 'GET',
                    url: '/api/replies/getrepliestoreply',
                    isArray: true
                },
                getReply: {
                    method: 'GET',
                    url: '/api/replies/getreply/:id',
                    isArray: true
                },
                saveReplyToReply: {
                    method: 'POST',
                    url: '/api/replies/savereplytoreply',
                },
                update: {
                    method: 'PUT',
                    url: '/api/replies/put'
                } 

            });
        }

        updateReply(data)
        {
            debugger;
            return this.replyResource.update(data).$promise;
        }

        getActiveReplies()
        {
            return this.replyResource.getActiveReplies();
        }

        getUserReplies()
        {
            return this.replyResource.getUserReplies();

        }

        getRepliesToReply(id)
        {
            debugger;
            return this.replyResource.getRepliesToReply({id });
        }

        getAllReplies()
        {
            return this.replyResource.getAllReplies();
        }

        getPostReplies(id)
        {

            return this.replyResource.getPostReplies({ id });
        }

        getReply(id)
        {
            debugger;
            return this.replyResource.getReply(id);
        }
        //CRUD-Create
        saveReply(data)
        {
            debugger;
            return this.replyResource.save(data).$promise;

        }
        saveReplyToReply(data)
        {
            debugger;
            return this.replyResource.saveReplyToReply(data);
        }

        //CRUD-Read
        getReplies()
        {
            return this.replyResource.query();
        }

        //CrUD Update

        //CRUD-Delete
        deleteReply(replyId)
        {
            return this.replyResource.delete({ id: replyId }).$promise;

        }

    }
    angular.module('HiP4').service('replyService', ReplyService);

}