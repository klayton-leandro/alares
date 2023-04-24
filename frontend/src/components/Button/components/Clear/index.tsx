import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'


export const Container = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 12px;
    gap: 12px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    p{
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: rgba(0, 0, 0, 0.2);
    }
`

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    
}

export function Clear (props: Props) {
    return(
        <Container
            {...props}
        >
            <p>
                { props.children }
            </p>
        </Container>
    )
}