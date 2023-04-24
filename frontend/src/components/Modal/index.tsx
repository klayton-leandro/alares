import { useState, useEffect, CSSProperties, ReactNode } from 'react'

import { AiOutlineClose } from 'react-icons/ai'

import { Divider } from 'components'

import {
    Container,
    Body,
    Header,
    Content } from './styles'

type Props = {
    isOpen: boolean
    handleClose: () => void
    title: string | ReactNode
    style?: CSSProperties
    className?: string
    children: ReactNode
}

export function Modal(props: Props) {
    const { 
            isOpen, 
            handleClose, 
            title, 
            style,
            className,
            children } = props

    const [isClosed, setIsClosed] = useState(true)
   
    window.onclick =  (e: any) => {
        if(typeof e.target.className !== 'string') return


        if(e.target.className.includes('modal')){
            setIsClosed(true)
            handleClose()
        }
    }
   
    
    useEffect(() => {
        setIsClosed(isOpen)        
    },[isOpen])

    return(
        <Container
            isOpen={!isClosed}
            className='modal'
        >
            <Body
                style={style}
                className={className}
            >
                <Header>
                    <h1>{ title }</h1>

                    <AiOutlineClose 
                        size={20} 
                        onClick={handleClose}
                    />
                </Header>

                <Divider />

                <Content>
                    { children}
                </Content>
            </Body>
        </Container>
    )
}