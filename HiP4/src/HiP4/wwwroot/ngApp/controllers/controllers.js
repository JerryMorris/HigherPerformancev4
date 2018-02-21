var HiP4;
(function (HiP4) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(postsService, replyService, $stateParams, $state) {
                this.postsService = postsService;
                this.replyService = replyService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.postId = this.$stateParams['id'];
                this.getUserPost();
                this.getPostReply();
            }
            HomeController.prototype.getUserPost = function () {
                debugger;
                this.post = this.postsService.getUserPosts();
            };
            HomeController.prototype.likePost = function () {
                var _this = this;
                this.post.likes = this.post.likes + 1;
                this.postsService.updatePost(this.post).then(function () {
                    _this.$state.go("home");
                });
            };
            HomeController.prototype.likeReply = function () {
                var _this = this;
                this.reply.likes = this.reply.likes + 1;
                this.replyService.updateReply(this.reply).then(function () {
                    _this.$state.go("home");
                });
            };
            HomeController.prototype.createReply = function () {
                var _this = this;
                debugger;
                this.replys.postId = this.postId;
                this.replys.isActive = true;
                this.replyService.saveReply(this.replys).then(function () {
                    _this.$state.reload();
                });
            };
            HomeController.prototype.getPostReply = function () {
                debugger;
                this.reply = this.replyService.getPostReplies(this.postId);
            };
            HomeController.prototype.replyToReply = function (id) {
                var _this = this;
                debugger;
                this.replys.replyId = id;
                this.replys.isActive = true;
                this.replyService.saveReply(this.replys).then(function () {
                    _this.$state.reload();
                });
            };
            HomeController.prototype.getRepliesToReply = function (id) {
                debugger;
                this.replied = this.replyService.getRepliesToReply(id);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var SecretController = (function () {
            function SecretController($http) {
                var _this = this;
                $http.get('/api/secrets').then(function (results) {
                    _this.secrets = results.data;
                });
            }
            return SecretController;
        }());
        Controllers.SecretController = SecretController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = HiP4.Controllers || (HiP4.Controllers = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=controllers.js.map