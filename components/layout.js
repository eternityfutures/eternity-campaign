import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  
`

const Header = styled.header`
  padding: 2rem 3rem 0 3rem;
  background-image: linear-gradient(to right, #422574, #7f389e);
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const HeaderWrapper = styled.div`
  max-width: 1280px;
  height: max-content;
  margin: 0px auto;
`

const Logo = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    width: 50%;
  }
`

const name = 'Eternity Logo'
export const siteTitle = 'Lucky Draw Poin Ramadan'

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>Eternity</title>
        <link rel="icon" href="https://eternityfutures.co.id/assets-public/images/priceIcon3.png" />
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
      <Header>
        <HeaderWrapper>
          <Link href="/">
            <a>
              <Logo>
                <Image priority src="/images/eternity-logo2.webp" width={2001} height={826} alt={name} layout="responsive" />
              </Logo>
            </a>
          </Link>
        </HeaderWrapper>
      </Header>
      <main>{children}</main>
    </Container>
  )
}