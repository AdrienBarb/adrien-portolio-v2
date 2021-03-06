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
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    height: 48px;
    @media (max-width: 768px) {
        height: 22px;
    }

    .social-icon {
        font-size: 22px;
        color: ${props => props.theme.text};
    }
`

