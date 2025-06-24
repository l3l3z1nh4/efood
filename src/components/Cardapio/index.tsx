import CardPrato from '../CardPrato'
import { CardapioContainer } from './styles'
import { Prato } from '../../types'

type Props = {
  cardapio: Prato[]
  onAbrirModal: (prato: Prato) => void
}

const Cardapio = ({ cardapio, onAbrirModal }: Props) => (
  <CardapioContainer className="container">
    {cardapio.map((prato) => (
      <CardPrato key={prato.id} prato={prato} onAbrirModal={onAbrirModal} />
    ))}
  </CardapioContainer>
)
export default Cardapio
