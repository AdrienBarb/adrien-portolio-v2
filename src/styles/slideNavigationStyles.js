import styled from 'styled-components'

export const StyledSlideNavigation = styled.div`
  position: fixed;
  bottom: 102vh;
  left: 50%;
  z-index: 10000;

  .dot {
    width: 6px;
    height: 6px;
    display: block;
    background-color: #f2ecde;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      width: 10px;
      height: 10px;
      transition: .2s all;
    }
  }

  .active {
    width: 12px;
    height: 12px;
  }

  ul {
    position: relative;
    display: inline-flex;
    margin: 0;
    padding: 0;
    list-style: none;
    cursor: default;
  }

  li {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
