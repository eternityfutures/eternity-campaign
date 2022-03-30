import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  text-align: start;
`

const Label = styled.p`
  font-family: 'Serca';
  font-weight: 600;
  font-size: 24px;
  margin: 0;
  margin-bottom: 6px;
  text-align: start;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Input = styled.input`
  height: 50px;
  width: 100%;
  padding: 12px;
  background-color: #FFFFFF;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
`

export default function FormInput({ label, type, placeholder, value, onChange }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </Container>
  )
}