const firebaseConfig = {
    apiKey: "AIzaSyC8rbAmIvjtsBibsd6qDrQJ5FPHlwHDsgY",
    authDomain: "letschat-2f3cb.firebaseapp.com",
    databaseURL: "https://letschat-2f3cb-default-rtdb.firebaseio.com",
    projectId: "letschat-2f3cb",
    storageBucket: "letschat-2f3cb.appspot.com",
    messagingSenderId: "431307118677",
    appId: "1:431307118677:web:fe181750b6ce6724d01cdc"
  };
  firebase.initializeApp(config);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function updateLike()
{
    console.log("click on like button - "+message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes
    });
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}