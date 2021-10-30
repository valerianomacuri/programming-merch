import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'

import '../styles/components/Header.css'

export const Header = () => {

    const { state } = useContext(AppContext)

    const { cart } = state

    return (
        <div className="Header">
            <h1 className="Header-title">
                <Link to="/">
                    Programming Merch
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className='bx bx-cart bx-md bx-tada-hover'></i>
                </Link>
                {
                    ( cart.length > 0 ) && <div className="Header-alert">{ cart.length }</div> 
                }
            </div>
        </div>
    )
}
