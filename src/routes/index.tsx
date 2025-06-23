import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Perfil from '../pages/PerfilRestaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil-restaurante" element={<Perfil />} />
  </Routes>
)

export default Rotas
