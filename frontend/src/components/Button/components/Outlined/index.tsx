import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string
    active?: boolean
}

export function Outlined (props: Props) {
    return(
        <Container
            { ...props }
            
        >
            <p>
                { props.title || props.children }
            </p>
        </Container>
    )
}