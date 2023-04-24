import { ReactNode, CSSProperties, useMemo } from 'react'

import styled from 'styled-components'

const Bold = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.black};   
`

const Normal = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.black};
`

type Props = {
    type?: 'bold'
    onClick?: () => void
    children: ReactNode
    style?: CSSProperties
}

export function Text ({ type, children, style, ...rest }: Props) {

    const component = useMemo(() => {
        if(type === 'bold') return (
            <Bold 
                style={style}
                {...rest}
            >
                { children }
            </Bold>
        )

        return(
            <Normal 
                style={style} 
                {...rest}
            >
                { children }
            </Normal>
        )
    }, [type, children])

   
    
    return component
}