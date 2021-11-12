import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/main.scss'
import Header from '/components/shared/Header'


function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
