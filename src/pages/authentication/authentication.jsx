import React from 'react'
import SignUpForm from '../../components/sin-up-form/sign-up-form.component'
import SignInForm from '../../components/sing-in-form/sign-in-form.component'
import './authentication.scss'


function SignIn() {
  return (
    <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
    </div>
  )
}

export default SignIn