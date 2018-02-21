declare let firebase: any;
declare let Firebase: any;
namespace HiP4.Services {

    export class FirebaseService {
        private database;

        constructor() {
            firebase.initializeApp(this.config);
            this.database = firebase.database();
        }

        private config = {
            apiKey: "AIzaSyBPitxblki26Md1FRJmnZ2slOdcxbjuMV4",
            authDomain: "project-2069581429948631829.firebaseapp.com",
            databaseURL: "https://project-2069581429948631829.firebaseio.com",
            storageBucket: "project-2069581429948631829.appspot.com",
        };
    }
    angular.module('HiP4').service('firebaseService', FirebaseService);
}

