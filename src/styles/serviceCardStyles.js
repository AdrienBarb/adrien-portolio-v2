import styled from 'styled-components'

export const ServiceCardWrapper = styled.div`
    display: flex;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
    @media (max-width: 768px) {
        flex-direction: row;
    }
    @media (max-width: 425px) {
        flex-direction: column;
    }

    h1 {
        margin: 0 1rem 0 0;
        font-size: 16px;
        font-weight: 700;
        color: ${props => props.theme.gray};
        @media (max-width: 1024px) {
            margin: 0 0 0.4rem 0;
        }
        @media (max-width: 768px) {
            margin: 0 1rem 0 0;
        }
        @media (max-width: 425px) {
            margin: 0 0 0.4rem 0;
        }
    }

    p {
        margin: 0;
        font-size: 16px;
    }

`