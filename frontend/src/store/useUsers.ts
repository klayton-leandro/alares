import produce from 'immer'

import { create } from 'zustand'

type Modal = 'user' | 'plan'  | 'purchase'  | 'purchaseBuy' |'module' 

type OpenModal = {
    modal: Modal
    title: string 
    id?: number  
    price?: any
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
                price?: any
            },
            plan: {
                isOpen: boolean
                title: string
                id?: number
                price?: any
            },
            purchase: {
                isOpen: boolean
                title: string
                id?: number
                price?: any
            },
            purchaseBuy: {
                isOpen: boolean
                title: string
                id?: number
                price?: any
            }
            module: {
                isOpen: boolean,
                title: string,
                id?: number
                price?: any
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
                    title: '',
                    price: ''
                },
                plan: {
                    isOpen: false,
                    title: '',
                    price: ''
                },
                purchase: {
                    isOpen: false,
                    title: '',
                    price: ''
                },

                purchaseBuy: {
                    isOpen: false,
                    title: '',
                    price: ''
                    
                },
                module: {
                    isOpen: false,
                    title: '',
                    price: ''
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


            openModal({ modal, title, id, price }){
                set(state => ({
                    ...produce(state, draft => {
                        draft.state.modals[modal].isOpen = true
                        draft.state.modals[modal].title = title
                        draft.state.modals[modal].id = id
                        draft.state.modals[modal].price = price
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