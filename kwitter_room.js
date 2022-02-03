
const firebaseConfig = {
      apiKey: "AIzaSyAuPDFgrZSF46A-E3NPkTssGCeI1ZsHJQc",
      authDomain: "kwitterapp-25930.firebaseapp.com",
      databaseURL: "https://kwitterapp-25930-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-25930",
      storageBucket: "kwitterapp-25930.appspot.com",
      messagingSenderId: "380767064887",
      appId: "1:380767064887:web:50e5fabdba9602eccd00b2"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
