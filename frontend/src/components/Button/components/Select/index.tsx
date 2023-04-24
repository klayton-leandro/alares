import { ButtonHTMLAttributes, SelectHTMLAttributes } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md' 

import { 
    Container,
    Box } from './styles'
import { RiSpamLine } from 'react-icons/ri'


type Option = {
    value?: any
    label: string
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
    label?: string
    errors? : string |  any
    options: Array<Option> | undefined
    width?: number
    height?: number
    isLoading?: boolean
}


export function Select (props: Props) {
    const { value, placeholder, label, ...rest } = props
    

    const error = props.errors? props.errors[props?.name as any]?.message : null

    return (
        <Container>
            { label && (
                <span>{ label }</span>
            )}
            <Box
                {...rest}
            >   
                <option value="select">
                        Selecionar
                    </option>
                {
                    props.isLoading && (
                        <option value="loading">
                            Carregando...
                        </option>
                    )
                }
                {
                    props?.options?.map(item => (
                        <option key={item.label} value={item.value}>
                            { item.label }
                        </option>
                    ))
                }     
                {
                    error?.length && (
                        <div className="select-error">
                        <RiSpamLine />  <p>{ error }</p>
                        </div>
                        )
                }
            </Box>
        </Container>
    )
}