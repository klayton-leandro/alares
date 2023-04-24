
import { forwardRef, SelectHTMLAttributes } from 'react'
import { RiArrowDropDownLine, RiSpamLine } from 'react-icons/ri'

import { Container } from '../styles/globals'

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

function BaseSelect(props: Props, ref: any) {
    const { isLoading, ...rest } = props

    const error = props.errors? props.errors[props?.name as any]?.message : null

    return(
        <Container 
            label={props.label}
            error={!!error}
            width={props.width}
            height={props.height}
        >
            { !!props.label? <span>{ props.label }</span>: <></>}
            <select 
                {...rest} 
                value={props.isLoading? 'loading': props.value}
                disabled={props.isLoading? props.isLoading: props.disabled}
                ref={ref}
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
            </select>

            <RiArrowDropDownLine size={25} className='selectIcon' />

            {
                error?.length && (
                    <div className="input-error">
                      <RiSpamLine />  <p>{ error }</p>
                    </div>
                )
            }
        </Container>
    )
}

export const Select = forwardRef(BaseSelect)