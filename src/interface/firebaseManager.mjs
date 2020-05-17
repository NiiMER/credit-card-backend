import config from "config";
import firebase from "firebase";

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
   * @param cardName {string} Card holder name
   * @param cardNumber {string} Card Number
   * @param limit {number} Card limit amount
   */
  addCreditCardDetails: async (cardName = "", cardNumber = "", limit = 0) =>
    await db.ref(`credit-card-storage/${cardNumber}`).set({
      cardName,
      cardNumber,
      limit,
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
  getfirebaseApp: () => firebaseApp,
};

export default firebaseManager;
