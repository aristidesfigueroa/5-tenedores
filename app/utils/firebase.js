import firebase from "firebase.app";


const firebaseConfig = {
    apiKey: "AIzaSyDw77bLJ3mG20rAVGQlnAeBZa6ytGPTn_o",
    authDomain: "tenedores-38747.firebaseapp.com",
    databaseURL: "https://tenedores-38747.firebaseio.com",
    projectId: "tenedores-38747",
    storageBucket: "tenedores-38747.appspot.com",
    messagingSenderId: "156015951752",
    appId: "1:156015951752:web:2701d43514d7d7b824843d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);