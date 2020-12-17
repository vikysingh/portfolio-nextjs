import { createGlobalStyle } from "styled-components"
import Head from "next/head"

const GlobalStyle = createGlobalStyle`
*, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    color: #1C1D25;
}
*:focus, body:focus {
    outline: none;
}
`

function MyApp({ Component, pageProps }) {
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
  <Component {...pageProps} />
  </>
}

export default MyApp
