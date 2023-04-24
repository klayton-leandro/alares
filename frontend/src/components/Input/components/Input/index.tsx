import { useState, forwardRef, InputHTMLAttributes,  ReactNode, useMemo } from 'react'
//@ts-ignore
import InputMask  from 'react-input-mask'
import { RiSpamLine } from 'react-icons/ri'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlinePercentage } from 'react-icons/ai'

import { Container } from '../styles/globals'

import { Icon } from './styles'

import { currency, percentage } from './masks'
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    icon?: ReactNode
    mask?: 'real' | 'date' | 'cep' | 'cpf' | 'cnpj' | 'phone' | 'percentage'
    active?: boolean
    isLoading?: boolean
    errors?: string |  any   
}

function BaseInput(props: Props, ref: any) {
    const { icon, label, mask, active, isLoading, errors, ...rest } = props

    const [showPassword, setShowPassword] = useState(false)
    
    const masks = {
        'real': '',
        'date': '99-99-9999',
        'cep': '99.999/999',
        'cpf': '999.999.999-99',
        'cnpj': '99.999.999/9999-99',
        'phone': '(99) 99999-9999',
        'percentage': ''
    }
    
    const onChangePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const onChangeCurrency = (e: any) => {
        if(props.onKeyUp){
            props.onKeyUp(e)
        }

        currency(e)
    }

    const onChangePercentage = (e: any) => {
        if(props.onKeyUp){
            props.onKeyUp(e)
        }

        percentage(e)
    }

    const changePasswordType = (type: any) => {       
        if(type === 'password'){
            if(!showPassword){
                return 'password'
            }else{
                return 'text'
            }
        }

        return type
    }

   

    const renderInput = useMemo(() => {
        const placeholder = () => {
            if(isLoading) return 'Carregando os dados...'

            if(props.placeholder) return props.placeholder

            return 'Digitar'
        }

        if(props.mask){
            if(props.mask === 'real'){
                return (
                    <input 
                        type="text"
                        onKeyUp={onChangeCurrency}
                        {...rest}
                        disabled={isLoading? isLoading: props.disabled}
                        placeholder={placeholder()} 
                        ref={ref}
                    />
                )
            }
            else if(props.mask === 'percentage'){
                return(
                    <div className="percent-box-input">
                        <input 
                            type="text"
                            onKeyUp={onChangePercentage}  
                            {...rest} 
                            disabled={isLoading? isLoading: props.disabled}
                            placeholder={placeholder()}
                            ref={ref}
                        />

                        <div className="percent-box-input-icon">
                            <AiOutlinePercentage />
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <InputMask 
                        {...rest}
                        disabled={isLoading? isLoading: props.disabled}
                        placeholder={placeholder()} 
                        ref={ref}
                        mask={masks[props.mask]}
                    />    
                )
            }
        }

        if(!props.mask){
            return (
                <input 
                    {...rest} 
                    type={changePasswordType(props.type)}
                    disabled={isLoading? isLoading: props.disabled}
                    placeholder={placeholder()}
                    ref={ref}
                />
            )
        }
    },[props, ref, showPassword, isLoading])


    return(
        <Container
            icon={icon}
            active={active}
            error={errors && !!errors[rest?.name as any]?.message}
            type={props.type}
        >
            <span>{ label}</span>
            {
                icon ? (
                    <Icon
                        label={label}
                    >
                        { icon }

                        <span className='input-span'>
                            |
                        </span>
                    </Icon>
                ): <></> 
            }

            {
                props.type === 'password' && (
                    <Icon
                        label={label}
                    >
                        {
                            !showPassword? <AiOutlineEyeInvisible />: <AiOutlineEye />
                        }

                        <span className='input-span'>
                            |
                        </span>
                    </Icon>
                )
            }
           
            
            {
               renderInput
            }

            {
                props.type === 'password' && (
                    <p 
                        className="show-password"
                        onClick={onChangePasswordVisibility}
                    >
                        { !showPassword ? 'Mostrar a senha' : 'Esconder a senha'}
                    </p>
                )
            }

            {
                (errors && errors[rest.name as any]?.message) && (
                    <div className="input-error">
                      <RiSpamLine />  <p>{ errors[rest?.name as any]?.message }</p>
                    </div>
                )
            }
        </Container>
    )
}

export const Input =  forwardRef(BaseInput)