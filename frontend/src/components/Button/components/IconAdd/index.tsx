import {  ButtonHTMLAttributes } from 'react'
import {  BiPlus } from 'react-icons/bi'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function IconAdd(props: Props) {
    return(
        <Container {...props }>
            <BiPlus size={20} />
        </Container>
    )
}