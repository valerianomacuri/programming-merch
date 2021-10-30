import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { Product } from '../interfaces/interfaces'

import '../styles/components/Products.css'


type Props = {
    product: Product
}

export const ProductItem = ({product}: Props) => {

    const {addToCart} = useContext(AppContext)

    return (
        <div className="Products-item">
            <img src={ product.image } alt={ product.title } />
            <div className="Product-item-info">
                <h2> 
                { product.title } - <span>$ { product.price }</span>
                </h2>
                <p>{ product.description }</p>
            </div>
            <button type="button" onClick={ () => addToCart(product) }>
                Comprar
            </button>
        </div>
    )
}
