import React, { useContext } from 'react'
import { ProductItem } from './ProductItem'

import '../styles/components/Products.css'

import AppContext from '../context/AppContext'

export const Products = () => {

    const { state } = useContext(AppContext)
    const { products } = state

    return (
        <div className="Products">
            <div className="Products-items">
                {
                    products.map(product => ( 
                        <ProductItem key= { product.id } product={ product } />
                    ))
                }
            </div>
        </div>
    )
}
