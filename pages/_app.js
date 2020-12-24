import { createGlobalStyle } from "styled-components"
import Head from "next/head"
import StudioContext from "../Componenti/Context/StudioContext"
import { useState, useEffect } from "react"
import sanityClient from "../client"
import sanityFilter from "../utils/filterSanityData"

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
    
    const [ studioData, setStudioData ] = useState([])

    useEffect(() => {
        sanityClient
            .fetch(`*`)
            .then(data => setStudioData(data))
    }, [])
    
  return <>
  <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#55E6C1" />
      <meta name="description" content="Sviluppatore FrontEnd" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Quicksand&display=swap" rel="stylesheet" />

      <title>Vikram Singh</title>
  </Head>
  <GlobalStyle />
  <StudioContext.Provider value={{
      about: sanityFilter(studioData, "about"),
      contatti: sanityFilter(studioData, "contatti"),
      progetti: sanityFilter(studioData, "home"),
      competenze: sanityFilter(studioData, "competenze")
  }}>
    <Component {...pageProps} />
  </StudioContext.Provider>
  </>
}

export default MyApp