import styled from 'styled-components'

export const StyledMainSection = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 2rem;
    max-width: 900px;
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
      font-size: 3rem;
      font-weight: 600;
    }

    .typing {
      color: #e16f64;
    }
  }
`
