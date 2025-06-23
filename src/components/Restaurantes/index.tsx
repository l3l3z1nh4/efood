import Card from '../CardRestaurante'
import { RestaurantesLista, RestaurantesContainer } from './styles'

const Restaurantes = () => (
  <RestaurantesContainer>
    <RestaurantesLista className="container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </RestaurantesLista>
  </RestaurantesContainer>
)

export default Restaurantes
