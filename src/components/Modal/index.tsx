import { useDispatch } from 'react-redux'
import {
  CloseBtn,
  ModalContainer,
  ModalConteudo,
  ModalInfo,
  Overlay
} from './styles'
import closeBtn from '../../assets/images/close.png'
import { Descricao } from '../CardRestaurante/styles'
import { BotaoAdd } from '../CardPrato/styles'
import { Prato } from '../../types'
import { adicionar, abrir } from '../../store/reducers/carrinho'

type Props = {
  visivel: boolean
  pratoSelecionado: Prato | null
  onFecharModal: () => void
}

const Modal = ({ visivel, pratoSelecionado, onFecharModal }: Props) => {
  const dispatch = useDispatch()

  if (!visivel || !pratoSelecionado) {
    return null
  }

  const addAoCarrinho = () => {
    dispatch(adicionar(pratoSelecionado))
    dispatch(abrir())
    onFecharModal()
  }

  return (
    <>
      <Overlay onClick={onFecharModal} />
      <ModalContainer className="container">
        <CloseBtn onClick={onFecharModal}>
          <img src={closeBtn} alt="X" />
        </CloseBtn>
        <ModalConteudo>
          <img src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
          <ModalInfo>
            <h1>{pratoSelecionado.nome}</h1>
            <Descricao>{pratoSelecionado.descricao}</Descricao>
            <Descricao>Serve: {pratoSelecionado.porcao}</Descricao>
            <BotaoAdd onClick={addAoCarrinho}>
              Adicionar ao carrinho - {pratoSelecionado.preco.toFixed(2)}
            </BotaoAdd>
          </ModalInfo>
        </ModalConteudo>
      </ModalContainer>
    </>
  )
}

export default Modal
