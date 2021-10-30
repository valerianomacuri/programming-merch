import { OnCaptureData } from "react-paypal-button";

export interface Data {
    cart:       Product[],
    products:   Product[],
    orders:     Order[],
    buyer:      any[],
}

export interface Product {
    id:         string,
    image:      string,
    title:      string,
    price:      number,
    description:string
}

export interface ContextProps {
    addToCart: (payload: Product) => void,
    removeFromCart: (payload: Product) => void,
    addToBuyer: (payload: any) => void,
    addNewOrder: (payload: any) => void,
    state: Data
}

export interface Order {
    buyer: any[],
    product: Product[],
    payment: OnCaptureData
}