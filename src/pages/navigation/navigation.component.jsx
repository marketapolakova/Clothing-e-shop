import {useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { UserContext } from '../../contexts/user.context'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import './navigation.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {signOutUser} from '../../units/firebase/firebase.units'


function Navigation() {
    const {currentUser} = useContext(UserContext);
const {currentState} = useContext(CartDropdownContext);

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
                    <CartIcon />
{currentState && <CartDropdown />}
  

                
                
             </div>
     
         </div>
            <Outlet />
      </>
 
  )
}

export default Navigation