namespace HiP4.Services {

    export class UserService {
        public userResource;


        constructor($resource: ng.resource.IResourceService) {
            this.userResource = $resource('/api/user/:id');

        }

        addUser(data) {
            debugger;
            return this.userResource.save(data).$promise;
            
            }


        }
    angular.module('HiP4').service('userService', UserService);
    }



