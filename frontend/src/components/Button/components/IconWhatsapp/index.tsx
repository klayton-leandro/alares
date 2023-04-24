import {  ButtonHTMLAttributes } from 'react'
import { RiWhatsappLine } from 'react-icons/ri'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function IconWhatsapp(props: Props) {
    return(
        <Container {...props }>
            <RiWhatsappLine size={30} />
        </Container>
    )
}