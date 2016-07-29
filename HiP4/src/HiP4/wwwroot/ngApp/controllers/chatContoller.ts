namespace HiP4.Controllers {

    export class ChatController {
        public userName;
        public channel;
        public friends;
        public message;
        public users;
        public user;
        public userId;
        public firebaseUser;
        public ref;
        public messageKey;

        constructor(private firebaseService: HiP4.Services.FirebaseService) {
            this.getMessages();
            this.users = [];
            this.channel = [];
            this.friends = [];
            this.firebaseUser = {};

           
            //this.ref = new Firebase("https://project-2069581429948631829.firebaseio.com/users");
        }

        sendMessage() {
            debugger;
            
            
            this.messageKey = firebase.database().ref().child('message').push().key;
            let updates = {};
            updates["/message/" + this.messageKey ] = this.message;
            updates["/users/" + this.user + this.messageKey]  = this.message;
            return firebase.database().ref().update(updates);
            
        }

        getUsers() {

            this.user = firebase.auth().currentUser;
            console.log(this.user);
               
        }
        userMessage() {
            debugger;
            this.getUsers();
            //this.user = firebase.database().ref().child('users');
            let updates = {};

            updates["/users" + this.user + this.messageKey] = this.message;
            //updates[ + messageKey]  = this.message;
            return firebase.database().ref().update(updates);

        }


    

        getMessages() {
            
            this.getUsers();
            firebase.database().ref("/message/").on('child_added', (snapshot) => {
                var msg = snapshot.val();
                 {

                    var msgUsernameElement = document.createElement("b");
                    msgUsernameElement.textContent = msg.username;

                    var msgTextElement = document.createElement("p");
                    msgTextElement.textContent = msg.text;

                    var msgElement = document.createElement("div");
                    msgElement.appendChild(msgUsernameElement);
                    msgElement.appendChild(msgTextElement);

                    msgElement.className = "msg";
                    document.getElementById("results").appendChild(msgElement);
                }
            });
           
        }
        


    }

}

