import {  ButtonHTMLAttributes } from 'react'
import {  RiDownloadCloud2Line } from 'react-icons/ri'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function IconDownload(props: Props) {
    return(
        <Container {...props }>
            <RiDownloadCloud2Line size={30} />
        </Container>
    )
}