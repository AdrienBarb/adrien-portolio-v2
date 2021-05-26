import styled from 'styled-components'

export const StyledSlideNavigation = styled.div`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  box-sizing: border-box;

  .icon {
    color: #f2ecde;
    background: #1e5871;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    z-index: 20000;

    &:hover {
      color: #1e5871;
      background: #f2ecde;
      cursor: pointer;
      transition: 0.6s all;
    }
  }

  .left {
    position: absolute;
    left: 02rem;
    bottom: 2rem;
  }

  .right {
    position: absolute;
    right: 02rem;
    bottom: 2rem;
  }
`
