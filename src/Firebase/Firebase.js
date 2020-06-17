import firebase from "firebase";

// Config structure imported from FirebaseCredentials.js
// export const credentials = {
//   apiKey: "YOUR-DETAILS",
//   authDomain: "YOUR-DETAILS",
//   databaseURL: "YOUR-DETAILS",
// };
import { credentials } from "./FirebaseCredentials";

const config = credentials;

// create firebase connection
firebase.initializeApp(config);

// export authentication function
export const auth = firebase.auth;

// export database function
export const db = firebase.database();
