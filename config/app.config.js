// const firebase = require("firebase");
// const firebaseConfig = {
//     apiKey: "AIzaSyBVfsdhLlWJpj5waOYmuEB7ddsrgnccojI",
//     authDomain: "chaibunf-311ce.firebaseapp.com",
//     projectId: "chaibunf-311ce",
//     storageBucket: "chaibunf-311ce.appspot.com",
//     messagingSenderId: "1054568346467",
//     appId: "1:1054568346467:web:717d623b32285a469f9956",
//     measurementId: "G-CHYQ1VW1ZZ"
//   };
//     firebase.initializeApp(firebaseConfig);
//     const db = firebase.firestore();
//     const Category = db.collection("Category");
//     module.exports= Category;

const MONGO_DB_CONFIG = {
  DB: "mongodb://localhost/27017",
  PAGE_SIZE: 10,
};

module.exports = {
  MONGO_DB_CONFIG,
};