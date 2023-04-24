import { InputHTMLAttributes, useState } from 'react'

import { Container } from '../styles/globals'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    radioLabel: string
    active?: boolean
    onCheck: (value: boolean) =>  void
}

export function Radio(props: Props) {
    const [checked, setChecked] = useState(props.checked) 
    const [ value, setValue ] = useState() 

    const { label, radioLabel, onCheck, ...rest } = props

    const onChange = (e: any) => {
        props.onChange? props.onChange(e): null

        setValue(e.target.value)
    }

    const onClick = () => {
        onCheck? onCheck(!checked) : null
        setChecked(!checked)
    }
   
    return(
        <Container
            onClick={onClick}
            active={props.active}
        >
            { label && <span>{ label }</span>}
            <div className="box">
                <input 
                    { ...rest } 
                    type='radio' 
                    checked={props.checked !== undefined? props.checked: checked}
                    onChange={onChange}
                    value={value}
                />
                <div className="circle">
                    <div className="point" />
                </div>

                <div className="divider" />
                
                 <p> { radioLabel }</p>
            </div>
        </Container>
    )
}

