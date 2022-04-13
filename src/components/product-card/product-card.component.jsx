import {useContext} from 'react'
import Button from '../button/button.component'
import './product-card.styles.scss'
import  { CartDropdownContext } from '../../contexts/cart-dropdown.context';

function ProductCard({currentProduct}) {
    const {name, price, imageUrl} = currentProduct;
    const {addItemToCart} = useContext(CartDropdownContext);
    const addToCart = () => {
        addItemToCart(currentProduct);
    }
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'> 
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addToCart} >Add to cart</Button>
    </div>
  )
}

export default ProductCard