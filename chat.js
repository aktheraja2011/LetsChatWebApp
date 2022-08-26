// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1riFhYgSdg5QcsbiaGb3zcheW96Mane8',
  authDomain: 'letschatwebapp-ace86.firebaseapp.com',
  projectId: 'letschatwebapp-ace86',
  storageBucket: 'letschatwebapp-ace86.appspot.com',
  messagingSenderId: '879096382936',
  appId: '1:879096382936:web:224aaf8ff4c6255cf89ead',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig)

function addUser() {
  user_name = document.getElementById('user_name').value
  firebase.database().ref('/').child(user_name).update({
    purpose: 'adding user',
  })
  /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
  localStorage.setItem('user_name', user_name)

  window.location = 'chat_room.html'
}
