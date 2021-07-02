
//ADD YOUR FIREBASE LINKS HERE 
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
    user_name = localStorage.getItem("user_name");
    console.log("user_name"); 
    document.getElementById("user_name").innerHTML = "welcome " +  user_name + "!"; 

    function addroom(){
      room_name = document.getElementById("room_name").value; 
    
      firebase.database().ref("/").child(room_name).update({
        perpose : "add room name"
      }); 
      localStorage.setItem("room_name", room_name); 
    
      window.location = "kwitter_page.html"; 
    }
       



    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room Name - " + Room_names); 
row = "<div class = 'room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; 
     //End code 
     });});}  

getData(); 

function redirectToRoomName(name) 
{
 console.log(name); 
 localStorage.setItem("room_name", name); 
 window.location = "kwitter_page.html"; 
}
function logout(){
  localStorage.removeItem("user_name"); 
  localStorage.removeItem("room_name"); 
  window.location = "index.html"; 
}

      