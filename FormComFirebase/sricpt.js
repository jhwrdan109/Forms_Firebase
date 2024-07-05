
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD1hwcLf0XIiRcuHB9jpNKfm371zEvAp0I",
    authDomain: "forms-1077c.firebaseapp.com",
    projectId: "forms-1077c",
    storageBucket: "forms-1077c.appspot.com",
    messagingSenderId: "657303912810",
    appId: "1:657303912810:web:e6d89ca31be5edd3cae513",
    measurementId: "G-B6FXNVJSSK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){

  set(ref(db, 'user/'+ document.getElementById("username").value{

    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    PhoneNumber: document.getElementById("phone").value
  }))
  alert("Login Sucessful")
  })