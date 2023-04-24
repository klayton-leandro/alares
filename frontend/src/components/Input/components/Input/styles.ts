import styled from 'styled-components'

export const Icon = styled.div<{ label?: string}>`
    position: absolute;
    top: ${props => props?.label?.length? '30px': '20px'};
    left: 10px;
    margin-top: 2px;
    
    
    span.input-span {
        font-size: 30px;
        font-weight: 100;
        color: ${({ theme }) => theme.colors.black};
        opacity: 0.1;
    }

    svg {
        margin: 2px 10px auto 10px;
        transform: scale(1.4);
    }
`