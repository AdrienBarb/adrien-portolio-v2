import { motion } from 'framer-motion'
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
    opacity: 0.8;
  }
`

export const StyledProjectInfo = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: ${(props) => (props.matches ? 0 : 1)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.2);
  }

  h1 {
    margin-top: 0;
    font-size: 5rem;
    color: #e16f64;
    @media (max-width: 424px) {
      font-size: 4rem;
    }
  }

  .website-link {
    background-color: #e16f64;
    color: white;
    padding: 0.8rem 1.6rem;
    border-radius: 24px;
    cursor: pointer;
    width: fit-content;

    a {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
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
