// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE

function addUser()
{
    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name", user_name);

window.location = "chat_room.html";
}
