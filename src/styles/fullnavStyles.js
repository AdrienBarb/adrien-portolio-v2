import styled from 'styled-components'

export const StyledFullnavWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e16f64;
  visibility: hidden;
  opacity: 0;
  z-index: 10000;
  height: 100vh;
  overflow-y: hidden;
  display: grid;
  place-items: center;
`

export const StyledFullnav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  a {
    font-size: 2rem;
    margin: 1.2rem 0;
    color: #f2ecde;
    font-weight: 100;
  }
`

export const StyledHumburger = styled.div`
  position: relative;
  z-index: 40000 !important;
  transform: translateX(+12px);
  color: ${(props) => (props.isOpen ? '#F2ECDE' : '#1E5871')};
`
