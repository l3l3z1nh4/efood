import Card from '../CardRestaurante'
import { RestaurantesLista, RestaurantesContainer } from './styles'
import { Restaurante } from '../../types'

type Props = {
  restaurantes: Restaurante[]
}

const Restaurantes = ({ restaurantes }: Props) => (
  <RestaurantesContainer>
    <RestaurantesLista className="container">
      {restaurantes.map((restaurante) => (
        <Card key={restaurante.id} restaurante={restaurante} />
      ))}
    </RestaurantesLista>
  </RestaurantesContainer>
)

export default Restaurantes
