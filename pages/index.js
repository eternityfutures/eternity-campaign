import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

const Layout = dynamic(() => import('../components/layout'))

const FormInput = dynamic(
  () => import('../components/FormInput'),
  { ssr: false }
)

const Header = styled.div`
  width: 100%;
  height: max-content;
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

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
`

const Logo = styled.div`
  width: 18%;
  display: inline-block;
  @media (max-width: 768px) {
    width: 50%;
  }
`

const CampaignSection = styled.section`
  background-image: linear-gradient(to right, #422574, #7f389e);
  height: max-content;
  padding: 0 3rem 3rem 3rem;
  @media (max-width: 768px) {
    padding: 0 1.5rem 4rem 1.5rem;
    flex-direction: column-reverse;
    min-height: 500px;
  }
`

const CampaignWrapper = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const IntroContainer = styled.div`
  align-self: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
` 

const IntroTitle = styled.p`
  font-family: 'Serca';
  font-size: 42px;
  font-weight: 700;
  color: #fdf7f2;
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 0;
    line-height: 30px;
  }
`

const Span = styled.span`
  font-family: 'Serca';
  font-size: 74px;
  font-weight: 700;
  color: #fedc17;
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 43px;
  }
`

const IntroDescription = styled.p`
  font-family: 'Serca';
  font-weight: 500;
  text-align: center;
  color: #FDF7F2;
  margin: 0px;
  margin-bottom: 12px;
  margin-top: -20px;
  line-height: 1.5;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    font-size: 16px;
    margin-bottom: 0;
  }
`

const FormSection = styled.section`
  background-color: #FDF7F2;
  height: max-content;
  padding: 3rem 0;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 4rem 1.5rem;
  }
`

const FormTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 5vw;
  font-family: 'Serca';
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 10vw;
  }
`

const ErrorText = styled.p`
  font-family: 'Serca';
  font-size: 18px;
  color: red;
  margin: 0;
  line-height: 2;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const WrapperTerm = styled.div`
  display: flex;
  gap: 50px;
  max-width: 1280px;
  margin: 0px auto;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`
const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  max-width: 1280px;
  margin: 0px auto;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`

const FormContainer = styled.div`
  width: 50%;
  align-self: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const IconContainer = styled.div`
  display: contents;
`

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
`

const RegisterButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #7f389e;
  border: none;
  color: #FDF7F2;
  font-family: 'Serca';
  font-size: 16px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const TermSection = styled.section`
  background-color: #7f389e;
  height: max-content;
  padding: 3rem;
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 4rem 1.5rem;
  }
`

const TermContainer = styled.div`
  align-self: center;
`

const TermTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const TermTitle = styled.h1`
  width: 100%;
  margin: 0;
  font-family: 'Serca';
  font-size: 48px;
  color: #FDF7F2;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const TermWrapper = styled.div`
  max-width: 1280px;
  margin: 0px auto;
`

const TermDescription = styled.p`
  font-family: 'Serca';
  font-size: 18px;
  color: #FDF7F2;
  margin: 0;
  line-height: 2;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const SocialLink = styled.a`
  color: #fedc17;
`

const LegalSection = styled.section`
  background-color: #FDF7F2;
  height: max-content;
  padding: 3rem;
  align-item: center;
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 4rem 1.5rem;
  }
`

const LegalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  margin: 0px auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

const Legal = styled.div`
  width: 25%;
  @media (max-width: 768px) {
    width: 70%;
  }
`

const Banner = styled.div`
  width: 120%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 24px 0 12px 0;
  }
`

const Prize = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`

const Mbak = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Ticket = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Gift = styled.div`
  width: 100%;
`

const Box = styled.div`
  width: 100%;
`

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('')
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const handlePost = async (e) => {
    e.preventDefault();

    // reset error and message
    setError('');
    setMessage('');

    // fields check
    if (!name || !email || !phoneNumber || !birthDate) return setError('All fields are required');

    // post structure
    let user = {
        name,
        email,
        phoneNumber,
        birthDate,
        createdAt: new Date().toString(),
    };
    // save the post
    let response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(user),
    });

    // get the data
    let data = await response.json();
    console.log(data);

    if (data.success) {
        // reset the fields
        // setTitle('');
        // setContent('');
        // set the message
        return setMessage(data.message);
    } else {
        // set the error
        return setError(data.message);
    }
};
  
  return (
    <Layout>

      <Header>
        <HeaderWrapper>
          <Link href="/">
            <a>
              <Logo>
                <Image src="/images/eternity-logo2.webp" width={2001} height={826} alt="Eternity Logo" layout="responsive" />
              </Logo>
            </a>
          </Link>
        </HeaderWrapper>
      </Header>

      <Main>
        <CampaignSection>
          <CampaignWrapper>
            <IntroContainer>
              <IntroTitle>Sambut Ramadan dengan <Span>Kejutan Hadiah</Span> menarik dari Eternity</IntroTitle>
            </IntroContainer>
            <BannerContainer>
              <Banner>
                <Image priority src="/images/lucky-draw.webp" alt='Lucky Draw Icon' width={1941} height={1000} layout='responsive' />
              </Banner>
              <IntroDescription>Trading dan dapatkan hadiahnya!</IntroDescription>
              <Prize>
                <Image src="/images/hadiah.webp" alt='Prize Icon' width={2932} height={936} layout='responsive' />
              </Prize>
            </BannerContainer>
          </CampaignWrapper>
        </CampaignSection>

        <FormSection>
          <Wrapper>
            <IconContainer>
              <Mbak>
                <Image priority src="/images/mbak.webp" alt='Woman Icon' width={1344} height={1504} layout='responsive' />
              </Mbak>
            </IconContainer>

            <FormContainer>
              {/* <FormTitle>Open Account Now</FormTitle> */}
              <form onSubmit={handlePost}>
                <Form>
                  <FormInput 
                    label="Name" 
                    placeholder="Your Name" 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FormInput 
                    label="Email" 
                    placeholder="Your Email" 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form>
                <Form>
                  <FormInput 
                    label="Phone Number" 
                    placeholder="Your Phone Number" 
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <FormInput 
                    label="Account Number"
                    placeholder="Your Account Number" 
                    type="text" 
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </Form>
                <RegisterButton type='submit'>Get Ticket</RegisterButton>
              </form>
              <ErrorText>{error}</ErrorText>
            </FormContainer>
          </Wrapper>
        </FormSection>

        <TermSection>
          <WrapperTerm>
            <TermContainer>
              <TermTitleContainer>
                <Gift>
                  <Image src='/images/kado-sk.webp' alt='Box Icon' width={1034} height={1065} layout='responsive' />
                </Gift>
                <TermTitle>Syarat & Ketentuan</TermTitle>
              </TermTitleContainer>
              <TermWrapper>
                <TermDescription>1. Peserta membuka akun trading di eternity futures</TermDescription>
                <TermDescription>2. peserta wajib follow Instagram <SocialLink href='https://www.instagram.com/eternity_futures/' target="_blank">eternity_futures</SocialLink> , tiktok <SocialLink href='https://www.tiktok.com/@eternityfutures' target='_blank'>eternityfutures</SocialLink> & channel youtube <SocialLink href='https://www.youtube.com/channel/UC_ZQvXdxeyKLFtzYVtsTyhQ' target='_blank'>Eternity Futures</SocialLink></TermDescription>
                <TermDescription>3. Pemenang akan dihubungi melalui mobile phone.  Pastikan Data diri yang diinput valid.</TermDescription>
                <TermDescription>4. Hadiah akan diundi pada tanggal 29 April 2022 pukul 17.00 waktu Jakarta melalui IG live account <SocialLink href='https://www.instagram.com/eternity_futures/' target="_blank">eternity_futures</SocialLink></TermDescription>
              
              </TermWrapper>
            </TermContainer>

            <IconContainer>
              <Ticket>
                <Image src='/images/tiket.webp' alt='Ticket Icon' width={1237} height={1098} layout='responsive' />
              </Ticket>
            </IconContainer>
          </WrapperTerm>
        </TermSection>

        <LegalSection>
          <FormTitle>Legalitas</FormTitle>
          <LegalContainer>
            <Legal>
              <Image src="/images/bappebti.webp" alt='Bappebti Icon' width={882} height={405} layout='responsive'/>
            </Legal>
            <Legal>
              <Image src="/images/jfx.webp" alt='JFX Icon' width={882} height={405} layout='responsive'/>
            </Legal>
            <Legal>
              <Image src="/images/kbi.webp" alt='KBI Icon' width={882} height={405} layout='responsive'/>
            </Legal>
          </LegalContainer>
        </LegalSection>
      </Main>
      
    </Layout>
  )
}
