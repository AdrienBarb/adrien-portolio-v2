import styled from 'styled-components'

export const StyledProjectWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
`

export const StyledProject = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100%;
    height: auto;
    @media (max-width: 1024px) {
      margin: 0;
    }
  }
`

export const StyledVideoWrapper = styled.div`
  max-width: 800px;
  margin-right: 2rem;
  @media (max-width: 1024px) {
    margin: 0;
  }
`

export const StyledProjectDescription = styled.div`
  max-width: 300px;
  @media (max-width: 1024px) {
    max-width: 800px;
    margin-top: 2rem;
  }

  h1 {
    margin-top: 0;
    color: ${(props) => props.theme.text};
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme.text};
  }

  a {
    font-size: 14px;
    font-style: oblique;
    color: ${(props) => props.theme.gray};
    transition: all 0.4s;
    &:hover {
      transition: all 0.4s;
      color: ${(props) => props.theme.text};
    }
  }
`
