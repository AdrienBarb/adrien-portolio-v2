import styled from 'styled-components'

export const StyledProjectWrapper = styled.div`
  padding: 10rem 1rem;
`

export const StyledProject = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  video {
    width: 100%;
    height: auto;
    @media (max-width: 1024px) {
      margin: 0;
    }
  }
`

export const StyledVideoWrapper = styled.div`
  max-width: 900px;
  margin-right: 2rem;
`

export const StyledProjectDescription = styled.div`
  max-width: 218px;
  @media (max-width: 1024px) {
    max-width: 900px;
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



