import { FooterContainer } from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/ig.png'
import facebook from '../../assets/images/face.png'
import twitter from '../../assets/images/tt.png'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="" />
    <div className="social">
      <a href="">
        <img src={instagram} alt="" />
      </a>
      <a href="">
        <img src={facebook} alt="" />
      </a>
      <a href="">
        <img src={twitter} alt="" />
      </a>
    </div>
    <p className="container">
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </FooterContainer>
)

export default Footer
