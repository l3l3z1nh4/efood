import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

const HeaderHome = () => {
  return (
    <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <div>
        <img src={logo} alt="logo" />
        <p>Viva experiências gastronômicas no conforto da sua casa</p>
      </div>
    </HeaderBar>
  )
}

export default HeaderHome
