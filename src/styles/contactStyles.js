import styled from 'styled-components'

export const StyledContact = styled.div`
  padding: 0 1rem;
  height: 100vh;
  display: grid;
  place-items: center;
  .wrapper {
    text-align: center;

    h1 {
      font-size: 4rem;
      font-weight: 800;
      color: #e16f64;
      @media (max-width: 768px) {
        font-size: 2.6rem;
      }
    }

    p {
      font-size: 1.6rem;
      font-family: 'Karla';
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }
`
