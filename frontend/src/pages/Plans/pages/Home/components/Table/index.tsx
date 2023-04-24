import { useState, useMemo, useEffect } from  'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'

import { queryClient } from 'libs'

import { 
    Table as T, 
    Text,
    RemoveModal,
    Button,
    Select } from 'components'

import { 
    Container, 
    Buttons } from './styles'

import { useRemoveItem } from 'hooks/mutation'

import { forms } from 'consts/errors'

import { usersKey } from 'consts/queries'

import { 
    fetchPlans,
    trashPlan
 } from 'services/users'

import { toast } from 'utils'

import { User } from 'types/users'

import { useUsers } from 'store'

type Props = {
    filters: {
        name: string | undefined
        email: string | undefined
        phone: string | undefined
    },
    search: object
}

export function Table(props: Props) {
    const { filters, search } = props

    const [params] = useSearchParams() 

    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false) 
    const [planId, setPlanId] = useState<number>()
    const [errors, setErrors] = useState<any>()

    const itensPorPagina = params.get('itensPorPagina')
    const pagina = params.get('pagina')

    const { actions } = useUsers()
    
    const { data, isLoading } = useQuery([usersKey, itensPorPagina, pagina, search], () => fetchPlans({
        limit:itensPorPagina || 5 as any,
        page: pagina || 1 as any,
        filters
    }), {
        select(response){
            const data = response?.data.map((item: User) => {
                if(item === null || item === undefined){
                    return {
                        ...item as any,
                        [item]: ''
                    }
                }               

                return item
            })

            return {
                total: response?.total,
                data 
            }
        },
        onSuccess(data){
            actions.setPlansTotal(data?.total as any)
            actions.setLoaded()
        }
    })
    
    const { removePaginated } = useRemoveItem([usersKey, itensPorPagina, pagina])

    const { mutate, isLoading: isLoadingMutation } = useMutation(trashPlan, {
        onMutate(id){
            const result = removePaginated(id)
            return { result }
        },
        onSuccess(){
            setIsRemoveModalOpen(false)
            toast.messsage('200', 'Plano removido com sucesso!')
        },
        onSettled(){
            queryClient.invalidateQueries([usersKey, itensPorPagina, pagina])  
        }
    })

    function handleRemoveUser(id: number) {
        setIsRemoveModalOpen(true)
        setPlanId(id)
    }
    


    const header = [
        {
            title: 'Name',
            name:  'name',
            size: '300px',
            sort: true
        },
        {
            title: 'E-mail',
            name:  'email',
            size: '300px',
            sort: true
        },
        {
            title: 'Nome',
            name:  'username',
            size: '200px',
            sort: true
        },
        {
            title: '',
            name: '',
            size: '300px'
        }, 
    ]
    
    const formattedData = useMemo(() => {
        console.log("data", data)
        return data?.data?.map(item => (
            <>
                <Text>{ item.name }</Text>
                
                <Text>{ item.email }</Text>
                
                <Text>{ item.username }</Text>

                <Buttons>            

                    <Button
                        buttonType='icon-edit'
                        onClick={() => actions.openModal({
                            modal: 'plan',
                            title: 'Usuário Administrador',
                            id: item.id
                        })}
                    />

                    <Button
                        buttonType='icon-remove'
                        onClick={() => handleRemoveUser(item.id as number)}
                    />

                   
                </Buttons>
            </>
        ))
    }, [isLoading, data, errors])

   
    return (
       <Container>
            <T.Default 
                data={data as any}
                header={header}
                formattedData={formattedData}
                isLoading={isLoading}
                hasPagination
            />

            {
                isRemoveModalOpen && (
                    <RemoveModal 
                        isOpen={isRemoveModalOpen}
                        isLoading={isLoadingMutation}
                        onCancel={() => setIsRemoveModalOpen(false)}
                        onConfirm={() => mutate(planId as any)}
                        title='Tem certeza que deseja excluir este plano?'
                    />
                )
            }
       </Container>
    )
}