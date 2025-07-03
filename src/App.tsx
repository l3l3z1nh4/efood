import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import { store } from './store'
import Carrinho from './components/Carrinho'
import Checkout from './components/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Checkout />
        <Carrinho />
      </BrowserRouter>
    </Provider>
  )
}

export default App
