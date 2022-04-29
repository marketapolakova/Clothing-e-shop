import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, quantity, imageUrl, price } = checkoutItem;
  const { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } =
    useContext(ShoppingCartContext);
  const removeFromCart = () => {
    removeItemFromCart(checkoutItem);
  };
  const increaseQuantityByOne = () => {
    increaseItemQuantity(checkoutItem);
  };
  const decreaseQuantityByOne = () => {
    decreaseItemQuantity(checkoutItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantityByOne}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseQuantityByOne}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={removeFromCart}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
