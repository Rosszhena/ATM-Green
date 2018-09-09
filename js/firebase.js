  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCJJz64KrrjJvfTuQkD3lYrQT-ZVj8oaX8",
    authDomain: "atm-green.firebaseapp.com",
    databaseURL: "https://atm-green.firebaseio.com",
    projectId: "atm-green",
    storageBucket: "atm-green.appspot.com",
    messagingSenderId: "739884084258"
  };

  firebase.initializeApp(config);
  const database = firebase.database();
