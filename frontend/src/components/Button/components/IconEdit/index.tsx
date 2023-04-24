import {  ButtonHTMLAttributes } from 'react'
import Tippy from '@tippyjs/react'
import {  FiEdit2 } from 'react-icons/fi'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder?: string
}

export function IconEdit(props: Props) {
    return(
        <Tippy
            content={props.placeholder || 'Editar' }
        >
            <Container {...props }>
                <FiEdit2 size={20} />
            </Container>
        </Tippy>
    )
}