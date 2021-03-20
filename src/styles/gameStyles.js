import styled from 'styled-components'

export const StyledGame = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 76px;
    margin: 0 1rem;
  }

  p {
    font-size: 42px;
    margin: 0;
    white-space: nowrap;
  }
`
