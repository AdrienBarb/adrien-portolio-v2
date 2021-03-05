import styled from 'styled-components'

export const StyledProjectNavigationWrapper = styled.div`
  background-color: ${(props) => props.theme.text};
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;
`

export const StyledProjectNavigation = styled.div`
  padding: 1rem;
  text-align: ${(props) => (props.left ? 'left' : '')};
  color: ${(props) => props.theme.background};

  h1 {
    margin: 0;
    font-size: 12px;
    color: ${(props) => props.theme.background};
  }

  a {
    color: ${(props) => props.theme.gray};
    font-size: 18px;
    font-style: oblique;
  }
`

export const StyledProjectNavigationContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const NavProjectIconWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: ${(props) => (props.prev ? '.4rem' : '')};
    margin-left: ${(props) => (props.next ? '.4rem' : '')};
  }
`
