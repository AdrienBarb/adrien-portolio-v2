import styled from 'styled-components'

export const StyledGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);

  img {
    width: 76px;
    margin: 0 1rem;
  }

  svg {
    fill: red;
  }

  p {
    font-size: 42px;
    margin: 0;
  }
`
