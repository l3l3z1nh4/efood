import { Botao, CardBar, Descricao, Estrela, Img, Nota, Titulo } from './styles'
import foto from '../../assets/images/image1.png'
import estrela from '../../assets/images/estrela.png'
import { TagId } from '../Tag/styles'

const CardRestaurante = () => {
  return (
    <CardBar>
      <div className="img-tag">
        <Img src={foto} alt="foto restaurante" />
        <div className="tags-container">
          <TagId>Destaque da semana</TagId>
          <TagId>Italiana</TagId>
        </div>
      </div>
      <div className="nome-nota">
        <Titulo>Nome do Restaurante</Titulo>
        <Nota>
          <Titulo>4.9</Titulo>
          <Estrela src={estrela} alt="estrela" />
        </Nota>
      </div>
      <Descricao>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Descricao>
      <Botao href="/perfil-restaurante">Saiba mais</Botao>
    </CardBar>
  )
}

export default CardRestaurante
