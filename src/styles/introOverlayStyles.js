import styled from 'styled-components'

export const StyledIntroOverlay = styled.div`
    height: 100vh;
    position: absolute;
    z-index: 30000;
    width: 100%;
    left: 0;

  .overlay {
    position: absolute;
    height: 33.333vh;
    width: 100%;
    background-color: white;
    top: 0;
    left: 0;
    &:nth-child(2) {
        top: 33.333%;
    }
    &:nth-child(3) {
        top: 66.666%;
    }
  }
`
