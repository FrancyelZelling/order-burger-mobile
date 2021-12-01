import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fakeProducts } from '../../../api/fakeData'

import Product from '../../../types/ProductType'
import CartType from '../../../types/CartType'

interface appState {
  products: Product[],
  cart: CartType,
}

const initialState: appState = {
  products: fakeProducts,
    cart: {
    products: [
      {
        id: 984372,
        name: "This burger",
        price: 23.99,
        description: "excellent burger",
        category: {
          id: 2,
          name: "iosfjd"
        }
      },
      {
        id: 23948,
        name: "Another Burger",
        price: 23.99,
        description: "this is another burger",
        category: {
          id: 2,
          name: "iosfjd"
      },
    }],
    total: 23.99,
    items: 2
  }
} 

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getItems: (state) => {
      console.log('Hello from redux')
    },
    addItemToCart: (state: appState, action: PayloadAction<Product>) => {
      state.cart.products.push(action.payload)
      console.log(state.cart)
      state.cart.total += action.payload.price
      state.cart.items += 1
      console.log(action.payload)
    }
  }
})

export const { getItems, addItemToCart } = appSlice.actions

export default appSlice.reducer
