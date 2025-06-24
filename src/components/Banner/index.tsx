import { BannerBar } from './styles'
import { Restaurante } from '../../types'

type Props = {
  restaurante: Restaurante
}

const Banner = ({ restaurante }: Props) => (
  <BannerBar style={{ backgroundImage: `url(${restaurante.capa})` }}>
    <div className="container">
      <h2>{restaurante.tipo}</h2>
      <h1>{restaurante.titulo}</h1>
    </div>
  </BannerBar>
)

export default Banner
