import {useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'
import './navigation.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {signOutUser} from '../../units/firebase/firebase.units'


function Navigation() {
    const {currentUser} = useContext(UserContext);
    const signOutHandler = async() => {
        await signOutUser();
    }
  return (

      <>
         <div className='navigation'>
             <Link className='logo-container' to='/'>
                <Logo />
             </Link>
             <div className='nav-links-container'>
                 <Link className='nav-link' to='/shop'>SHOP</Link>

                 {currentUser ? (
                     <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
                 ):(
                      <Link className='nav-link' to='/auth'>SIGN IN</Link>
                 )}
                
             </div>
         </div>
            <Outlet />
      </>
 
  )
}

export default Navigation