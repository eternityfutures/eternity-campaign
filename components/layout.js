import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  
`

export const siteTitle = 'Lucky Draw Poin Ramadan'

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>Eternity</title>
        <link rel="icon" href="/cat-rainbow.ico" />
      </Head>
      {children}
    </Container>
  )
}