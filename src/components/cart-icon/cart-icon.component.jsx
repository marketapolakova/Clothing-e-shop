import {useContext} from 'react'
import {ReactComponent as BagIcon} from '../../assets/shopping-bag.svg'
import {CartDropdownContext} from '../../contexts/cart-dropdown.context'
import './cart-icon.styles.scss'


function CartIcon() {
const {toggleFunction, cartItems} = useContext(CartDropdownContext);

const cartItemCount = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;}, 0);
  return (
    <div onClick={toggleFunction} className='cart-icon-container'>
<BagIcon className='shopping-icon' />
<span className='item-count'>{cartItemCount}</span>
    </div>
  )
}

export default CartIcon