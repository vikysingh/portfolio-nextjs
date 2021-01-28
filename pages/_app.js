import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import StudioContext from "../Componenti/Context/StudioContext";
import { useState, useEffect } from "react";
import sanityClient from "../client";
// import filterSanityData from "../utils/filterSanityData/"
import { AnimatePresence } from "framer-motion";

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
`;

function MyApp({ Component, pageProps }) {
  const [studioData, setStudioData] = useState([
    //Progetti
    {
      progetti: [],
    },
    //Competenze
    {
      competenza: [],
      competenze_descrizione: [
        {
          children: [
            {
              text: "",
            },
          ],
        },
      ],
    },
    //Contatti
    {
      descrizione: "",
      email: "",
      telefono: "",
      titolo: "",
    },
    //About
    {
      cvlink: "",
      nome: "",
      bio: [
        {
          children: [
            {
              text: "",
            },
          ],
        },
      ],
    },
    //Foto
    {
      ulr: "",
    },
  ]);

  useEffect(() => {
    sanityClient.fetch(`*`).then((data) => {
      setStudioData(data)
    });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#55E6C1" />
        <meta
          name="description"
          content="Sono uno sviluppatore FrontEnd specializzato in Reactjs."
        />
        <meta name="og:title" property="og:title" content="Vikram Singh" />
        <meta
          name="og:description"
          property="og:description"
          content="Sviluppatore FrontEnd specializzato in Reactjs."
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Quicksand&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/icons/favicon-16x16.png"
        />
        <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />

        <title>Vikram Singh</title>
      </Head>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <StudioContext.Provider
          value={{
            progetti: studioData[0].progetti,
            about: {
              bio: studioData[3].bio[0].children[0].text,
              cvlink: studioData[3].cvlink,
              nome: studioData[3].nome,
              foto: studioData[4].url,
            },
            contatti: {
              descrizione: studioData[2].descrizione,
              email: studioData[2].email,
              tel: studioData[2].telefono,
              titolo: studioData[2].titolo,
              github_link: studioData[2].github_link,
              linkedin_link: studioData[2].linkedin_link,
              medium_link: studioData[2].medium_link,
              youtube_link: studioData[2].youtube_link
            },
            competenze: {
              competenze: studioData[1].competenza,
              descrizione:
                studioData[1].competenze_descrizione[0].children[0].text,
            },
          }}
        >
          <Component {...pageProps} />
        </StudioContext.Provider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
