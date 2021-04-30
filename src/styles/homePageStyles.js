import styled from 'styled-components'

export const StyledMainSection = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const StyledDescription = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 2rem;
  margin-left: 4rem;
  max-width: 580px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    transform: translate(-50%, -50%);
    margin: 0 auto;
    left: 50%;
  }
  @media (max-width: 425px) {
    padding: 0 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    position: relative;
    margin-bottom: 1.8rem;
    @media (max-width: 425px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    margin-top: 0;
    line-height: 1.4;
    font-weight: 200;
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
`
