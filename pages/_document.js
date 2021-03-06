import {Html, Head, Main, NextScript} from "next/document";
import * as gtag from '../lib/gtag';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MMKC36Z');`}}>
        </script>

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}></script>
        <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}');`}}></script>

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.ANALYTIC_ID}`}></script>
        <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.ANALYTIC_ID}');`}}></script>

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