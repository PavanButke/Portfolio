import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD1OHDFGZCl9OMQgr2U8OPB_gQiALO-XhQ",
    authDomain: "resumebuilder-c0f5d.firebaseapp.com",
    projectId: "resumebuilder-c0f5d",
    storageBucket: "resumebuilder-c0f5d.appspot.com",
    messagingSenderId: "138623235840",
    appId: "1:138623235840:web:b221e090f2d69b1569a5e5"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();