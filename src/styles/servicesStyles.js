import styled from 'styled-components'

export const StyledServices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem;
    grid-gap: 2rem;
  }
`
