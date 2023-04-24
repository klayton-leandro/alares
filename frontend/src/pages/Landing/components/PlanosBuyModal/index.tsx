import { useSearchParams } from 'react-router-dom'
import {  useMutation } from 'react-query'
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

import { usersKey } from 'consts/queries'

import { storePurchaseBuy } from 'services/users'
import { forms } from 'consts/errors'
import { toast, displayError, normalizeText } from 'utils'
import theme from 'styles/theme'

export function PlanosBuyModal () {
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
        reset
    } = useForm(formOptions) 

    const { mutate: mutatePurchase, isLoading: isLoadingmutatePurchase } = useMutation(storePurchaseBuy, {       
        async onSuccess(){
            toast.messsage('200', 'Pedio criado com sucesso!')
            handleClose()
            queryClient.invalidateQueries([usersKey, itensPorPagina, pagina])            
        },
        onError(error: any){
            displayError({ error, setError })
            toast.messsage('400', 'Ocorreu um erro ao tentar cadastrar o pedido.')
        }
    })
    
    function onSubmit(values: any){
        values = {
            ...values,
            plansId: state.modals.purchaseBuy.id,
            price: state.modals.purchaseBuy.price
        }
        mutatePurchase(values)
    }   

    function handleClose(){
        actions.closeModal('purchaseBuy')
        const valuesToReset = ['name', 'phone', 'email', 'password']

        for(const value of valuesToReset){
            setValue(value, '')
        }

        reset()
    }

    return (
        <Modal
            isOpen={state.modals.purchaseBuy.isOpen}
            title={state.modals.purchaseBuy.title}
            handleClose={handleClose}
            style={{ width: 600 }}
        >
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        label="Nome"
                        errors={errors}
                        {...register("name")}
                        isLoading={isLoadingmutatePurchase}
                    />

                    <Input 
                        label="Telefone"
                        mask="phone"
                        errors={errors}
                        {...register("phone")}
                        isLoading={isLoadingmutatePurchase}
                    />


                    <Input 
                        label="Email"
                        errors={errors}
                        {...register("email")}
                        isLoading={isLoadingmutatePurchase}
                    />

                    <Input
                        type="password"
                        placeholder="Senha"
                        errors={errors}
                        {...register("password")}
                    />

                    {
                        !state.modals.purchase.id && (                            
                            <>

                                <Button
                                    type='submit'
                                    style={{ backgroundColor: theme.colors.primary }}
                                      isLoading={isLoadingmutatePurchase}
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