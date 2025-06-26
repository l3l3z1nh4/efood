import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cardapio from '../../components/Cardapio'
import Footer from '../../components/Footer'
import Header from '../../components/HeaderPerfil'
import Modal from '../../components/Modal'
import { PerfilRestauranteSection } from './styles'
import { Restaurante, Prato } from '../../types'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [modalVisivel, setModalVisivel] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res: Restaurante) => {
          setRestaurante(res)
        })
        .catch((error) => console.error('Erro ao buscar restaurante:', error))
    }
  }, [id])

  const abrirModal = (prato: Prato) => {
    setPratoSelecionado(prato)
    setModalVisivel(true)
  }

  const fecharModal = () => {
    setModalVisivel(false)
    setPratoSelecionado(null)
  }

  if (restaurante) {
    return (
      <PerfilRestauranteSection>
        <Header />
        <Banner restaurante={restaurante} />
        <Cardapio cardapio={restaurante.cardapio} onAbrirModal={abrirModal} />
        <Footer />
        <Modal
          visivel={modalVisivel}
          pratoSelecionado={pratoSelecionado}
          onFecharModal={fecharModal}
        />
      </PerfilRestauranteSection>
    )
  } else {
    return <div>Carregando...</div>
  }
}

export default Perfil
