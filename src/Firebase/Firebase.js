import firebase from "firebase";
import { credentials } from "./FirebaseCredentials";

// Config structure imported from FirebaseCredentials.js
// export const credentials = {
//   apiKey: "YOUR-DETAILS",
//   authDomain: "YOUR-DETAILS",
//   databaseURL: "YOUR-DETAILS",
// };

const config = credentials;

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();