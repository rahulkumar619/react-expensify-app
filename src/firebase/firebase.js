import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBc_Cb1IKZsix-WAZJv4PXFsy4SRB2U8zA",
  authDomain: "expensify-app-d6ab4.firebaseapp.com",
  databaseURL: "https://expensify-app-d6ab4.firebaseio.com",
  projectId: "expensify-app-d6ab4",
  storageBucket: "expensify-app-d6ab4.appspot.com",
  messagingSenderId: "477462377322",
  appId: "1:477462377322:web:b89f9ab21c7351189b6b13"
};

 firebase.initializeApp(config);

 const database = firebase.database();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {firebase,googleAuthProvider,database as default};





// database.ref('expenses').on('value', (snapshot) => {
//   const xpense = [];
//   snapshot.forEach((a) => {
//     xpense.push({
//       id:a.key,
//       ...a.val()

//     });

//   });
//  console.log(xpense);

// });





  // database.ref('expenses').push({
  //   description: 'hello',
  //   amount: 102225,
  //   createdAt:1000000
  // });
  // database.ref('expenses').push({
  //   description: 'phone',
  //   amount: 102225,
  //   createdAt:1000000
  // });
  // database.ref('expenses').push({
  //   description: 'mobile',
  //   amount: 102225,
  //   createdAt:1000000
  // });







//  database.ref()
//  .once("value")
//  .then((snapshot) => {
//    const val = snapshot.val();
//    console.log(val);

//  })
//  .catch((e) => {
//    console.log('error', e);
   
//  });
 
//  database.ref().set({
//   name: 'Rahul',
//   age: 21,
//   isSingle: 'yes',
//   location:{
//     city:'zirakpur',
//     state:'punjab'
//   },
//   job: {
//     company: 'SpaceX',
//     designation:'CEO'
//   },
//   stressLevel : 10

//  });

