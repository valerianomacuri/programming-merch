import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { Product } from '../interfaces/interfaces'

import '../styles/components/Checkout.css'

export const Checkout = () => {

    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state

    const handleSumTotal = () => {
        const reducer = (accumulator: number, currentValue: Product) => {
            return accumulator + currentValue.price
        }
        const sum = cart.reduce(reducer, 0)
        return sum
    }

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>
                    { cart.length > 0 ? 'Lista de Pedidos:' : 'No hay pedidos' }
                </h3>
                {
                    cart.map((product) => (
                        <div className="Checkout-item">
                            <div className="Checkout-element">
                                <h4>{ product.title }</h4>
                                <span>$ {product.price }</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => removeFromCart(product)}
                            >
                                <i className='bx bx-trash bx-sm'></i>
                            </button>
                        </div>
                    ))
                }
            </div>
            {
                cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
                        <Link to="/checkout/information">
                            <button type="button">Continuar Pedido</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
