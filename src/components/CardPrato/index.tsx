import { BotaoAdd, CardBar } from './styles'
import { Descricao, Img, Titulo } from '../CardRestaurante/styles'
import pizza from '../../assets/images/pizza.png'

const CardPrato = () => {
  return (
    <CardBar>
      <Img src={pizza} alt="foto do prato ofertado" />
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <BotaoAdd>Adicionar oa carrinho</BotaoAdd>
    </CardBar>
  )
}
export default CardPrato
