import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from '../components/Layout'
import { Checkout } from '../containers/Checkout'
import { Home } from '../containers/Home'
import { Information } from '../containers/Information'
import { NotFound } from '../containers/NotFound'
import { Payment } from '../containers/Payment'
import { Success } from '../containers/Success'

import { useInitialState } from '../hooks/useInitialState'


import Context from '../context/AppContext'

export const Router = () => {

    const initialState = useInitialState()

    return (
        <Context.Provider
            value={initialState}
        >
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/checkout/success" component={Success} />
                        <Route exact path="/checkout/payment" component={Payment} />
                        <Route exact path="/checkout/information" component={Information} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Context.Provider>
    )
}
