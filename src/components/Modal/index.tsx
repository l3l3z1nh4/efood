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

type Props = {
  visivel: boolean
  pratoSelecionado: Prato | null
  onFecharModal: () => void
}

const Modal = ({ visivel, pratoSelecionado, onFecharModal }: Props) => {
  if (!visivel || !pratoSelecionado) {
    return null
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
            <BotaoAdd>
              Adicionar ao carrinho - {pratoSelecionado.preco}
            </BotaoAdd>
          </ModalInfo>
        </ModalConteudo>
      </ModalContainer>
    </>
  )
}

export default Modal
