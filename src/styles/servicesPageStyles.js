import styled from 'styled-components'

export const StyledServicesWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 4rem;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    position: relative;
    margin: 10rem auto 0 auto;
    transform: none;
    top: 0;
    left: 0;
  }
`
