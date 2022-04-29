import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./cart-page.styles.scss";

function CartPage() {
  const { cartItems } = useContext(ShoppingCartContext);

  const cartItemCount = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.price;
  }, 0);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Discription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} checkoutItem={item} />;
      })}
      <span className="total">Total: {cartItemCount}</span>
    </div>
  );
}

export default CartPage;
