import styled from 'styled-components'

export const StyledWorkSection = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  padding: 0 1rem;
  text-align: center;

  .project-image-wrapper {
    max-width: 900px;
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
    border-radius: 24px;
  }

  .hover-info {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background: rgba(0, 0, 0, 0.2);
    }

    h1 {
      margin-top: 0;
      font-size: 5rem;
      left: 1rem;
      position: absolute;
      top: -200px;
      color: #e16f64;
      @media (max-width: 768px) {
        top: inherit;
        left: inherit;
        position: relative;
      }
      @media (max-width: 424px) {
        font-size: 4rem;
      }
    }

    .website-link {
      background-color: #e16f64;
      color: white;
      position: absolute;
      left: 1rem;
      bottom: -100px;
      padding: 0.8rem 1.6rem;
      border-radius: 24px;
      cursor: pointer;
      @media (max-width: 768px) {
        top: inherit;
        left: inherit;
        position: relative;
      }

      a {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    }
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
`
