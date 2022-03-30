import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/Serca-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Serca-Medium.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Serca-SemiBold.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Serca-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}