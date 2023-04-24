import styled from 'styled-components'

export const IconBaseContainer = styled.button`
    :disabled {
        cursor: default;
        background: rgba(0, 0, 0, 0.05);
        color: #ADADAD;

        p {
            color: #ADADAD;
        }
    }

    transition: filter 0.4s;    

    :hover {
        filter: brightness(0.8);
    }
`