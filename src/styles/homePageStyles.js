import styled from 'styled-components'

export const MainSection = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const Description = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 4rem;
  max-width: 580px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    transform: translate(-50%, -50%);
    margin: 0 auto;
    left: 50%;
  }
  @media (max-width: 425px) {
    padding: 0 1rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    position: relative;
    margin-bottom: 0;
    @media (max-width: 425px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 200;
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
`

export const Title = styled.div`
  display: flex;
`

export const MoreInfos = styled.div`
  opacity: 0;
  bottom: 6rem;
  font-weight: 200;
  transition: 0.6s color;
  white-space: nowrap;
  color: ${(props) => props.theme.gray};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.text};
  }
`

