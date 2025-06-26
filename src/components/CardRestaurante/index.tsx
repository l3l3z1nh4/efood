import {
  Botao,
  CardBar,
  ConteudoCard,
  Descricao,
  Estrela,
  Img,
  Nota,
  Titulo
} from './styles'
import estrela from '../../assets/images/estrela.png'
import { TagId } from '../Tag/styles'
import { Restaurante } from '../../types'

type Props = {
  restaurante: Restaurante
}

export const formataDescricao = (descricao: string) => {
  const limiteCaracteres = 150
  if (descricao.length > limiteCaracteres) {
    return descricao.substring(0, limiteCaracteres - 3) + '...'
  }
  return descricao
}

const CardRestaurante = ({ restaurante }: Props) => {
  const getTags = (restaurante: Restaurante) => {
    const tags = []

    if (restaurante.destacado) {
      tags.push(<TagId key="destaque">Destaque da semana</TagId>)
    }

    if (restaurante.tipo) {
      tags.push(<TagId key={restaurante.tipo}>{restaurante.tipo}</TagId>)
    }

    return tags
  }

  return (
    <CardBar>
      <ConteudoCard>
        <div className="img-tag">
          <Img src={restaurante.capa} alt={restaurante.titulo} />
          <div className="tags-container">{getTags(restaurante)}</div>
        </div>
        <div className="infos">
          <div className="nome-nota">
            <Titulo>{restaurante.titulo}</Titulo>
            <Nota>
              <Titulo>{restaurante.avaliacao}</Titulo>
              <Estrela src={estrela} alt="estrela" />
            </Nota>
          </div>
          <Descricao>{formataDescricao(restaurante.descricao)}</Descricao>
          <Botao to={`/perfil-restaurante/${restaurante.id}`}>Saiba mais</Botao>
        </div>
      </ConteudoCard>
    </CardBar>
  )
}
export default CardRestaurante
