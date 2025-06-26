import Card from '../CardRestaurante'
import { RestaurantesLista, RestaurantesSection } from './styles'
import { Restaurante } from '../../types'

type Props = {
  restaurantes: Restaurante[]
}

const Restaurantes = ({ restaurantes }: Props) => (
  <RestaurantesSection>
    <div className="container">
      <RestaurantesLista>
        {restaurantes.map((restaurante) => (
          <Card key={restaurante.id} restaurante={restaurante} />
        ))}
      </RestaurantesLista>
    </div>
  </RestaurantesSection>
)

export default Restaurantes
