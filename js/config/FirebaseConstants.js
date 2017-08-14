import firebase from 'firebase';

let YERNConfig = {
  apiKey: "AIzaSyD2uRa-aBJAR5yR0O3PFtXWTW2R3iwkyI4",
  authDomain: "year-end-rn.firebaseapp.com",
  databaseURL: "https://year-end-rn.firebaseio.com",
  storageBucket: "year-end-rn.appspot.com"
};

let YERN = firebase.initializeApp(RNRSConfig);

export const YERNData = YERN.database();
export const YERNAuth = YERN.auth;
export const YERNStorage = YERN.storage();
