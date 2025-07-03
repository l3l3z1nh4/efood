import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { fechar, remover } from '../../store/reducers/carrinho'
import { abrirCheckout } from '../../store/reducers/checkout'
import { CartContainer, Overlay, Sidebar, CartItem, Preco } from './styles'
import lixeira from '../../assets/images/lixo.png'
import { BotaoAdd as BotaoContinuar } from '../CardPrato/styles'

const Carrinho = () => {
  const dispatch = useDispatch()

  const { isOpen, itens } = useSelector((state: RootReducer) => state.carrinho)

  const fecharCarrinho = () => {
    dispatch(fechar())
  }

  const removerDoCarrinho = (id: number) => {
    dispatch(remover(id))
  }

  const calcularValorTotal = () => {
    return itens.reduce((c, item) => c + item.preco, 0)
  }

  const continuarComEntrega = () => {
    dispatch(fechar())
    dispatch(abrirCheckout())
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={fecharCarrinho} />
      <Sidebar>
        <ul>
          {itens.length > 0 ? (
            itens.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div className="nome-preco">
                  <h3>{item.nome}</h3>
                  <p>R$ {item.preco.toFixed(2)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removerDoCarrinho(item.id)}
                >
                  <img src={lixeira} alt="remover do carrinho" />
                </button>
              </CartItem>
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>Seu carrinho está vazio.</p>
          )}
        </ul>
        <Preco>
          <p>Valor total</p>
          <span>R${calcularValorTotal().toFixed(2)}</span>
        </Preco>
        <BotaoContinuar
          title="Clique aqui para continuar com a entrega"
          type="button"
          onClick={continuarComEntrega}
        >
          Continuar com a entrega
        </BotaoContinuar>
      </Sidebar>
    </CartContainer>
  )
}

export default Carrinho
