import styled from 'styled-components'

export const StyledWorkSection = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;

  .project-image-wrapper {
    max-width: 900px;
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
    border-radius: 24px;
  }
`

export const StyledProjectImage = styled.div`
  background-image: url('${(props) => props.img}');
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.6s all;
  background-size: cover;

  &:hover {
    transform: scale(1.05);
    transition: 0.6s all;
  }
`
