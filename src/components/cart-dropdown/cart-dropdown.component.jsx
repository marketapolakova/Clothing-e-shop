import {useContext} from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import {CartDropdownContext} from '../../contexts/cart-dropdown.context'

function CartDropdown() {
    const {cartItems} = useContext(CartDropdownContext);
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items' > 
        {cartItems.map(item  => {
           return <CartItem cartItem={item} />
        })}
        </div>
        <Button>GO TO CHECKOUT</Button>

    </div>
  )
}

export default CartDropdown