import { useId } from 'react'
import PlaceholderLoading from 'react-placeholder-loading'
import styled from 'styled-components'

import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    isLoading: boolean
    rects?: number
}

const Container = styled.div`
    padding: 20px;
`

export function LoadingProgress(props: Props) {
    if(props.isLoading){
        const {  rects = 6 } = props

        return (
            <Container>
                {
                    Array.from({ length: rects }).map((_: any) => (
                        <PlaceholderLoading key={useId()} shape='rect' width='100%' height={20} />
                    ))
                }
            </Container>
        )
    }

    return(
        <>
            { props.children }
        </>
    )
}