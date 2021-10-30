import React, { ReactNode } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

import '../styles/components/Layout.css'

type Props = {
    children?: ReactNode
}

export const Layout = ({ children }:Props) => {
    return (
        <div className="Main">
            <Header />
            { children }
            <Footer />
        </div>
    )
}
