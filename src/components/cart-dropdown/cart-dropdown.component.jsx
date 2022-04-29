import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";
import { Link } from "react-router-dom";

function CartDropdown() {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem cartItem={item} />;
        })}
      </div>
      <Link to="/cart">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
}

export default CartDropdown;
