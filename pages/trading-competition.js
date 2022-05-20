import { useState, useRef } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import styled from 'styled-components'
import OtherLeaderboardCard from '../components/OtherLeaderboardCard'

const LayoutComponent = dynamic(() => import('../components/LayoutComponent'))
const HeaderContainer = dynamic(
  () => import('../components/Container').then((mod) => mod.HeaderContainer),
  { ssr: false }
)
const Container = dynamic(
  () => import('../components/Container').then((mod) => mod.Container),
  { ssr: false }
)
const ContainerGradient = dynamic(
  () => import('../components/Container').then((mod) => mod.GradientContainer),
  { ssr: false }
)
const FormInput = dynamic(
  () => import('../components/FormInputCompetition'),
  { ssr: false }
)

const HeaderSection = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 35%;
  }
`

const HeaderButton = styled.button`
  cursor: pointer;
  width: 140px;
  height: 45px;
  border-radius: 10px;
  background: #FF8F5C;
  border: none;
  color: #FDF7F2;
  font-family: "Sora", san-serif;
  font-size: 16px;
  outline: none;
  @media (max-width: 768px) {
    width: 125px;
    height: 40px;
    font-size: 14px;
  }
`

const IntroSection = styled.div`
  padding: 2rem 3rem;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const TitleMargin = styled.h1`
  font-family: "Sora", san-serif;
  font-size: 35px;
  margin: 0;
  margin-bottom: 16px;
  color: ${props => props.color};
  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const Title = styled.h1`
  font-family: "Sora", san-serif;
  font-size: 35px;
  color: #212427;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const SubHeading = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
  text-decoration: underline;
  background: #D64CA8;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
`

const Description = styled.p`
  font-family: "Sora", san-serif;
  color: #212427;
  margin: 0;
  line-height: 1.8;
`

const FormDescription = styled.p`
  font-family: "Sora", san-serif;
  font-size: 12px;
  color: #212427;
  margin: 0;
  line-height: 1.8;
`

const LinkText = styled.a`
  font-family: "Sora", san-serif;
  font-weight: bold;
  line-height: 1.8;
  color: #FFF;
  word-wrap: break-word;
`

const Table = styled.table`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Td = styled.td`
  font-family: "Sora", san-serif;
  padding: 4px 4px 4px 56px;
  color: #212427;
  @media (max-width: 768px) {
    padding: 4px;
  }
`

const Ol = styled.ol`
  padding-left: 20px;
`

const List = styled.li`
  font-family: "Sora", san-serif;
  line-height: 1.8;
  color: #212427;
`

const FormContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Form = styled.div`
  // margin-bottom: 20px;
`

const RegisterButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #FF8F5C;
  border: none;
  color: #FDF7F2;
  font-family: 'Serca';
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 16px;
  :disabled {
    background-color: #f5b598;
    cursor: wait;
  }
`

const ErrorText = styled.p`
  font-family: "Sora", san-serif;
  color: red;
  margin: 0;
  line-height: 2;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const SuccessText = styled.p`
  font-family: "Sora", san-serif;
  color: #02d602;
  margin: 0;
  line-height: 2;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const PrizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainPrize = styled.div`
  width: 656px;
  height: 85px;
  background: #D64CA8;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    height: 65px;
  }
`

const OtherPrize = styled.div`
  width: 556px;
  height: 85px;
  border: 2px solid #D64CA8;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    height: 65px;
  }
`

const PrizeText = styled.p`
  font-family: "Sora", san-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: ${props => props.color};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const Flex = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Asset = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const RowPrize = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const WinnerAsset = styled.div`
  width: max-content;
  position: absolute;
  right: 81%;
  bottom: 81%;
  @media (max-width: 768px) {
    width: 15%;
    position: static;
  }
`

const WinnerAssetSm = styled.div`
  width: max-content;
  position: absolute;
  right: 85%;
  bottom: 75%;
  @media (max-width: 768px) {
    width: 15%;
    position: static;
  }
`

const LeaderboardList = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 3rem 0;
  @media (max-width: 768px) {
   flex-direction: column; 
   gap: 30px;
   margin: 1.5rem 0;
  }
`

const LeaderboardCard = styled.div`
  width: 33%;
  order: ${props => props.order};
  @media (max-width: 768px) {
    width: 100%;
    order: 0;
  }
`

const MainLeaderboard = styled.div`
  height: 300px;
  position: relative;
  border-radius: 12px;
  border: 2px solid #D64CA8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1a1a1a;
  @media (max-width: 768px) {
    height: max-content;
    padding: 12px;
    flex-direction: row;
    justify-content: space-between;
  }
`

const OtherLeaderboard = styled.div`
  height: 250px;
  position: relative;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1a1a1a;
  @media (max-width: 768px) {
    padding: 12px;
    height: max-content;
    flex-direction: row;
    justify-content: space-between;
  }
`

const LeaderboardName = styled.p`
  font-family: "Sora", san-serif;
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ProfitText = styled.p`
  font-family: "Sora", san-serif;
  font-size: 36px;
  font-weight: bold;
  color: #7BF795;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const OtherLeaderboardList = styled.div`

`

const PinkBar = styled.div`
  border-top: 8px solid #D64CA8;
  width: 120px;
  margin: 30px auto;
`

export default function Home() {
  const registerRef = useRef()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  function handleRegisterScroll() {
    registerRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePost = async (e) => {
    e.preventDefault();

    // reset error and message
    setError('');
    setMessage('');

    // fields check
    if (!name || !email || !phoneNumber ) return setError('All fields are required');

    setLoading(true);
    // post structure
    let user = {
        name,
        email,
        phoneNumber,
        createdAt: new Date().toString(),
    };
    // save the post
    let response = await fetch('/api/trading-comp', {
        method: 'POST',
        body: JSON.stringify(user),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
        // reset the fields
        setName('');
        setEmail('')
        setPhoneNumber('')
        setLoading(false);

        // set the message
        return setMessage('Success Input Data');
    } else {
        // set the error
        setLoading(false);
        return setError('Error, please try again');
    }
  };

  return (
    <LayoutComponent>
      <Head>
        <title>Trading Competition</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderContainer>
        <HeaderSection>
          <LogoContainer>
            <Image src={"/trading-comp/eternity-logo-white.webp"} width={145} height={32} alt="Eternity Logo" />
          </LogoContainer>
          <HeaderButton onClick={handleRegisterScroll}>Register Now</HeaderButton>
        </HeaderSection>
      </HeaderContainer>
      
      <Container>
        <IntroSection>
          <Title>ETERNITY PRESENT:</Title>
          <TitleMargin color='#212427'>TRADING COMPETITION 2022</TitleMargin>
          <Image src={"/trading-comp/banner-final4.webp"} width={1080} height={552} alt="Banner" />
          <Description style={{ marginTop: 16 }}>Saat yang ditunggu-tunggu nih!</Description> 
          <Description>Kompetisi Trading 2022 dari Eternity Futures akan hadir untuk kamu para trader dan investor. Yuk gabung di Eternity Trading Competition 2022 dan menangkan total hadiah Rp 100 Juta++.</Description>
          <Description>Kapan lagi TRADING BOHONGAN tapi dapat DUIT BENERAN?</Description>
        </IntroSection>
      </Container>

      <ContainerGradient>
        <IntroSection>
          <TitleMargin color='#FFF'>Persyaratan & Pendaftaran Eternity Trading Competition</TitleMargin>
          <Ol type='1'>
            <List style={{ color: '#FFF' }}>Calon peserta wajib mengisi formulir registrasi yang tersedia di halaman web resmi Eternity Futures <span><LinkText href='https://campaign.eternityfutures.com/trading-competition'>https://campaign.eternityfutures.com/trading-competition</LinkText></span></List>
            <List style={{ color: '#FFF' }}>Calon Peserta dapat mendaftar untuk ikut dalam Eternity Trading Competition pada 23 Mei - 9 Juni 2022</List>
            <List style={{ color: '#FFF' }}>Eternity trading competition 2022 akan berlangsung <b>mulai dari 13 hingga 24 Juni 2022</b></List>
            <List style={{ color: '#FFF' }}>Kepada Peserta akan diberikan Akun demo sebesar $2,000 dan peserta harus melakukan transaksi sebanyak <b>minimum 5 lots turnover</b></List>
          </Ol>
        </IntroSection>
      </ContainerGradient>

      <Container>
        <IntroSection>
          <TitleMargin color='#212427'>Hadiah Eternity Trading Competition</TitleMargin>

          <PrizeContainer>
            <MainPrize>
              <PrizeText color='#FFF'>Juara 1</PrizeText>
              <PrizeText color='#FFF'>Rp 10,000,000</PrizeText>
            </MainPrize>

            <OtherPrize>
              <PrizeText color='#212427'>Juara 2</PrizeText>
              <PrizeText color='#212427'>Rp 5,000,000</PrizeText>
            </OtherPrize>

            <OtherPrize>
              <PrizeText color='#212427'>Juara 3</PrizeText>
              <PrizeText color='#212427'>Rp 2,000,000</PrizeText>
            </OtherPrize>

            <OtherPrize>
              <PrizeText color='#212427'>Juara 4 - 10</PrizeText>
              <PrizeText color='#212427'>@ Rp 1,000,000</PrizeText>
            </OtherPrize>

            <OtherPrize>
              <PrizeText color='#212427'>Turnover Terbanyak</PrizeText>
              <PrizeText color='#212427'>Rp 3,000,000</PrizeText>
            </OtherPrize>
          </PrizeContainer>

          <SubHeading>Hadiah Tambahan:</SubHeading>
          <Ol type='1'>
            <List>Kepada 10 pemenang akan diberikan <b> Demo Accounts dengan nominal $1,000</b> dimana <b> PROFIT yang dihasilkan dapat di-withdraw</b> dengan ketentuan:</List>
            <ul>
              <List>transaksi minimal 20 lots turnover</List>
              <List>periode transaksi 2 minggu</List>
              <List>maksimum profit yang dapat di-withdraw sebesar $1,000 atau Rp 10juta</List>
            </ul>
            <List>Untuk <u>semua peserta Trading Competition</u> yang membuka Real Account akan <b>mendapatkan FREE COMM hingga akhir Juli 2022</b></List>
          </Ol>

        </IntroSection>
      </Container>

      <div ref={registerRef}>
        <ContainerGradient>
          <IntroSection>
            <TitleMargin color='#FFF'>Daftar Sekarang!</TitleMargin>
            <Flex>
              <FormContainer>
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
                    <FormInput 
                      label="Phone Number" 
                      placeholder="Your Phone Number" 
                      type="text" 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Form>
                  <FormDescription>Peserta akan dikonfirmasi melalui Nomor Telepon ini.</FormDescription>
                  <FormDescription>Pastikan Nomor yang Anda input VALID.</FormDescription>
                  <RegisterButton type='submit' disabled={loading}>
                    {loading ? 'Loading..' : 'Submit'}
                  </RegisterButton>
                </form>
                <ErrorText>{error}</ErrorText>
                <SuccessText>{message}</SuccessText>
              </FormContainer>

              <Asset>
                <Image src={"/trading-comp/trading-comp2.webp"} width={750} height={700} alt="Asset" />
              </Asset>
            </Flex>
            
          </IntroSection>
        </ContainerGradient>
      </div>

      <Container>
        <IntroSection>
          <TitleMargin color='#212427'>Syarat & Ketentuan Eternity Trading Competition</TitleMargin>
          <Ol type='1'>
            <List>Eternity Trading Competition 2022 akan dilaksanakan dengan details sebagai berikut:</List>
            <Table>
              <tbody>
                <tr>
                  <Td>Periode Registrasi</Td>
                  <Td>: 23 Mei - 9 Juni 2022</Td>
                </tr>
                <tr>
                  <Td>Periode Trading Competition</Td>
                  <Td>: 13 - 24 Juni 2022</Td>
                </tr>
                <tr>
                  <Td>Pengumuman Pemenang</Td>
                  <Td>: 27 Juni 2022</Td>
                </tr>
              </tbody>
            </Table>
            <List>
              <Ol type='a'>
                <List>Pemenang ditentukan berdasarkan jumlah profit terbesar dan harus memenuhi persyaratan trading (minimal 5 lots turnover).</List>
                <List>Jumlah profit dari 10 peserta teratas akan di update tiap hari dalam leaderboard berdasarkan harga closing hari sebelumnya.</List>
              </Ol>
            </List>
            <List>Pemenang Eternity Trading Competition 2022 akan diumumkan melalui Story dan Feed IG Eternity.</List>
            <List>Peserta harus berusia minimal 21 tahun dan hanya dapat mendaftarkan 1 (satu) akun untuk berpartisipasi dengan memberikan data diri yang benar.</List>
            <List>Hadiah tidak dapat dipindahtangankan atau dialihkan kepada pihak lain.</List>
            <List>Pemenang akan diminta untuk memberikan foto selfie dengan KTP dan KTP miliknya melalui Google Form untuk tujuan Konfirmasi Identitas.</List>
            <List>Dengan mengikuti Eternity Trading Competition 2022, Peserta mengerti dan setuju terhadap Syarat & Ketentuan Trading Competition 2022.</List>
            <List>Keputusan yang ditetapkan pihak Eternity Futures bersifat final, mengikat, mutlak dan tidak dapat diganggu gugat.</List>
          </Ol>

        </IntroSection>
      </Container>

      <Container color="#172026">
        <IntroSection>
          <TitleMargin color='#FDFAF7'>Leaderboard Hari Ini</TitleMargin>
          <LeaderboardList>

            <LeaderboardCard order="2">
              <MainLeaderboard>
                <WinnerAsset>
                  <Image src={"/trading-comp/winner-1.webp"} width={100} height={100} />
                </WinnerAsset>
                <LeaderboardName>Test 1</LeaderboardName>
                <ProfitText>+533,96%</ProfitText>
              </MainLeaderboard>
            </LeaderboardCard>

            <LeaderboardCard order="1">
              <OtherLeaderboard>
                <WinnerAssetSm>
                  <Image src={"/trading-comp/winner-2.webp"} width={80} height={80} />
                </WinnerAssetSm>
                <LeaderboardName>Test 2</LeaderboardName>
                <ProfitText>+200,73%</ProfitText>
              </OtherLeaderboard>
            </LeaderboardCard>

            <LeaderboardCard order="3">
              <OtherLeaderboard>
                <WinnerAssetSm>
                  <Image src={"/trading-comp/winner-3.webp"} width={80} height={80} />
                </WinnerAssetSm>
                <LeaderboardName>Test data</LeaderboardName>
                <ProfitText>+33,96%</ProfitText>
              </OtherLeaderboard>
            </LeaderboardCard>

          </LeaderboardList>

          <PinkBar />

          <OtherLeaderboardList>
            <OtherLeaderboardCard rank='4' name='Finsen Antonius' gain="+159%" />
            <OtherLeaderboardCard rank='5' name='Finsen Antonius' gain="+159%" />
            <OtherLeaderboardCard rank='6' name='Finsen Antonius' gain="+159%" />
            <OtherLeaderboardCard rank='7' name='Finsen Antonius' gain="+159%" />
            <OtherLeaderboardCard rank='8' name='Finsen Antonius' gain="+159%" />
            <OtherLeaderboardCard rank='9' name='Finsen Antonius' gain="+159%" />
            <OtherLeaderboardCard rank='10' name='Finsen Antonius' gain="+159%" />
          </OtherLeaderboardList>


        </IntroSection>
      </Container>

    </LayoutComponent>
  )
}
