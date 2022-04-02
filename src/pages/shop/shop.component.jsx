import React from 'react'
import {useContext} from 'react'
import {ProductContext} from '../../contexts/products.context'
import ProductCard from '../../components/product-card/product-card.component';
import './shop.scss'

function Shop() {
    const {currentProduct} = useContext(ProductContext);
  return (
<div className='product-container'>
    {currentProduct.map((product) => {
    return <ProductCard key={product.id} currentProduct={product} />
})}
</div>
  )
}

export default Shop