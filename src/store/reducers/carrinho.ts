import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../types'

type EstadoCarrinho = {
  itens: Prato[]
  isOpen: boolean
}

const estadoInicial: EstadoCarrinho = {
  itens: [],
  isOpen: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: estadoInicial,
  reducers: {
    adicionar: (estado, acao: PayloadAction<Prato>) => {
      estado.itens.push(acao.payload)
    },
    remover: (estado, acao: PayloadAction<number>) => {
      const indexParaRemover = estado.itens.findIndex(
        (item) => item.id === acao.payload
      )
      if (indexParaRemover !== -1) {
        estado.itens.splice(indexParaRemover, 1)
      }
    },
    abrir: (estado) => {
      estado.isOpen = true
    },
    fechar: (estado) => {
      estado.isOpen = false
    }
  }
})

export const { adicionar, remover, abrir, fechar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
