import {createContext, useState} from 'react'

const addCartItem = (cartItems, productToAdd) => {
  
   const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
if(existingCartItem) {
       return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
   }

    return  [...cartItems,{...productToAdd, quantity:1}]
        
  

}
export const CartDropdownContext = createContext({
    currentState: false,
    setCurrentState: () => false,
    cartItems: [],
    addItemToCart: () => {},
})

export const CartDropdownProvider = ({children}) => {
    const [currentState, setCurrentState]= useState(false)
    const [cartItems, setCartItems]= useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd)
        )
     
    }

    const toggleFunction = () => {
        setCurrentState(!currentState)
    }


    return <CartDropdownContext.Provider value={{currentState, toggleFunction, addItemToCart, cartItems}}>{children}</CartDropdownContext.Provider>
}