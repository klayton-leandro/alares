import {  ButtonHTMLAttributes } from 'react'
import { RiMailLine } from 'react-icons/ri'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function IconMail(props: Props) {
    return(
        <Container {...props }>
            <RiMailLine size={30} />
        </Container>
    )
}