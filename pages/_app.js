import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/main.scss'

import '@fortawesome/fontawesome-svg-core/styles.css';
//import '@fortawesome/free-solid-svg-icons/styles.css';

import Header from '/components/shared/Header'
import Loader from '/components/shared/Loader';
import Footer from '/components/shared/Footer';
import React,{useState} from 'react';
import Router from 'next/router'
import { SSRProvider } from '@react-aria/ssr';
import { SessionProvider } from "next-auth/react"
function MyApp({ 

  Component,
  pageProps: { session, ...pageProps },

}) {
  const [loading, setLoading] = useState(false)

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true)
  })
  
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false)
  })

  return(
    <SessionProvider session={session}>
    <SSRProvider>
    <Header/>
    <div style={{marginTop:"55px"}}></div>
          {
            loading &&
              <Loader/>
          }
          { !loading && 
            <>
            <Component {...pageProps} />
            <Footer/>
            </>
          }
    
  </SSRProvider>
  </SessionProvider>
  )
}

export default MyApp
