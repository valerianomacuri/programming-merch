import React, { useContext, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AppContext from '../context/AppContext'

import '../styles/components/Information.css'

export const Information = () => {

    const { state, addToBuyer } = useContext(AppContext)
    const { cart } = state

    const history = useHistory()

    const form = useRef(null as any)

    const handleSubmit = () => {
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer)

        history.push('/checkout/payment')
    }

    return (
        <div className="Information">
            <div className="Information-content">

                <div className="Information-head">
                    <h2>Información de Contacto:</h2>
                </div>

                <div className="Information-form">
                    <form ref={ form }>
                        <input type="text" placeholder="Nombre Completo" name="name" />
                        <input type="email" placeholder="email@example.com" name="email" />
                        <input type="text" placeholder="Dirección" name="address" />
                        <input type="text" placeholder="Apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Pais" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input type="text" placeholder="Codigo Postal" name="cp" />
                        <input type="text" placeholder="Telefono" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            <i className='bx bx-arrow-back bx-sm'></i>
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button
                            type="button"
                            onClick={ handleSubmit }
                        >
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {
                    cart.map((product) => (
                        <div className="Information-item" key={ product.title }>
                            <div className="Information-element">
                                <h4>{ product.title }</h4>
                                <span>$ {product.price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
