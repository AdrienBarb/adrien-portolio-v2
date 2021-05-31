import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1.2rem 1rem;
  z-index: 10000;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 0 auto;
  left: 0;
  right: 0;

  .navbar {
    width: auto;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .home-link {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .nav-links {
    display: flex;
    align-items: center;
    .nav-link {
      font-weight: 100;
      margin-left: 1rem;
    }
  }
`


