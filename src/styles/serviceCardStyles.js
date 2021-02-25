import styled from 'styled-components'

export const ServiceCardWrapper = styled.div`
    display: flex;

    h1 {
        margin: 0 1rem 0 0;
        font-size: 18px;
        font-weight: 700;
        color: ${props => props.theme.gray}
    }

    p {
        margin: 0;
        font-size: 18px;
    }

`