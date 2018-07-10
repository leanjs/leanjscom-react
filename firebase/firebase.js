import * as firebase from 'firebase'

const prodConfig = {
  apiKey: "AIzaSyCsWG5Li5llTR1Ey_s-IRGvMfrpYx3kbZE",
    authDomain: "leanjscom-react.firebaseapp.com",
    databaseURL: "https://leanjscom-react.firebaseio.com",
    projectId: "leanjscom-react",
    storageBucket: "",
    messagingSenderId: "218691722345"
};

const devConfig = {
  apiKey: "AIzaSyCsWG5Li5llTR1Ey_s-IRGvMfrpYx3kbZE",
    authDomain: "leanjscom-react.firebaseapp.com",
    databaseURL: "https://leanjscom-react.firebaseio.com",
    projectId: "leanjscom-react",
    storageBucket: "",
    messagingSenderId: "218691722345"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();

export {
  db,
  firebase
};
