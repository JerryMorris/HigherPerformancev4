namespace HiP4.Services {

    export class PostsService {
        private postResource;
        private replyResource;
        constructor($resource: ng.resource.IResourceService) {
            this.postResource = $resource('/api/posts/:id', null, {
                getActivePosts: {
                    method: 'GET',
                    url: '/api/posts/getactiveposts',
                    isArray: true
                },
                getUserPosts: {
                    method: 'GET',
                    url: '/api/post/getuserposts'
                   
                   
                },
                getAllPosts: {
                    method: 'GET',
                    url: '/api/posts/getallposts',
                    isArray: true
                },
                getPost: {
                    method: 'GET',
                    url: '/api/posts/getpost/:id',
                    isArray: true
                }

            });
            this.replyResource = $resource('/api/replies/:id', null, {

                getAllReplies: {
                    method: 'GET',
                    url: '/api/replies/getallreplies',
                    isArray: true
                },

                getUserReplies: {
                    method: 'GET',
                    url: '/api/replies/getuserreplies',
                    isArray: true
                }
            }
            );
        }

        getActivePosts() {
            return this.postResource.getActivePosts();
        }

        getUserPosts() {
            return this.postResource.getUserPosts();

        }

        getAllPosts() {
            return this.postResource.getAllPosts();
        }
        getAllReplies() {
            return this.replyResource.getAllReplies();
        }
        getUserReplies() {
            return this.replyResource.getUserReplies();

        }

        //CRUD-Create
        savePost(data) {
            console.log(data);
            return this.postResource.save(data).$promise;
        }
       
        saveReply(data) {
            debugger;
            return this.replyResource.save(data).$promise;

        }
        //CRUD-Read
        getPosts() {
            return this.postResource.query();
        }
        getReplies(id) {
            return this.replyResource.get({ id: id });
        }
        getPost(postId) {

            return this.postResource.get({ id: postId });
        }
        //CrUD Update

        postToEdit(data) {
            return this.postResource.save(data).$promise;
        }

        //CRUD-Delete
        deletePost(postsId) {
            return this.postResource.delete({ id: postsId }).$promise;

        }

    }
    angular.module('HiP4').service('postsService', PostsService);

}