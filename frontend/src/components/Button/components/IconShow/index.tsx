import {  ButtonHTMLAttributes } from 'react'
import Tippy from '@tippyjs/react'
import {  AiOutlineEye } from 'react-icons/ai'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder?: string
}

export function IconShow(props: Props) {
    return(
        <Tippy
            content={props.placeholder || 'Visualizar'}
        >
            <Container {...props }>
                <AiOutlineEye size={30} />
            </Container>
        </Tippy>
    )
}