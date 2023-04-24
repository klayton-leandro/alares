import { useEffect, useState } from 'react'
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
    fetchPlan,
    storeAdminUser, 
    storePlans,
    updatePlans} from 'services/users'
import { forms } from 'consts/errors'
import { toast, displayError } from 'utils'
import theme from 'styles/theme'

export function PlansModal () {
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

    const { data: plan,  isFetching: isLoadingPlan } = useQuery([userKeY, state.modals.plan.id], () => fetchPlan(state.modals.plan.id as any), {
        async onSuccess(data){            
            setValue('name', data?.name)
        }
    })  

    const { mutate: mutatePlan, isLoading: isLoadingMutatePlan } = useMutation(storePlans, {       
        async onSuccess(){
            toast.messsage('200', 'Plano criado com sucesso!')
            handleClose()
            queryClient.invalidateQueries([usersKey, itensPorPagina, pagina])            
        },
        onError(error: any){
            displayError({ error, setError })
            toast.messsage('400', 'Ocorreu um erro ao tentar cadastrar o plano.')
        }
    })


    const { mutate: mutatePlanUpdate, isLoading: isLoadingMutatePlanUpdate } = useMutation(updatePlans, {       
        async onSuccess(){
            toast.messsage('200', 'Plano Alterado com sucesso!')
            handleClose()
            queryClient.invalidateQueries([usersKey, itensPorPagina, pagina])            
        },
        onError(error: any){
            displayError({ error, setError })
            toast.messsage('400', 'Ocorreu um erro ao tentar Atualizar o Plano.')
        }
    })

    
    function onSubmit(values: any){ 
        mutatePlan(values)
    }

    function onEdit(values: any) {  
        values = Object.assign({
            ...values,
            id: state.modals.plan.id
        })
        mutatePlanUpdate(values)
    }

    function handleClose(){
        actions.closeModal('plan')
        const valuesToReset = ['name']

        for(const value of valuesToReset){
            setValue(value, '')
        }

        reset()
    }

    return (
        <Modal
            isOpen={state.modals.plan.isOpen}
            title={state.modals.plan.title}
            handleClose={handleClose}
            style={{ width: 600 }}
        >
            <Container>
                <form onSubmit={handleSubmit(!state.modals.plan.id ? onSubmit : onEdit)}>
                    <Input 
                        label="Nome"
                        errors={errors}
                        {...register("name")}
                        defaultValue={plan?.name}
                        isLoading={isLoadingPlan}
                        disabled={!!state.modals.user.id}
                    />                    

                    {
                        !state.modals.plan.id ? (                            
                            <>

                                <Button
                                    type='submit'
                                    style={{ backgroundColor: theme.colors.primary }}
                                    disabled={isLoadingMutatePlan}
                                >
                                    Cadastrar
                                </Button>
                            </>
                        ) : (
                            <>

                                <Button
                                    type='submit'
                                    style={{ backgroundColor: theme.colors.primary }}
                                    disabled={isLoadingMutatePlanUpdate}
                                >
                                    Editar
                                </Button>
                            </>
                        )
                    }
                </form>
            </Container>
        </Modal>
    )
}