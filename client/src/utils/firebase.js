import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBinosIr-4Pn26ayf7JJRGiIAHQLDp8sN8",
    authDomain: "react-app-pets.firebaseapp.com",
    projectId: "react-app-pets",
    storageBucket: "react-app-pets.appspot.com",
    messagingSenderId: "716499699205",
    appId: "1:716499699205:web:45e225af91a77767487e6c"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
      if(user) {
          console.log('Logged In: ');
          console.log(user);
      }else{
          console.log('Logged Out');
      }
  })
  
  export default firebase;

  export const auth = firebase.auth();

