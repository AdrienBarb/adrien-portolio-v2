import styled from 'styled-components'
import { motion } from "framer-motion"

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
        position: relative;
        margin-bottom: 0;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.4;
    }
`

export const Title = styled.div`
    display: flex;
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

export const Dot = styled(motion.div)`
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    background-color: ${props => props.theme.text};
    border-radius: 100%;
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    right: 114px;
    cursor: pointer;
`

export const Letter = styled.span`
    color: ${props => props.change ? props.theme.background : props.theme.text};
`

export const ContactWrapperStyle = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 2rem;
`