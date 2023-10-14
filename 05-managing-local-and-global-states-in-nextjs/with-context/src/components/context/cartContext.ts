import { Dispatch, SetStateAction, createContext } from 'react'

export interface Product {
  id: string
  name: string
  picture: string
  price: number
}

export interface Items {
  [id: string]: number
}

export interface CartState {
  items: Items
  setItems: React.Dispatch<React.SetStateAction<Items>>
}

export enum Action {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

const cartContext = createContext<CartState>({
  items: {},
  setItems: () => null,
})

export default cartContext
