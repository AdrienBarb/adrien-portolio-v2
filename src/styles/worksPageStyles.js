import styled from 'styled-components'

export const StyledWorksWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`

export const StyledWork = styled.div`
  p {
    color: ${(props) => props.theme.text};
    margin: 0 0 0.4rem;
    font-size: 20px;
    &:hover {
      color: ${(props) => props.theme.gray};
      cursor: pointer;
      transition: all 0.4s;
    }
  }

  span {
    margin-right: 0.2rem;
    color: ${(props) => props.theme.gray};
    font-size: 16px;
  }
`
