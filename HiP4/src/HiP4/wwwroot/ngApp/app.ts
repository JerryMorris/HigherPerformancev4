namespace HiP4 {

    angular.module('HiP4', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: HiP4.Controllers.TopicsController,
                controllerAs: 'controller'
            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: HiP4.Controllers.SecretController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: HiP4.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: HiP4.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: HiP4.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            })
            .state('posts', {
                url: '/posts',
                templateUrl: '/ngApp/views/posts.html',
                controller: HiP4.Controllers.TopicsController,
                controllerAs: 'controller'
            })
            .state('createPost', {
                url: '/posts/create',
                templateUrl: '/ngApp/views/createPost.html',
                controller: HiP4.Controllers.CreatePostController,
                controllerAs: 'controller'
            })
            .state('post/viewPost', {
                url: '/posts/viewPost/:id',
                templateUrl: '/ngApp/views/viewPost.html',
                controller: HiP4.Controllers.ViewPostController,
                controllerAs: 'controller'
            })
            .state('createReply', {
                url: '/posts/createReply/:id',
                templateUrl: '/ngApp/views/createReply.html',
                controller: HiP4.Controllers.CreateReplyController,
                controllerAs: 'controller'
            })
            //.state('replyToReply', {
            //    url: '/reply/replyToReply/:id',
            //    templateUrl: '/ngApp/views/replytoreply.html',
            //    controller: HiP4.Controllers.ReplyReplyController,
            //    controllerAs: 'controller'
            //})
            .state('post/delete', {
                url: '/posts/delete/:id',
                templateUrl: '/ngApp/views/delete.html',
                controller: HiP4.Controllers.DeletePostController,
                controllerAs: 'controller'
            })
            .state('post/edit', {
                url: '/posts/edit/:id',
                templateUrl: '/ngApp/views/postToEdit.html',
                controller: HiP4.Controllers.PostEditController,
                controllerAs: 'controller'
            })
            .state('user', {
                url: '/user',
                templateUrl: '/ngApp/views/user.html',
                controller: HiP4.Controllers.PostsController,
                controllerAs: 'controller'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: '/ngApp/views/admin.html',
                controller: HiP4.Controllers.AdminPostController,
                controllerAs: 'controller'
            })
            .state('Photo', {
                url: '/photo',
                templateUrl: '/ngApp/views/photoUpload.html',
                controller: HiP4.Controllers.PhotoController,
                controllerAs: 'controller'
            })
            
        //    .state('notFound', {
        //        url: '/notFound',
        //        templateUrl: '/ngApp/views/notFound.html'
        //    });

        //// Handle request for non-existent route
        //$urlRouterProvider.otherwise('/notFound');

        //Enable HTML5 navigation
        
        $locationProvider.html5Mode(true);
    });

    
    angular.module('HiP4').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('HiP4').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}
