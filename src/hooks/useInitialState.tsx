import { useState } from 'react'
import initialState from '../initialState'
import { Order, Product } from '../interfaces/interfaces'



export const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = (payload: Product) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload: Product) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }

    const addToBuyer = (payload: any)=> {
        setState({
          ...state,
          buyer: [...state.buyer, payload]
        })
      }
    
    const addNewOrder = (payload: Order ) => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state
    }
}
