import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fakeProducts } from '../../../api/fakeData'

import Product from '../../../types/ProductType'

interface appState {
  products: Product[] 
}

const initialState: appState = {
  products: fakeProducts
} 

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getItems: (state) => {
      console.log('Hello from redux')
    }
  }
})

export const { getItems } = appSlice.actions

export default appSlice.reducer
