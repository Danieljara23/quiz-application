import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, Global, css } from '@emotion/core'
import { cache } from 'emotion'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from "../apollo/apolloClient";
import { globalStyles } from '../shared/styles'

// const GRAPHQL_ENDPOINT = `http://localhost:3000/api/graphql`;
const URL_GOOGLE_FONTS = "https://fonts.googleapis.com/css2?family=Muli:wght@400;600;700&display=swap";

function MyApp({Component, pageProps, canonicalUrl}:any){
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={cache}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="HandheldFriendly" content="true" />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="alternate" href={canonicalUrl} hrefLang="es" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preload" as="style" href={URL_GOOGLE_FONTS} />
        </Head>
        {globalStyles}
        <Global
          styles={css`
            @import url("${URL_GOOGLE_FONTS}");

            body * {
              box-sizing: border-box;
            }
          `}
        />
        <Component {...pageProps} />
        {/* <div id ="modals-container"></div> */}
      </CacheProvider>
    </ApolloProvider>
  )
}

export default MyApp;