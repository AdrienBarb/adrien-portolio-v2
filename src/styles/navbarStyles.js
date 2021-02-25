 import styled from 'styled-components'

 export const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.6rem 2rem;
    z-index: 1000;
    box-sizing: border-box;
    max-width: 1400px;
    margin: 0 auto;
 `

 export const NavbarStyle = styled.div`
    width: auto;
    margin: 0 auto;
    display: flex;
    align-items: center;
    float: right;
`

export const Navlink = styled.div`
    margin-left: 1rem;

    a {
        cursor: pointer;
    }
`