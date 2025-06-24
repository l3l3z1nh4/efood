import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/HeaderHome'
import Restaurantes from '../../components/Restaurantes'
import { Restaurante } from '../../types'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurante[]) => {
        setRestaurantes(res)
      })
  }, [])

  return (
    <>
      <Header />
      <Restaurantes restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
