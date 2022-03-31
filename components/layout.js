import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  
`

export const siteTitle = 'Lucky Draw Poin Ramadan'

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>Eternity</title>
        <link rel="icon" href="/images/cat-rainbow.webp" />
        <meta
          name="description"
          content="Sambut Ramadan dengan Kejutan Hadiah menarik dari Eternity"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {children} 
    </Container>
  )
}