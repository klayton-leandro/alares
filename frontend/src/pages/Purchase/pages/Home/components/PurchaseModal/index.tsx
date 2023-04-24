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
    fetchAllPlans,
    fetchPlans,
    fetchPurchase,
    storeAdminUser, 
    updatePurchase} from 'services/users'
import { forms } from 'consts/errors'
import { toast, displayError, formatCurrency } from 'utils'
import theme from 'styles/theme'
import { Select } from 'components/Button/components'

export function PurchaseModal () {
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
        getValues,
        reset
    } = useForm(formOptions)

    const { data: purchaseUser,  isFetching: isLoadingUser } = useQuery([userKeY, state.modals.purchase.id], () => fetchPurchase(state.modals.purchase.id as any))  


    const { data: plansOptions,  isFetching: isLoadingPlans } = useQuery([userKeY, state.modals.purchase.id], () => fetchAllPlans, {
        async onSuccess(data: Array<any>){       
            console.log("data", data)     
            return data?.map((item: any) => ({
                ...item,
                label: item.name,
                value: item.value
            }))

        }
    })  

    console.log("plansOptions", plansOptions)

    const GET_VALUES = getValues(); 

    const { mutate: mutatePurchase, isLoading: isLoadingmutatePurchase } = useMutation(storeAdminUser, {       
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

    const { mutate: mutatePurchaseUpdate, isLoading: isLoadingMutatePlanUpdate } = useMutation(updatePurchase, {       
        async onSuccess(){
            toast.messsage('200', 'Pedido Alterado com sucesso!')
            handleClose()
            queryClient.invalidateQueries([usersKey, itensPorPagina, pagina])            
        },
        onError(error: any){
            displayError({ error, setError })
            toast.messsage('400', 'Ocorreu um erro ao tentar Atualizar o Pedido.')
        }
    })


    
    function onSubmit(values: any){
        console.log("values", GET_VALUES)
        // const { 
            // name,
            // phone,
            // email,
            // password } = values

        // const data = {
        //     name
        // }
       
        // mutatePurchase(data)
    }   

    function onEdit(values: any) { 
        values = Object.assign({
            ...values,
            id: state.modals.plan.id
        })
        mutatePurchaseUpdate(values)
    }

    function handleClose(){
        actions.closeModal('purchase')
        const valuesToReset = ['name']

        for(const value of valuesToReset){
            setValue(value, '')
        }

        reset()
    }

    return (
        <Modal
            isOpen={state.modals.purchase.isOpen}
            title={state.modals.purchase.title}
            handleClose={handleClose}
            style={{ width: 600 }}
        >
            <Container>
                <form onSubmit={handleSubmit(!state.modals.purchase.id ? onSubmit : onEdit)}>
                    <Input 
                        label="Nome"
                        errors={errors}
                        {...register("name")}
                        defaultValue={purchaseUser?.name}
                        isLoading={isLoadingUser}
                        disabled={!!state.modals.user.id}
                    />              

                    <Input 
                        label="Preço"
                        mask='real'
                        errors={errors}
                        {...register("price")}
                        defaultValue={formatCurrency(purchaseUser?.price)}
                        isLoading={isLoadingUser}
                        disabled={!!state.modals.user.id}
                    />  


                    <Select 
                        label='Status'  
                        defaultValue={purchaseUser?.statusPurchase}
                        options={[
                            {label: "N PROGRESS", value: "N PROGRESS"},
                            {label: "DONE", value: "DONE"}
                        ]}
                        isLoading={false}
                        onChange={(e) => register('statusPurchase', {
                            value: String(e.target.value)
                        })}
                        errors={errors}
                    />


                    {
                        !state.modals.purchase.id ? (                            
                            <>

                                <Button
                                    type='submit'
                                    style={{ backgroundColor: theme.colors.primary }}
                                    disabled={isLoadingmutatePurchase}
                                >
                                    Cadastrar
                                </Button>
                            </>
                        ) : 
                        <>
                            <Button
                                type='submit'
                                style={{ backgroundColor: theme.colors.primary }}
                                disabled={isLoadingmutatePurchase}
                            >
                                Atualizar
                            </Button>
                        </>
                    }
                </form>
            </Container>
        </Modal>
    )
}