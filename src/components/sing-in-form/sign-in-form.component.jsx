import {useState} from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDatabaseFromAuth } from "../../units/firebase/firebase.units";
import './sign-in-form.scss';

const defaultFormFields={
    email: '',
    password: '',
}
function SignInForm() {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef= await createUserDatabaseFromAuth(user);
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
       const response= await signInAuthUserWithEmailAndPassword(email, password)
         console.log(response);
      
        }catch(error){
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong password');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.log(error);
            }
            console.log('error', error.message);
        }
        
    }
  return (
    <div className='sign-up-container'>
         <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
        <Button onSubmit={handleSubmit} type="submit">Sign In</Button>
        <Button type='button' buttonType="google"  onClick={logGoogleUser}>Sign In With Google</Button>
        </div>

      </form>
    </div>
  );
}

export default SignInForm;
