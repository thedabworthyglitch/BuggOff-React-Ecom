import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import '../styles/auth.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
