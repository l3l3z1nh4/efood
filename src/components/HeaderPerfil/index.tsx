import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'
import { abrir } from '../../store/reducers/carrinho'
import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

const HeaderPerfil = () => {
  const dispatch = useDispatch()

  const { itens } = useSelector((state: RootReducer) => state.carrinho)

  const abrirCarrinhoHeader = () => {
    dispatch(abrir())
  }
  return (
    <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <a onClick={abrirCarrinhoHeader}>
          <p>
            <span>{itens.length}</span> produto(s) no carrinho
          </p>
        </a>
      </div>
    </HeaderBar>
  )
}

export default HeaderPerfil
