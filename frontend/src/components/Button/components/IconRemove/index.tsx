import {  ButtonHTMLAttributes } from 'react'
import Tippy from '@tippyjs/react'
import {  RiDeleteBin2Line } from 'react-icons/ri'


import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder?: string
}

export function IconRemove(props: Props) {
    return(
        <Tippy
            content={props.placeholder || 'Excluir'}
        >
            <Container {...props }>
                <RiDeleteBin2Line size={30} />
            </Container>
        </Tippy>
    )
}