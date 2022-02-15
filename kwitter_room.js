
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDLQCH1TKKpJB4vWWXSWzPP4g5g5c0CV0Y",
      authDomain: "kwitter-9767d.firebaseapp.com",
      projectId: "kwitter-9767d",
      storageBucket: "kwitter-9767d.appspot.com",
      messagingSenderId: "62050862432",
      appId: "1:62050862432:web:d9d2b687fe2d1fdd2c8a05"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML= "Welcome "+user_name+"!";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose - "adding room name"});
localStorage.setItem("room_name",room_name);
window.location("kwitter_page.html");
    }


    function getData()
     
    {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;


    console.log("Room name : "+Room_name);
    row="<div class='room_name'id="+Room_names+"onclick='RedirectToRoomName(this.id)'>"#"+ Room_names +"</div> 
    <hr></hr>
    document.getElementById("output").innerHTML+=row
    function RedirectToRoomName(name)
    {
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location = "kwitter_page.html";
    }
    function  logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }
      function send()
      {
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
           });
           document.getElementById("msg").value="";
      }
      });});}
getData();
