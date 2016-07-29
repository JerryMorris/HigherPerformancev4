namespace HiP4.Services {

    export class UserService {
        public userResource;


        constructor($resource: ng.resource.IResourceService) {
            this.userResource = $resource('/api/user');

        }

        saveUser(data) {
            console.log(data);
            return this.userResource.save(data).$promise;
            
            }


        }

    }



