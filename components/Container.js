import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  width: 100%;
  margin: 0 auto;
  padding: 0 0;
`

const WrapperGradient = styled.div`
  background: rgb(247,148,29);
  background: linear-gradient(60deg, rgba(247,148,29,1) 0%, rgba(197,72,140,1) 35%);
  width: 100%;
  margin: 0 auto;
  padding: 0 0;
`

const WrapperHeader = styled.div`
  background: rgb(247,148,29);
  background: linear-gradient(60deg, rgba(247,148,29,1) 0%, rgba(197,72,140,1) 35%);
  width: 100%;
  margin: 0 auto;
  padding: 0 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`

const ContainerHeaderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1280px;
`

const ContainerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1024px;
`

export function HeaderContainer({ children }) {
  return (
    <WrapperHeader>
      <ContainerHeaderWrapper>
        {children}
      </ContainerHeaderWrapper>
    </WrapperHeader>
  )
}

export function Container({ children, color }) {
  return (
    <Wrapper backgroundColor={color}>
      <ContainerWrapper>
        {children}
      </ContainerWrapper>
    </Wrapper>
  )
}

export function GradientContainer({ children }) {
  return (
    <WrapperGradient>
      <ContainerWrapper>
        {children}
      </ContainerWrapper>
    </WrapperGradient>
  )
}