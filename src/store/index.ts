import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import checkoutReducer from './reducers/checkout'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    checkout: checkoutReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
