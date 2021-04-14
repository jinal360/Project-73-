import * as firebase from "firebase";
require("@firebase/firestore");


var firebaseConfig = {
 apiKey: "AIzaSyCXWMMX20I3dTVTVAcp4nlj6sfXT1ZZxK0",
 authDomain: "story-hub-a903e.firebaseapp.com",
 projectId: "story-hub-a903e",
 storageBucket: "story-hub-a903e.appspot.com",
 messagingSenderId: "417613973795",
 appId: "1:417613973795:web:885d29bb044437f8f4a496"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();