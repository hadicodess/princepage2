//YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDlNE6vgf9pydALNggis6rgAj2LGL_mN2k",
      authDomain: "kwitter-b5a25.firebaseapp.com",
      databaseURL: "https://kwitter-b5a25-default-rtdb.firebaseio.com",
      projectId: "kwitter-b5a25",
      storageBucket: "kwitter-b5a25.appspot.com",
      messagingSenderId: "713558592998",
      appId: "1:713558592998:web:47f97b7406f3300755da27",
      measurementId: "G-DSH5DJRB9G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
    room_name = localStorage.getItem("room_name"); 
    user_name = localStorage.getItem("user_name"); 
function send(){
      msg = document.getElementById("msg").value; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg, 
            like:0
      }); 
      document.getElementById("msg").value = ""; 
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 
function seclog(){
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location = "index.html"; 
    }
   