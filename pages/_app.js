import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/main.scss'
import Header from '/components/shared/Header'
import Loader from '/components/shared/Loader';
import React,{useState} from 'react';
import Router from 'next/router'
import { SSRProvider } from '@react-aria/ssr';

function MyApp({ 

  Component,
  pageProps

}) {
  const [loading, setLoading] = useState(false)

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true)
  })
  
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false)
  })

  return(
    <SSRProvider>
    <Header/>
    <div style={{marginTop:"55px"}}></div>
          {
            loading &&
              <Loader/>
          }
          { !loading && 
            <Component {...pageProps} />
          }
    
  </SSRProvider>
  )
}

export default MyApp
