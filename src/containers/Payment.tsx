import React, { useContext } from 'react'
import { ButtonStylingOptions, OnCaptureData, PayPalButton, PaypalOptions } from 'react-paypal-button'
import { useHistory } from 'react-router'
import AppContext from '../context/AppContext'
import { Product } from '../interfaces/interfaces'
import '../styles/components/Payment.css'


export const Payment = () => {

    const { state, addNewOrder } = useContext(AppContext)

    const { cart, buyer }  =  state

    const history = useHistory()

    const handleSumTotal = () => {
        const reducer = (accumulator: number, currentValue: Product) => {
            return accumulator + currentValue.price
        }
        const sum = cart.reduce(reducer, 0)
        return sum
    }

    const handlePaymentSuccess = (data: OnCaptureData) => {
        console.log(data)
        if(data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder( newOrder )
            history.push('/checkout/success')
        }

    }

    const paypalOptions = {
        clientId: 
        'AUt3hOE4Agcx8EzZhDQwceLuRRQWbuS89xfHKLHoTjGaodWcOqCpKI1fJ-PCszCOSldjg6_3dUS5cgo-',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del Pedido:</h3>
                {
                    cart.map((product) => (
                        <div className="Payment-item" key={product.title}>
                           <div className="Payment-element">
                                <h4>{ product.title }</h4>
                                <span>
                                    $ { product.price }
                                </span>
                           </div>
                        </div>
                    ))
                }
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={ paypalOptions as PaypalOptions}
                        buttonStyles={ buttonStyles as ButtonStylingOptions }
                        amount={ handleSumTotal() }
                        onPaymentStart={ () => console.log('Start Payment') }
                        onPaymentSuccess={ data => handlePaymentSuccess(data) }
                        onPaymentError={ error => console.log (error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
        </div>
    )
}
