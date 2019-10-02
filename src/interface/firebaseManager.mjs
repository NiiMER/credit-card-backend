import config from "config";
import firebase from "firebase/app";
import "firebase/database";

const { apiKey, databaseURL, projectId } = config.get("firebase.config");

let firebaseApp, db;

const firebaseManager = {
  initFirebase: () => {
    firebaseApp = firebase.initializeApp({ apiKey, databaseURL, projectId });
    db = firebase.database();
  },
  addCreditCardDetails: () =>
    db.ref("credit-card-storage/1").set({
      cardName: "test1",
      cardNumber: 111111111111111,
      limit: 10
    }),
  getCreditCardDetails: async () => {
    const snapshot = await db.ref("credit-card-storage").once("value");
    return snapshot.val() || [];
  }
};

export default firebaseManager;
