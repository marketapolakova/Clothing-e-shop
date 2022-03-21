import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3k7eixUNzNGN-JeEr4ufcmieX34l4GfM",
  authDomain: "clothing-e-shop-dba15.firebaseapp.com",
  projectId: "clothing-e-shop-dba15",
  storageBucket: "clothing-e-shop-dba15.appspot.com",
  messagingSenderId: "794351343751",
  appId: "1:794351343751:web:b3445f749cc1a55a748022"
};


const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDatabaseFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userDoc = await getDoc(userDocRef);
    console.log(userDoc);
    console.log(userDoc.exists());

    if(!userDoc.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {displayName, email, createdAt});

        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userDocRef;
}
