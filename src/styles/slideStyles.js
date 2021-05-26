import styled from 'styled-components'

export const StyledSlide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.6rem;
    font-family: 'Karla';
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .description {
    max-width: 600px;
    position: absolute;
    left: 6rem;
    top: 4rem;
    @media (max-width: 1024px) {
      position: relative;
      left: inherit;
      top: inherit;
      margin-bottom: 2rem;
      max-width: 700px;
      text-align: center;
    }
  }

  img {
    max-width: 700px;
    width: 100%;
    position: absolute;
    right: 6rem;
    bottom: 4rem;
    @media (max-width: 1024px) {
      max-width: 500px;
      position: relative;
      right: inherit;
      bottom: inherit;
    }
  }
`
