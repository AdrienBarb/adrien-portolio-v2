import styled from 'styled-components'

export const StyledContact = styled.div`
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
  h1 {
    margin: 0 0 0.4rem 0;
    font-size: 14px;
    color: ${(props) => props.theme.gray};
  }

  a {
    margin: 0;
    font-size: 18px;
  }
`

export const StyledContactWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  box-sizing: border-box;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  max-width: 1400px;
  pacity: 1;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    max-width: fit-content;
  }

  .social-icon {
    font-size: 22px;
    color: ${(props) => props.theme.text};
  }
`
