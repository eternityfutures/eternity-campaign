import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 16px;
  border-radius: 10px;
  align-items: center;
  background: #1a1a1a;
`

const RowData = styled.div`
  max-width: 50%;
  flex-basis: 33%;
`

const Data = styled.p`
  font-family: "Sora", san-serif;
  margin: 0;
  color: #FFFFFF;
`

const DataGain = styled.p`
  font-family: "Sora", san-serif;
  font-weight: bold;
  text-align: end;
  margin: 0;
  color: #FFFFFF;

`

export default function OtherLeaderboardCard({ rank, name, gain }) {
  return (
    <Container>
      <RowData>
        <Data>{rank}</Data>
      </RowData>
      <RowData>
        <Data>{name}</Data>
      </RowData>
      <RowData>
        <DataGain>{gain}</DataGain>
      </RowData>
    </Container>
  )
}