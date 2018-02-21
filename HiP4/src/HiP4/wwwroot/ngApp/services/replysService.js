var HiP4;
(function (HiP4) {
    var Services;
    (function (Services) {
        var ReplyService = (function () {
            function ReplyService($resource) {
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
            ReplyService.prototype.updateReply = function (data) {
                debugger;
                return this.replyResource.update(data).$promise;
            };
            ReplyService.prototype.getActiveReplies = function () {
                return this.replyResource.getActiveReplies();
            };
            ReplyService.prototype.getUserReplies = function () {
                return this.replyResource.getUserReplies();
            };
            ReplyService.prototype.getRepliesToReply = function (id) {
                debugger;
                return this.replyResource.getRepliesToReply({ id: id });
            };
            ReplyService.prototype.getAllReplies = function () {
                return this.replyResource.getAllReplies();
            };
            ReplyService.prototype.getPostReplies = function (id) {
                return this.replyResource.getPostReplies({ id: id });
            };
            ReplyService.prototype.getReply = function (id) {
                debugger;
                return this.replyResource.getReply(id);
            };
            //CRUD-Create
            ReplyService.prototype.saveReply = function (data) {
                debugger;
                return this.replyResource.save(data).$promise;
            };
            ReplyService.prototype.saveReplyToReply = function (data) {
                debugger;
                return this.replyResource.saveReplyToReply(data);
            };
            //CRUD-Read
            ReplyService.prototype.getReplies = function () {
                return this.replyResource.query();
            };
            //CrUD Update
            //CRUD-Delete
            ReplyService.prototype.deleteReply = function (replyId) {
                return this.replyResource.delete({ id: replyId }).$promise;
            };
            return ReplyService;
        }());
        Services.ReplyService = ReplyService;
        angular.module('HiP4').service('replyService', ReplyService);
    })(Services = HiP4.Services || (HiP4.Services = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=replysService.js.map