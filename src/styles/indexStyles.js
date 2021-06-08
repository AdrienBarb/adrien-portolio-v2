import { motion } from 'framer-motion'
import styled from 'styled-components'

export const IndexStyled = styled(motion.div)`
  .slide {
    color: #f2ecde;
  }

  .fp-prev, .fp-next {
    display: none
  }

  .fp-slidesContainer {
    width: 300%;
    transition: all 700ms ease 0s;
    transform: translate3d(-${(props) => props.transformation}vw, 0px, 0px);
  }

`
