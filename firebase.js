var firebaseConfig = {
  apiKey: "AIzaSyBuTbb8sSyl3D5hYGkn4h6ck6vi6q3Ss-U",
  authDomain: "todo-793c1.firebaseapp.com",
  projectId: "todo-793c1",
  storageBucket: "todo-793c1.appspot.com",
  messagingSenderId: "908839452548",
  appId: "1:908839452548:web:81659bb7abcf801caee7d1",
  measurementId: "G-1P28FG014K",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
