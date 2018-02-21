var HiP4;
(function (HiP4) {
    var Services;
    (function (Services) {
        var PostsService = (function () {
            function PostsService($resource) {
                this.postResource = $resource('/api/posts/', null, {
                    getActivePosts: {
                        method: 'GET',
                        url: '/api/posts/getactiveposts',
                        isArray: true
                    },
                    getUserPosts: {
                        method: 'GET',
                        url: '/api/posts/getuserposts',
                        isArray: true
                    },
                    getAllPosts: {
                        method: 'GET',
                        url: '/api/posts/getallposts',
                        isArray: true
                    },
                    getPost: {
                        method: 'GET',
                        url: '/api/posts/getpost/:postid'
                    },
                    getPostByTopicId: {
                        method: 'GET',
                        url: '/api/posts/getpostbytopipcid/:topicid',
                        isArray: true
                    },
                    update: {
                        method: 'PUT',
                        url: '/api/posts/put'
                    }
                });
            }
            PostsService.prototype.updatePost = function (data) {
                debugger;
                return this.postResource.update(data).$promise;
            };
            PostsService.prototype.getPostbyTopicId = function (topicId) {
                debugger;
                return this.postResource.getPostByTopicId({ topicId: topicId });
            };
            PostsService.prototype.getActivePosts = function () {
                return this.postResource.getActivePosts();
            };
            PostsService.prototype.getUserPosts = function () {
                debugger;
                return this.postResource.getUserPosts();
            };
            PostsService.prototype.getAllPosts = function () {
                return this.postResource.getAllPosts();
            };
            //CRUD-Create
            PostsService.prototype.savePost = function (data) {
                console.log(data);
                return this.postResource.save(data).$promise;
            };
            PostsService.prototype.savePostLike = function () { };
            //CRUD-Read
            PostsService.prototype.getPosts = function () {
                return this.postResource.query();
            };
            PostsService.prototype.getPost = function (postId) {
                debugger;
                return this.postResource.getPost({ id: postId });
            };
            //CrUD Update
            PostsService.prototype.postToEdit = function (data) {
                return this.postResource.save(data).$promise;
            };
            //CRUD-Delete
            PostsService.prototype.deletePost = function (id) {
                return this.postResource.delete(id).$promise;
            };
            return PostsService;
        }());
        Services.PostsService = PostsService;
        angular.module('HiP4').service('postsService', PostsService);
    })(Services = HiP4.Services || (HiP4.Services = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=postService.js.map