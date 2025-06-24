import { BotaoAdd, CardBar } from './styles'
import { Descricao, Img, Titulo } from '../CardRestaurante/styles'
import { Prato } from '../../types'
import { formataDescricao } from '../CardRestaurante'

type Props = {
  prato: Prato
  onAbrirModal: (prato: Prato) => void
}

const CardPrato = ({ prato, onAbrirModal }: Props) => {
  return (
    <CardBar onClick={() => onAbrirModal(prato)}>
      <Img src={prato.foto} alt={prato.nome} />
      <Titulo>{prato.nome}</Titulo>
      <Descricao>{formataDescricao(prato.descricao)}</Descricao>
      <BotaoAdd
        onClick={(e) => {
          e.stopPropagation()
          onAbrirModal(prato)
        }}
      >
        Adicionar ao carrinho - {prato.preco}
      </BotaoAdd>
    </CardBar>
  )
}
export default CardPrato
