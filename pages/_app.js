import { createGlobalStyle } from "styled-components"
import Head from "next/head"
import StudioContext from "../Componenti/Context/StudioContext"
import { useState, useEffect } from "react"
import sanityClient from "../client"
import filterSanityData from "../utils/filterSanityData/"
import {  AnimatePresence } from "framer-motion"

const GlobalStyle = createGlobalStyle`
*, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    color: #1C1D25;
    text-decoration: none;
}
*:focus, body:focus {
    outline: none;
}

body {
    max-width: 100vw;
    overflow-x: hidden;
}
`

function MyApp({ Component, pageProps }) {
    
    const [ studioData, setStudioData ] = useState([{}])

    useEffect(() => {
        sanityClient
            .fetch(`*`)
            .then(data => {
                // console.clear()
                //data.map(each => console.log(each._type))
                // let g = filterSanityData(data, "autore")[0]
                // console.log(g)
                setStudioData(data)
            })

            /*
            about-
            competenze
            home
            sanity.imageAsset
            autore
            */
    }, [])

  return <>
  <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#55E6C1" />
      <meta name="description" content="Sono uno sviluppatore FrontEnd specializzato in Reactjs." />
      <meta name="og:title" property="og:title" content="Vikram Singh" />
      <meta name="og:description" property="og:description" content="Sviluppatore FrontEnd specializzato in Reactjs." />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Quicksand&display=swap" rel="stylesheet" />

      <title>Vikram Singh</title>
  </Head>
  <GlobalStyle />
  <AnimatePresence exitBeforeEnter >
    <StudioContext.Provider value={{
      about: filterSanityData(studioData, "autore")[0],
      contatti: filterSanityData(studioData, "contatti")[0],
      progetti: filterSanityData(studioData, "autore"),
      competenze: {
          competenze: filterSanityData(studioData, "competenze")[0],
          descrizione: filterSanityData(studioData, "competenze")[0]
      }
    }}>
      
        <Component {...pageProps} />
    </StudioContext.Provider>
  </AnimatePresence>
  </>
}

export default MyApp
