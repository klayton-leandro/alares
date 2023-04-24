import {  ButtonHTMLAttributes } from 'react'
import Tippy from '@tippyjs/react'
import {  AiOutlineSave } from 'react-icons/ai'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function IconSave(props: Props) {
    return(
        <Tippy
            content={props.placeholder || 'Salvar'}
        >
            <Container {...props }>
                <AiOutlineSave size={20} />
            </Container>
        </Tippy>
    )
}