import {  ButtonHTMLAttributes } from 'react'
import Tippy from '@tippyjs/react'
import {  MdOutlineCancel } from 'react-icons/md'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function IconCancel(props: Props) {
    return(
        <Tippy
            content={props.placeholder || 'Cancelar'}
        >
            <Container {...props }>
                <MdOutlineCancel size={20} />
            </Container>
        </Tippy>
    )
}