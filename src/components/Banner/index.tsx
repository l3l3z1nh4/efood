import { BannerBar } from './styles'
import bannerImage from '../../assets/images/image1.png'

const Banner = () => (
  <BannerBar style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="container">
      <h2>Italiana</h2>
      <h1>La Dolce Vita Trattoria</h1>
    </div>
  </BannerBar>
)

export default Banner
