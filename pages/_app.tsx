import Head from "next/head";
import { CacheProvider, Global, css } from '@emotion/core'
import { cache } from 'emotion'

import { globalStyles } from '../shared/styles'

const URL_GOOGLE_FONTS = "https://fonts.googleapis.com/css2?family=Muli:wght@400;600;700&display=swap";

function MyApp({Component, pageProps, canonicalUrl}){
  return (
    <CacheProvider value={cache}>
      <Head>
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
        `}
      />
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp