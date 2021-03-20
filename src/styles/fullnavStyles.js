import styled from 'styled-components'

export const StyledFullnavWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  visibility: hidden;
  opacity: 0;
  z-index: 10000;
  height: 100vh;
  overflow-y: hidden;
`

export const StyledFullnav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: fit-content;

  a {
    font-size: 3rem;
    margin: 1.2rem 0;
    color: white;
  }
`

export const StyledHumburger = styled.div`
  position: relative;
  z-index: 40000 !important;
  transform: translateX(+12px);
  color: ${props => props.isOpen
    ? (props) => props.theme.background
    : (props) => props.theme.text};
`
