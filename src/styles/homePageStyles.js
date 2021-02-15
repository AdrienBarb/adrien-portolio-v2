import styled from 'styled-components'

export const MainSection = styled.div`
    height: 100vh;
    width: 100%;
`

export const NavbarWrapper = styled.div`
    opacity: 0;
    position: fixed;
    top: 0;
    width: 100%;
`

export const Description = styled.div`
    opacity: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 12rem;
    max-width: 560px;

    h1 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.4;
    }
`

export const MoreInfos = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    font-weight: 200;
    transition: 0.6s color;
    color: ${props => props.theme.text};
    &:hover {
        transition: 0.6s color;
        cursor: pointer;
        color: ${props => props.theme.gray};
    }
`