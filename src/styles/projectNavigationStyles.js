import styled from 'styled-components'

export const StyledProjectNavigationWrapper = styled.div`
  background-color: ${(props) => props.theme.text};
  width: 100%;
  height: 62px;
  display: flex;
  position: fixed;
  bottom: 0;
  opacity: 0;
`

export const StyledProjectNavigation = styled.div`
  padding: 1rem 2rem;
  text-align: ${(props) => (props.left ? 'left' : '')};
  color: ${(props) => props.theme.background};

  h1 {
    margin: 0;
    font-size: 12px;
    color: ${(props) => props.theme.background};
  }

  p {
    font-weight: 200;
    color: ${(props) => props.theme.gray};
    font-size: 18px;
    font-style: oblique;
    margin: 0 auto;
  }

  .navProjectLink {
    cursor: pointer;
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

  p {
    margin-right: ${(props) => (props.prev ? '.4rem' : '')};
    margin-left: ${(props) => (props.next ? '.4rem' : '')};
  }
`
