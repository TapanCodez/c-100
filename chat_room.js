var firebaseConfig = {
    apiKey: "AIzaSyATSizZW8nmuCDQHxs7AUKkTKM8qc6EtIU",
    authDomain: "lets-chat-web-app-60aba.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-60aba-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-60aba",
    storageBucket: "lets-chat-web-app-60aba.appspot.com",
    messagingSenderId: "860173702157",
    appId: "1:860173702157:web:2db048d66e16575ec8f144"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   //ADD YOUR FIREBASE LINKS
   
   user_name = localStorage.getItem("user_name");
   
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
   
   function addRoom()
   {
     room_name = document.getElementById("room_name").value;
   
     firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
     });
   
       localStorage.setItem("room_name", room_name);
       
       window.location = "kwitter_page.html";
   }
   
   function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
       });
     });
   
   }
   
   getData();
   
   function redirectToRoomName(name)
   {
     console.log(name);
     localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
   }
   
   function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
       window.location = "index.html";
   }