import styled from 'styled-components'

export const ServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 0 0.4rem 0;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.gray};
  }

  p {
    margin: 0;
    font-size: 16px;
  }
`
