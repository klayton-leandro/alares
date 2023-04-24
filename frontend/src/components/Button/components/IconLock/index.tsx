import {  ButtonHTMLAttributes } from 'react'
import { RiLock2Line } from 'react-icons/ri'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function IconLock(props: Props) {
    return(
        <Container {...props }>
            <RiLock2Line size={30} />
        </Container>
    )
}