import {createContext, useState, useEffect} from 'react'
import SHOP_DATA from '../shop-data.json'

export const ProductContext = createContext({
    currentProduct: null,
    setCurrentProduct: () => null,
})

export const ProductProvider = ({children}) => {
    const [currentProduct, setCurrentProduct]= useState([])
    const value = {currentProduct, setCurrentProduct}
   
    useEffect(() => {
            setCurrentProduct(SHOP_DATA)
    },[]);
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}