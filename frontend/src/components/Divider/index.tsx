import { CSSProperties } from 'react'
import styled from 'styled-components'

const Content = styled.hr`
    width: 100%;
    opacity: 0.1;
    border: 1px solid #000000;
    background: ${({ theme }) => theme.colors.black};
`

type props = {
    style?: CSSProperties
}

export function Divider ( props: props ) {
    return (
        <Content style={props.style} />
    )
}