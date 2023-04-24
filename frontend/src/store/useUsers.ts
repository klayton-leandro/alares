import produce from 'immer'

import { create } from 'zustand'

type Modal = 'user' | 'plan'  | 'purchase' |'module' 

type OpenModal = {
    modal: Modal
    title: string 
    id?: number  
}

type Props = {
    state: {
        isLoading: boolean
        users: {
            total: number
        },
        plans: {
            total: number
        }
        purchase: {
            total: number
        }
        modals: {
            user: {
                isOpen: boolean
                title: string
                id?: number
            },
            plan: {
                isOpen: boolean
                title: string
                id?: number
            },
            purchase: {
                isOpen: boolean
                title: string
                id?: number
            },
            module: {
                isOpen: boolean,
                title: string,
                id?: number
            }
        }
    },
    actions: {
        setLoaded: () => void
        setUsersTotal: (total: number) => void
        setPlansTotal: (total: number) => void
        setPurchaseTotal: (total: number) => void
        openModal: (props: OpenModal) => void
        closeModal: (modal: Modal) => void
    }
}

export const useUsers = create<Props> (
    (set) => ({
        state: {
            isLoading: true,
            users: {
                total: 0
            },
            plans: {
                total: 0
            },
            purchase: {
                total: 0
            },
            modals: {
                user: {
                    isOpen: false,
                    title: ''
                },
                plan: {
                    isOpen: false,
                    title: ''
                },
                purchase: {
                    isOpen: false,
                    title: ''
                },
                module: {
                    isOpen: false,
                    title: ''
                }
            }
        },
        actions: {
            setLoaded(){
                set((state) => ({
                    ...produce(state, draft => {
                        draft.state.isLoading = false
                    })
                }))
            },
            
            setUsersTotal(total){
                set((state) => ({
                    ...produce(state, draft => {
                        draft.state.users.total = total
                    })
                }))
            },

            setPlansTotal(total){
                set((state) => ({
                    ...produce(state, draft => {
                        draft.state.plans.total = total
                    })
                }))
            },

            setPurchaseTotal(total){
                set((state) => ({
                    ...produce(state, draft => {
                        draft.state.purchase.total = total
                    })
                }))
            },


            openModal({ modal, title, id }){
                set(state => ({
                    ...produce(state, draft => {
                        draft.state.modals[modal].isOpen = true
                        draft.state.modals[modal].title = title
                        draft.state.modals[modal].id = id
                    })
                }))
            },
            closeModal(modal){
                set(state => ({
                    ...produce(state, draft => {
                        draft.state.modals[modal].isOpen = false
                        draft.state.modals[modal].id= undefined
                    })
                }))
            },
        }
    })
)