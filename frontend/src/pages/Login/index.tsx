import { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { useMutation } from 'react-query'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { RiMailLine } from 'react-icons/ri'

import { queryClient } from 'libs'

import { Container } from './styles'

import { Button, Overlay } from 'components'
import { Input } from 'components/Input'

import { meKey } from 'consts/queries'

import { displayError } from 'utils' 

import { login } from 'services/auth'

import { formValidation } from './validations'

import Logo from "assets/logo/alares.png"
import Icon from "assets/logo/icon.svg"
import theme from 'styles/theme'

export function Login () {

    const navigate = useNavigate()

    const formOptions = { resolver: yupResolver(formValidation) }
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm(formOptions)


    const { mutate, isLoading } = useMutation(login, {
        onError(error: any){
            displayError({ error, setError })
        },
        onSuccess(data){
            queryClient.setQueryData(meKey, data)
            navigate('/')
        }
    })

    async function handleSingIn({ email, password }: any) {
        mutate({
            email,
            password
        })
    }
    return (
        <Container>
        <aside>
            <img src={Logo} 
                width={600}
                height={240}
            />
        </aside> 
        <main>
        <nav>   
            <img src={Icon}  height={30}/>
            <strong>Bem Vindo!</strong>
            <p>Digite seu email e senha para entrar</p>
        </nav>

        <form onSubmit={handleSubmit(handleSingIn)}>
            <Input
                type="email"
                placeholder="Email"
                icon={<RiMailLine />}
                errors={errors}
                {...register("email")}
            />

            <Input
                type="password"
                placeholder="Senha"
                errors={errors}
                {...register("password")}
            />
    
            <Button
                style={{ backgroundColor: theme.colors.primary}}
            >
                Entrar
            </Button>
        </form>       
        </main>

        <Overlay isOpen={isLoading}/>
    </Container>
    )
}