var HiP4;
(function (HiP4) {
    var Services;
    (function (Services) {
        var FirebaseService = (function () {
            function FirebaseService() {
                this.config = {
                    apiKey: "AIzaSyBPitxblki26Md1FRJmnZ2slOdcxbjuMV4",
                    authDomain: "project-2069581429948631829.firebaseapp.com",
                    databaseURL: "https://project-2069581429948631829.firebaseio.com",
                    storageBucket: "project-2069581429948631829.appspot.com",
                };
                firebase.initializeApp(this.config);
                this.database = firebase.database();
            }
            return FirebaseService;
        }());
        Services.FirebaseService = FirebaseService;
        angular.module('HiP4').service('firebaseService', FirebaseService);
    })(Services = HiP4.Services || (HiP4.Services = {}));
})(HiP4 || (HiP4 = {}));
//# sourceMappingURL=firebaseSetup.js.map