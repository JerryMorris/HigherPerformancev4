namespace HiP4.Controllers {

    export class AccountController {
        public externalLogins;

        public getUserName() {
            return this.accountService.getUserName();
        }

        public getClaim(type) {
            return this.accountService.getClaim(type);
        }

        public isLoggedIn() {
            return this.accountService.isLoggedIn();
        }

        public logout() {
            this.accountService.logout();
            this.$location.path('/');
        }

        public getExternalLogins() {
            return this.accountService.getExternalLogins();
        }

        constructor(private accountService: HiP4.Services.AccountService, private $location: ng.ILocationService, private firebaseService: HiP4.Services.FirebaseService) {
            this.getExternalLogins().then((results) => {
                this.externalLogins = results;
            });
        }
    }

    angular.module('HiP4').controller('AccountController', AccountController);


    export class LoginController {
        public loginUser;
        public validationMessages;

        public login() {
            debugger;
            this.accountService.login(this.loginUser).then(() => {
                this.$location.path('/');
            }).catch((results) => {
                this.validationMessages = results;
            });
        }
        

        check() {

            firebase.datebase().ref("users").on("value", (snapshot) => {
                console.log(snapshot.val());
            })

        }

        constructor(private accountService: HiP4.Services.AccountService, private $location: ng.ILocationService) { }
    }


    export class RegisterController {
        public registerUser;
        public validationMessages;

        public register()
        {
            debugger;
            this.accountService.register(this.registerUser).then(() => {
                this.$location.path('/');
            }).catch((results) => {
                this.validationMessages = results;
            });
        }

        constructor(private accountService: HiP4.Services.AccountService, private $location: ng.ILocationService) { }
    }





    export class ExternalRegisterController {
        public registerUser;
        public validationMessages;

        public register() {
            this.accountService.registerExternal(this.registerUser.email)
                .then((result) => {
                    this.$location.path('/');
                }).catch((result) => {
                    this.validationMessages = result;
                });
        }

        constructor(private accountService: HiP4.Services.AccountService, private $location: ng.ILocationService) { }

    }

    export class ConfirmEmailController {
        public validationMessages;

        constructor(
            private accountService: HiP4.Services.AccountService,
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $location: ng.ILocationService
        ) {
            let userId = $stateParams['userId'];
            let code = $stateParams['code'];
            accountService.confirmEmail(userId, code)
                .then((result) => {
                    this.$location.path('/');
                }).catch((result) => {
                    this.validationMessages = result;
                });
        }

       

    }

     
           

}
