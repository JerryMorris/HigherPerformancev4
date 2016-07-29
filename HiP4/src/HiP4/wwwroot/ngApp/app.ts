namespace HiP4 {

    angular.module('HiP4', ['ui.router', 'ngResource', 'ui.bootstrap', 'firebase']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: HiP4.Controllers.HomeController,
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
            .state('post/details', {
                url: '/posts/details/:id',
                templateUrl: '/ngApp/views/postPage.html',
                controller: HiP4.Controllers.PostDetailController,
                controllerAs: 'controller'
            })
            .state('createReply', {
                url: '/posts/createReply/:id',
                templateUrl: '/ngApp/views/createReply.html',
                controller: HiP4.Controllers.ReplyController,
                controllerAs: 'controller'
            })
            .state('post/delete', {
                url: '/posts/delete/:id',
                templateUrl: '/ngApp/views/delete.html',
                controller: HiP4.Controllers.PostEditController,
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
                controller: HiP4.Controllers.UserPostController,
                controllerAs: 'controller'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: '/ngApp/views/admin.html',
                controller: HiP4.Controllers.AdminPostController,
                controllerAs: 'controller'
            })
            .state('chat', {
                url: '/chat',
                templateUrl: '/ngApp/views/chat.html',
                controller: HiP4.Controllers.ChatController,
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
