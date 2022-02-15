const firebaseConfig = {
      apiKey: "AIzaSyDLQCH1TKKpJB4vWWXSWzPP4g5g5c0CV0Y",
      authDomain: "kwitter-9767d.firebaseapp.com",
      projectId: "kwitter-9767d",
      storageBucket: "kwitter-9767d.appspot.com",
      messagingSenderId: "62050862432",
      appId: "1:62050862432:web:d9d2b687fe2d1fdd2c8a05"
    };
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
