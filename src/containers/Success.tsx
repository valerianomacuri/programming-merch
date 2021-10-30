import React from 'react'
import '../styles/components/Success.css'

export const Success = () => {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Leo, gracias por tu pedido</h2>
                <span>Tu pedido llegara en tres días a tu dirección:</span>
                <div className="Success-map">
                    Google Maps
                </div>
            </div>
        </div>
    )
}
