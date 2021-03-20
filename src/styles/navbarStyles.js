import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.6rem 2rem;
  opacity: 0;
  z-index: 8000;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 0 auto;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.background};

  .navLink {
    cursor: pointer;
  }
`

export const NavbarStyle = styled.div`
  width: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Navlink = styled.div`
  display: flex;
  align-items: center;
  .navLink {
    margin-left: 1rem;
  }
`
