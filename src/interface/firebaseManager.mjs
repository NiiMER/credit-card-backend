import config from "config";
import firebase from "firebase/app";
import "firebase/database";

const { apiKey, databaseURL, projectId } = config.get("firebase.config");
let firebaseApp, db;

/**
 * @object {Object} firebaseManager object to provide operational functions for firebase
 */
const firebaseManager = {
  /**
   * Function to initialize the firebase application
   */
  initFirebase: () => {
    firebaseApp = firebase.initializeApp({ apiKey, databaseURL, projectId });
    db = firebase.database();
  },
  /**
   * Function to add cards to the database.
   * @param cardDetail {object} Object to insert to the database by fields
   * @param cardDetail.cardName {object} Card holder name
   * @param cardDetail.cardNumber {object} Card Number
   * @param cardDetail.limit {object} Card limit amount
   */
  addCreditCardDetails: (cardName = "", cardNumber = "", limit = 0) =>
    db.ref(`credit-card-storage/${cardDetail.cardNumber}`).set({
      cardName,
      cardNumber,
      limit
    }),
  /**
   * Function to get the cards.
   */
  getCreditCardDetails: async () => {
    const snapshot = await db.ref("credit-card-storage").once("value");
    return snapshot.val() || [];
  },
  /**
   * Function to get the firebaseApp instance
   * @returns {object} The instance of the firebaseApp
   */
  getfirebaseApp: () => firebaseApp
};

export default firebaseManager;
