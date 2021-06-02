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
    padding: 0 1rem;
    max-width: 1000px;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 1024px) {
      transform: translate(-50%, -50%);
      margin: 0 auto;
      left: 50%;
    }
    @media (max-width: 425px) {
      padding: 0 2rem;
    }

    h1 {
      font-size: 2.6rem;
      font-weight: 600;
      @media (max-width: 768px) {
        text-align: center;
      }
      @media (max-width: 425px) {
        font-size: 2rem;
      }
    }

    .typing {
      color: #e16f64;
    }
  }
`
