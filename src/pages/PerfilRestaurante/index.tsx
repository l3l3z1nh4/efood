import Banner from '../../components/Banner'
import Cardapio from '../../components/Cardapio'
import Footer from '../../components/Footer'
import Header from '../../components/HeaderPerfil'
import { PerfilRestauranteSection } from './styles'

const Perfil = () => {
  return (
    <PerfilRestauranteSection>
      <Header />
      <Banner />
      <Cardapio />
      <Footer />
    </PerfilRestauranteSection>
  )
}

export default Perfil
