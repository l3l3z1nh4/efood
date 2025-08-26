import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  abrir as abrirCarrinho,
  limpar as limparCarrinho
} from '../../store/reducers/carrinho'
import {
  fecharCheckout,
  setError,
  setEtapa,
  setLoading,
  setOrderId
} from '../../store/reducers/checkout'
import {
  CartContainer as CheckoutContainer,
  Formulario,
  Overlay,
  Sidebar
} from './styles'
import { BotaoAdd as Botao } from '../CardPrato/styles'

const API = 'https://ebac-fake-api.vercel.app/api/efood/restaurantes'

const Checkout = () => {
  const dispatch = useDispatch()

  interface RootReducer {
    carrinho: {
      itens: { id: number; preco: number }[]
    }
    checkout: {
      isOpen: boolean
      etapa: 'entrega' | 'pagamento' | 'concluido'
      isLoading: boolean
      error: string | null
      orderId: string | null
    }
  }

  const { isOpen, etapa, isLoading, error, orderId } = useSelector(
    (state: RootReducer) => state.checkout
  )

  const itensDoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  const valorTotal = itensDoCarrinho
    .reduce((total, item) => total + item.preco, 0)
    .toFixed(2)

  const [recebedor, setRecebedor] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [nomeCartao, setNomeCartao] = useState('')
  const [numeroCartao, setNumeroCartao] = useState('')
  const [cvvCartao, setCvvCartao] = useState('')
  const [mesVencimento, setMesVencimento] = useState('')
  const [anoVencimento, setAnoVencimento] = useState('')
  const [entregaErros, setEntregaErros] = useState<{
    [key: string]: string | null
  }>({})
  const [entregaTouched, setEntregaTouched] = useState<{
    [key: string]: boolean
  }>({})
  const [pagamentosErros, setPagamentosErros] = useState<{
    [key: string]: string | null
  }>({})
  const [pagamentosTouched, setPagamentosTouched] = useState<{
    [key: string]: boolean
  }>({})

  const resetForm = () => {
    setRecebedor('')
    setEndereco('')
    setCep('')
    setNumero('')
    setComplemento('')
    setNomeCartao('')
    setNumeroCartao('')
    setCvvCartao('')
    setMesVencimento('')
    setAnoVencimento('')
    setEntregaErros({})
    setEntregaTouched({})
    setPagamentosErros({})
    setPagamentosTouched({})
  }

  const handleFecharCheckout = () => {
    dispatch(fecharCheckout())
    dispatch(setEtapa('entrega'))
    resetForm()
  }

  const handleVoltarParaCarrinho = () => {
    dispatch(fecharCheckout())
    dispatch(abrirCarrinho())
    resetForm()
  }

  const validaFormEntrega = () => {
    const errors: { [key: string]: string | null } = {}
    if (!recebedor.trim()) errors.recebedor = 'Campo obrigatório'
    if (!endereco.trim()) errors.endereco = 'Campo obrigatório'

    const cleanedCep = cep.replace(/\D/g, '')
    if (!cleanedCep || cleanedCep.length !== 8) {
      errors.cep = 'CEP inválido (8 dígitos)'
    }
    if (!numero.trim()) errors.numero = 'Campo obrigatório'

    setEntregaErros(errors)
    return Object.keys(errors).length === 0
  }

  const handlePagamento = () => {
    const formEntregaValido = validaFormEntrega()
    if (formEntregaValido) {
      dispatch(setEtapa('pagamento'))
    } else {
      setEntregaTouched({
        recebedor: true,
        endereco: true,
        cep: true,
        numero: true,
        complemento: true
      })
    }
  }

  const validaMetodoPagamento = () => {
    const errors: { [key: string]: string | null } = {}

    if (!nomeCartao.trim()) errors.nomeCartao = 'Campo obrigatório'

    const cleanedNumeroCartao = numeroCartao.replace(/\D/g, '')
    if (!cleanedNumeroCartao || cleanedNumeroCartao.length !== 16) {
      errors.numeroCartao = 'Número do cartão inválido (16 dígitos)'
    }

    const cleanedCvv = cvvCartao.replace(/\D/g, '')
    if (!cleanedCvv || cleanedCvv.length !== 3) {
      errors.cvvCartao = 'CVV inválido (3 dígitos)'
    }

    const month = parseInt(mesVencimento)
    if (isNaN(month) || month < 1 || month > 12) {
      errors.mesVencimento = 'Mês inválido (1-12)'
    }

    const year = parseInt(anoVencimento)
    const currentFullYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1

    if (isNaN(year) || year < currentFullYear) {
      errors.anoVencimento = `Ano inválido (Ex: ${currentFullYear})`
    } else if (year === currentFullYear && month < currentMonth) {
      errors.mesVencimento = 'Mês de vencimento já passou para o ano atual'
    }

    setPagamentosErros(errors)

    return Object.keys(errors).length === 0
  }

  const handleFinalizarPedido = async (event: {
    preventDefault: () => void
  }) => {
    event.preventDefault()

    dispatch(setError(null))

    const formValido = validaMetodoPagamento()

    if (!formValido) {
      setPagamentosTouched({
        nomeCartao: true,
        numeroCartao: true,
        cvvCartao: true,
        mesVencimento: true,
        anoVencimento: true
      })
      return
    }

    dispatch(setLoading(true))

    try {
      const payload = {
        products: itensDoCarrinho.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: recebedor,
          address: {
            description: endereco,
            city: 'São Paulo',
            zipCode: cep.replace(/\D/g, ''),
            number: parseInt(numero),
            complement: complemento
          }
        },
        payment: {
          card: {
            name: nomeCartao,
            number: numeroCartao.replace(/\D/g, ''),
            code: parseInt(cvvCartao),
            expires: {
              month: parseInt(mesVencimento),
              year: parseInt(anoVencimento)
            }
          }
        }
      }
      const post = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      if (!post.ok) {
        const errorData = await post.json()
        throw new Error(errorData.message || 'Erro API')
      }
      const data = await post.json()
      dispatch(setOrderId(data.orderId))
      dispatch(setEtapa('concluido'))
      resetForm()
      dispatch(limparCarrinho())
    } catch (err) {
      console.error('Erro ao finalizar pagamento:', err)
      if (err instanceof Error) {
        dispatch(setError(err.message))
      } else {
        dispatch(
          setError('Ocorreu um erro desconhecido ao finalizar o pagamento.')
        )
      }
      dispatch(setEtapa('pagamento'))
    } finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleFecharCheckout} />
      <Sidebar>
        {/* etapa ENTREGA */}
        {etapa === 'entrega' && (
          <>
            <h1>Entrega</h1>
            <Formulario>
              <label htmlFor="recebedor">Quem irá receber?</label>
              <input
                type="text"
                name="recebedor"
                value={recebedor}
                onChange={(e) => setRecebedor(e.target.value)}
                onBlur={() =>
                  setEntregaTouched((prev) => ({ ...prev, recebedor: true }))
                }
                className={
                  entregaTouched.recebedor && entregaErros.recebedor
                    ? 'error'
                    : ''
                }
                required
              />
              {entregaTouched.recebedor && entregaErros.recebedor && (
                <p className="error-message">{entregaErros.recebedor}</p>
              )}
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                name="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                onBlur={() =>
                  setEntregaTouched((prev) => ({ ...prev, endereco: true }))
                }
                className={
                  entregaTouched.endereco && entregaErros.endereco
                    ? 'error'
                    : ''
                }
                required
              />
              {entregaTouched.endereco && entregaErros.endereco && (
                <p className="error-message">{entregaErros.endereco}</p>
              )}
              <div className="group">
                <div>
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    name="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    onBlur={() =>
                      setEntregaTouched((prev) => ({ ...prev, cep: true }))
                    }
                    className={
                      entregaTouched.cep && entregaErros.cep ? 'error' : ''
                    }
                    required
                  />
                  {entregaTouched.cep && entregaErros.cep && (
                    <p className="error-message">{entregaErros.cep}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="numero">Número</label>
                  <input
                    type="text"
                    name="numero"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    onBlur={() =>
                      setEntregaTouched((prev) => ({ ...prev, numero: true }))
                    }
                    className={
                      entregaTouched.numero && entregaErros.numero
                        ? 'error'
                        : ''
                    }
                    required
                  />
                  {entregaTouched.numero && entregaErros.numero && (
                    <p className="error-message">{entregaErros.numero}</p>
                  )}
                </div>
              </div>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input
                type="text"
                name="complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                onBlur={() =>
                  setEntregaTouched((prev) => ({ ...prev, complemento: true }))
                }
                className={
                  entregaTouched.complemento && entregaErros.complemento
                    ? 'error'
                    : ''
                }
              />
              {entregaTouched.complemento && entregaErros.complemento && (
                <p className="error-message">{entregaErros.complemento}</p>
              )}
              <Botao
                title="Clique aqui para continuar com o pagamento"
                type="button"
                onClick={handlePagamento}
              >
                Continuar com o pagamento
              </Botao>
            </Formulario>
            <Botao
              title="Clique aqui para voltar ao carrinho"
              type="button"
              onClick={handleVoltarParaCarrinho}
            >
              Voltar para o carrinho
            </Botao>
          </>
        )}
        {/* etapa PAGAMENTO */}
        {etapa === 'pagamento' && (
          <>
            <h1>
              Pagamento - Valor a pagar <span>R${valorTotal}</span>
            </h1>
            <Formulario onSubmit={handleFinalizarPedido}>
              <label htmlFor="nome-cartao">Nome no cartão</label>
              <input
                type="text"
                name="nome-cartao"
                value={nomeCartao}
                onChange={(e) => {
                  setNomeCartao(e.target.value)
                  dispatch(setError(null))
                }}
                onBlur={() =>
                  setPagamentosTouched((prev) => ({
                    ...prev,
                    nomeCartao: true
                  }))
                }
                className={
                  pagamentosTouched.nomeCartao && pagamentosErros.nomeCartao
                    ? 'error'
                    : ''
                }
                required
              />
              {pagamentosTouched.nomeCartao && pagamentosErros.nomeCartao && (
                <p className="error-message">{pagamentosErros.nomeCartao}</p>
              )}
              <div className="group">
                <div>
                  <label htmlFor="numero-cartao">Número do cartão</label>
                  <input
                    type="text"
                    name="numero-cartao"
                    value={numeroCartao}
                    onChange={(e) => {
                      setNumeroCartao(e.target.value)
                      dispatch(setError(null))
                    }}
                    onBlur={() =>
                      setPagamentosTouched((prev) => ({
                        ...prev,
                        numeroCartao: true
                      }))
                    }
                    className={
                      pagamentosTouched.numeroCartao &&
                      pagamentosErros.numeroCartao
                        ? 'error'
                        : ''
                    }
                    required
                  />
                  {pagamentosTouched.numeroCartao &&
                    pagamentosErros.numeroCartao && (
                      <p className="error-message">
                        {pagamentosErros.numeroCartao}
                      </p>
                    )}
                </div>
                <div>
                  <label htmlFor="cvv-cartao">CVV</label>
                  <input
                    type="text"
                    name="cvv-cartao"
                    value={cvvCartao}
                    onChange={(e) => {
                      setCvvCartao(e.target.value)
                      dispatch(setError(null))
                    }}
                    onBlur={() =>
                      setPagamentosTouched((prev) => ({
                        ...prev,
                        cvvCartao: true
                      }))
                    }
                    className={
                      pagamentosTouched.cvvCartao && pagamentosErros.cvvCartao
                        ? 'error'
                        : ''
                    }
                    required
                  />
                  {pagamentosTouched.cvvCartao && pagamentosErros.cvvCartao && (
                    <p className="error-message">{pagamentosErros.cvvCartao}</p>
                  )}
                </div>
              </div>
              <div className="group">
                <div>
                  <label htmlFor="mes-vencimento">Mês de vencimento</label>
                  <input
                    type="text"
                    name="mes-vencimento"
                    value={mesVencimento}
                    onChange={(e) => {
                      setMesVencimento(e.target.value)
                      dispatch(setError(null))
                    }}
                    onBlur={() =>
                      setPagamentosTouched((prev) => ({
                        ...prev,
                        mesVencimento: true
                      }))
                    }
                    className={
                      pagamentosTouched.mesVencimento &&
                      pagamentosErros.mesVencimento
                        ? 'error'
                        : ''
                    }
                    required
                  />
                  {pagamentosTouched.mesVencimento &&
                    pagamentosErros.mesVencimento && (
                      <p className="error-message">
                        {pagamentosErros.mesVencimento}
                      </p>
                    )}
                </div>
                <div>
                  <label htmlFor="ano-vencimento">Ano de vencimento</label>
                  <input
                    type="text"
                    name="ano-vencimento"
                    value={anoVencimento}
                    onChange={(e) => {
                      setAnoVencimento(e.target.value)
                      dispatch(setError(null))
                    }}
                    onBlur={() =>
                      setPagamentosTouched((prev) => ({
                        ...prev,
                        anoVencimento: true
                      }))
                    }
                    className={
                      pagamentosTouched.anoVencimento &&
                      pagamentosErros.anoVencimento
                        ? 'error'
                        : ''
                    }
                    required
                  />
                  {pagamentosTouched.anoVencimento &&
                    pagamentosErros.anoVencimento && (
                      <p className="error-message">
                        {pagamentosErros.anoVencimento}
                      </p>
                    )}
                </div>
              </div>
              {etapa === 'pagamento' && error && (
                <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>
              )}
              <Botao
                title="Clique aqui para finalizar pagamento"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
              </Botao>
            </Formulario>
            <Botao
              title="Clique aqui para voltar e editar endereço"
              type="button"
              onClick={() => dispatch(setEtapa('entrega'))}
            >
              Voltar para a edição de endereço
            </Botao>
          </>
        )}
        {/*etapa CONCLUIDO */}
        {etapa === 'concluido' && (
          <>
            <h1>Pedido realizado - {orderId}</h1>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Botao
              title="Clique aqui para concluir"
              type="button"
              onClick={handleFecharCheckout}
            >
              Concluir
            </Botao>
          </>
        )}
      </Sidebar>
    </CheckoutContainer>
  )
}

export default Checkout
