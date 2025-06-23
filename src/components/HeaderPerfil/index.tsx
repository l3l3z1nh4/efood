import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

const HeaderPerfil = () => {
  return (
    <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <a href="/">Restaurantes</a>
        <img src={logo} alt="logo" />
        <a href="/">
          <p>
            <span>0</span> produtos(s) no carrinho
          </p>
        </a>
      </div>
    </HeaderBar>
  )
}

export default HeaderPerfil
