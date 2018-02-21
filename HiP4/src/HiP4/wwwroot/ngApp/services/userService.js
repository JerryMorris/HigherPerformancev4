var HiP4;
(function (HiP4) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($resource) {
                this.userResource = $resource('/api/user/:id');
            }
            UserService.prototype.addUser = function (data) {
                debugger;
                return this.userResource.save(data).$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('HiP4').service('userService', UserService);
    })(Services = HiP4.Services || (HiP4.Services = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=userService.js.map