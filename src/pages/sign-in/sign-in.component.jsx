import React from 'react'
import {signInWithGooglePopup, createUserDatabaseFromAuth} from '../../units/firebase/firebase.units'


function SignIn() {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef= await createUserDatabaseFromAuth(user);
    }
  return (
    <div>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  )
}

export default SignIn