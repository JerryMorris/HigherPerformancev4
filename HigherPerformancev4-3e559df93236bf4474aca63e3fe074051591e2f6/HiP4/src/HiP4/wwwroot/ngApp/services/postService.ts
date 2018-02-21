namespace HiP4.Services {

    export class PostsService {
        private postResource;
        
        constructor($resource: ng.resource.IResourceService) {
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
                    isArray:true
                    
                },
                update: {
                    method: 'PUT',
                    url: '/api/posts/put'
                } 

            });
           
        }

        updatePost(data)
        {
            debugger;
            return this.postResource.update(data).$promise;
        }
        getPostbyTopicId(topicId)
        {
            debugger;
            return this.postResource.getPostByTopicId({topicId });
        }

        getActivePosts() 
        {
            return this.postResource.getActivePosts();
        }

        getUserPosts()
        {
            debugger;
            return this.postResource.getUserPosts();

        }

        getAllPosts() {
            return this.postResource.getAllPosts();
        }
        

        //CRUD-Create
        savePost(data) {
            console.log(data);
            return this.postResource.save(data).$promise;
        }

        savePostLike() { }
       
        //CRUD-Read
        getPosts() {
            return this.postResource.query();
        }
       
        getPost(postId) {
            debugger;
            return this.postResource.getPost({ id: postId });
        }
        //CrUD Update

        postToEdit(data) {
            return this.postResource.save(data).$promise;
        }

        //CRUD-Delete
        deletePost(id) {
            return this.postResource.delete(id).$promise;

        }

    }
    angular.module('HiP4').service('postsService', PostsService);

}