import { InputHTMLAttributes, useState, useEffect } from 'react'
import { BsCheck } from 'react-icons/bs'

import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    checkboxLabel: string
    checkboxType?: 'active' | undefined
    onChecked?: (value: any ) => void
}
export function Checkbox(props: Props) {
    const [checked, setChecked] = useState(!!props.checked) 

    const { label, checkboxLabel, checkboxType, onChecked, defaultChecked, onClick, ...rest } = props

    const handleClick = (e: any) => {
        onClick && onClick(e)
        setChecked(!checked)
        onChecked && onChecked(`${props.value}` || '')
    }

    useEffect(() => {
        setChecked(!!defaultChecked)
    },[defaultChecked])

    return(
        <Container
            onClick={e => handleClick(e)}
            checkboxType={checkboxType}
        >
            { label? <span>{ label }</span>: <></>}
            <div className="box">
                <input 
                    type='checkbox' 
                    checked={checked}
                    { ...rest } 
                    onChange={() => {}}
                />
                <div className="square">
                    <BsCheck size={20} className="check" />
                </div>

                <div className="divider" />
                
                 <p> {checkboxLabel }</p>
            </div>
        </Container>
    )
}
