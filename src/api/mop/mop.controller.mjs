import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp();

firebase
  .database()
  .ref("credit-card-storage/2")
  .set({
    cardName: "test2",
    cardNumber: 2222222222222,
    limit: 20
  });

firebase
  .database()
  .ref("credit-card-storage")
  .once("value")
  .then(snapshot => {
    console.log(snapshot.val()); // eslint-disable-line
  });
