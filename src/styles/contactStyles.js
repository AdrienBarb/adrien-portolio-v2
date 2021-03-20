import styled from 'styled-components'

export const StyledContact = styled.div`
    
    h1 {
        margin: 0 0 0.4rem 0;
        font-size: 14px;
        color: ${props => props.theme.gray}
    }

    a {
        margin: 0;
        font-size: 18px;
    }

`

export const StyledContactWrapper = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    left: 0;
    box-sizing: border-box;
    padding: 1rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    max-width: 1400px;
    right: 0;
    @media (max-width: 768px) {
        height: 22px;
    }

    .social-icon {
        font-size: 22px;
        color: ${props => props.theme.text};
    }
`

