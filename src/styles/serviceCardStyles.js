import styled from 'styled-components'

export const StyledServiceCard = styled.div`
  background-color: #1e5871;
  color: #f2ecde;
  border-radius: 12px;
  padding: 1rem;
  position: relative;

  h1 {
    color: #e16f64;
    position: absolute;
    top: -52px;
    font-size: 2.6rem;
    @media (max-width: 768px) {
      font-size: 1.8rem;
      top: -36px;
    }
  }

  p {
    font-size: 1.2rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`
