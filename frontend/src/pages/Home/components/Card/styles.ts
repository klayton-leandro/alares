import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
    background: ${({ theme }) => theme.colors.White};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.06), 0px 10px 15px rgba(0, 0, 0, 0.05), 0px 2px 1px -1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 20px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    p {
        margin-top: 10px;
        font-weight: 700;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primary};
    }

    svg {
        fill: ${({ theme }) => theme.colors.primary};
        stroke: ${({ theme }) => theme.colors.primary};
        transform: scale(4);
        margin-bottom: 20px;
        margin-top: 20px;
    }
`