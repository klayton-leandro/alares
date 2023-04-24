import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { formValidation } from './validations'

import { 
    Modal,
    Input,
    Divider,
    Button } from 'components'

import { Container } from './styles'

import { queryClient } from 'libs'

import { useUsers } from 'store'

import { userKeY, usersKey } from 'consts/queries'

import { 
    fetchUser,
    storeAdminUser } from 'services/users'
import { forms } from 'consts/errors'
import { toast, displayError } from 'utils'
import theme from 'styles/theme'

export function UserModal () {
    const { state, actions } = useUsers()

    const [params] = useSearchParams() 

    const itensPorPagina = params.get('itensPorPagina')
    const pagina = params.get('pagina')

    const formOptions = { resolver: yupResolver(formValidation) }

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
        setFocus,
        reset
    } = useForm(formOptions)

    const { data: user,  isFetching: isLoadingUser } = useQuery([userKeY, state.modals.user.id], () => fetchUser(state.modals.user.id as any), {
        async onSuccess(data){            
            if(data){
                setValue('email', data.email)
                setValue('phone', data.phone)
            }
        }
    })

    const { mutate: mutateUser, isLoading: isLoadingMutateUser } = useMutation(storeAdminUser, {       
        async onSuccess(){
            toast.messsage('200', 'Usuário Administrador criado com sucesso!')
            handleClose()
            queryClient.invalidateQueries([usersKey, itensPorPagina, pagina])            
        },
        onError(error: any){
            displayError({ error, setError })
            toast.messsage('400', 'Ocorreu um erro ao tentar cadastrar o usuário.')
        }
    })

    
    function onSubmit(values: any){
        const { 
            name,
            phone,
            email,
            password } = values

        const data = {
            name,
            phone,
            email,
            password
        }
       
        mutateUser(data)
    }

    function handleClose(){
        actions.closeModal('user')
        const valuesToReset = ['name', 'email', 'phone', 'password']

        for(const value of valuesToReset){
            setValue(value, '')
        }

        reset()
    }

    return (
        <Modal
            isOpen={state.modals.user.isOpen}
            title={state.modals.user.title}
            handleClose={handleClose}
            style={{ width: 600 }}
        >
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        label="Nome"
                        errors={errors}
                        {...register("name")}
                        defaultValue={user?.name}
                        isLoading={isLoadingUser}
                        disabled={!!state.modals.user.id}
                    />                    

                    {
                        state.modals.user.id && (
                            <>
                                <Input 
                                    label='Perfil'
                                    errors={errors}
                                    value={user?.role}
                                    isLoading={isLoadingUser}
                                    disabled={!!state.modals.user.id}
                                />
                            </>
                        )
                    }

                    <Input
                        type="email"
                        label="Email"
                        errors={errors}
                        {...register("email")}
                        defaultValue={user?.email}
                        disabled={!!state.modals.user.id}
                    />

                    {
                        !state.modals.user.id && (                            
                            <>
                                <Divider />
                                
                                <Input
                                    type="password"
                                    label="Senha"
                                    errors={errors}
                                    {...register("password")}
                                />

                                <Input
                                    type="password"
                                    label="Confirmar Senha"
                                    errors={errors}
                                    {...register("confPassword")}
                                />

                                <Button
                                    type='submit'
                                    style={{ backgroundColor: theme.colors.primary }}
                                    disabled={isLoadingMutateUser}
                                >
                                    Cadastrar
                                </Button>
                            </>
                        )
                    }
                </form>
            </Container>
        </Modal>
    )
}