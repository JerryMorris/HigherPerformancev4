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
            this.fierbaseLogin();
            this.accountService.login(this.loginUser).then(() => {
                this.$location.path('/');
            }).catch((results) => {
                this.validationMessages = results;
            });
        }
        fierbaseLogin() {

            let self = this; //avoids closure
            firebase.auth().signInWithEmailAndPassword(this.loginUser.email, this.loginUser.password).then(() => {
                console.log("login succeeded");
                self.check();
            }).catch((error) => {
                console.log(error.code + " " + error.message);
            });
        }

        check() {

            firebase.datebase().ref("users").on("value", (snapshot) => {
                console.log(snapshot.val());
            })

        }

        constructor(private accountService: HiP4.Services.AccountService, private $location: ng.ILocationService, private firebaseService: HiP4.Services.FirebaseService) { }
    }


    export class RegisterController {
        public registerUser;
        public validationMessages;
        public email;
        public password;
        public firebaseUser;
        public userKey;
        public user;
        public ref: any;


        public register() {
            this.firebaseRegister();
            this.addFirebaseUser();
            this.addUser();
            this.accountService.register(this.registerUser).then(() => {
                this.$location.path('/');
            }).catch((results) => {
                this.validationMessages = results;
            });
        }

        firebaseRegister() {
            this.email = this.registerUser.email;
            this.password = this.registerUser.password;
            this.userKey = firebase.database().ref().child('users').push.key;
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function (error) {
                // Handle Errors here.

                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });


        }

        addFirebaseUser() {
            this.userKey = firebase.database().ref().child('users').push().key;
            //let userKey = firebase.database().ref().child('users').push.key;
            let updates = {};
            updates["/users/" + this.userKey] = this.registerUser;
            return firebase.database().ref().update(updates);

        }
        addUser() {
            debugger;
            this.user.email = this.registerUser.email;
            this.user.password = this.registerUser.password;
            this.user.userName = this.registerUser.userName;
            this.user.firebaseKey = this.userKey;
            this.userService.saveUser(this.user);
            console.log(this.user);

        }

        constructor(private accountService: HiP4.Services.AccountService, private $location: ng.ILocationService, private firebaseService: HiP4.Services.FirebaseService, private userService: HiP4.Services.UserService) {
            this.ref = new Firebase("https://project-2069581429948631829.firebaseio.com/users");
            console.log(this.userKey);
        }
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
