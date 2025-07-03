import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type EstadoCheckout = {
  isOpen: boolean
  etapa: 'entrega' | 'pagamento' | 'concluido'
  orderId: string | null
  isLoading: boolean
  error: string | null
}

const estadoInicial: EstadoCheckout = {
  isOpen: false,
  etapa: 'entrega',
  orderId: null,
  isLoading: false,
  error: null
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: estadoInicial,
  reducers: {
    abrirCheckout: (state) => {
      state.isOpen = true
      state.orderId = null
      state.error = null
    },
    fecharCheckout: (state) => {
      state.isOpen = false
      state.orderId = null
      state.isLoading = false
      state.error = null
    },
    setEtapa: (
      state,
      action: PayloadAction<'entrega' | 'pagamento' | 'concluido'>
    ) => {
      state.etapa = action.payload
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    }
  }
})

export const {
  abrirCheckout,
  fecharCheckout,
  setEtapa,
  setOrderId,
  setLoading,
  setError
} = checkoutSlice.actions
export default checkoutSlice.reducer
