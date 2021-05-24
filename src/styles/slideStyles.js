import styled from 'styled-components'

export const StyledSlide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin: 0;
  }

  p {
    font-size: 1.6rem;
    font-family: 'Karla';
  }

  .description {
    max-width: 600px;
    position: absolute;
    left: 6rem;
    top: 4rem;
  }

  img {
    max-width: 700px;
    width: 100%;
    position: absolute;
    right: 6rem;
    bottom: 4rem;
  }
`
