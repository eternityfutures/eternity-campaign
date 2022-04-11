import {Html, Head, Main, NextScript} from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-10856943421" />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10856943421');
            `
          }}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMKC36Z');
            `
          }}
        />
        
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
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMKC36Z"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}