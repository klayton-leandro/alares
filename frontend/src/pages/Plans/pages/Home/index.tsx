import { useState } from  'react'

import { 
    Header,
    Search,
    Table,
    PlansModal, 
    } from './components'

import { useUsers } from 'store'

export function Home(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [CPF, setCPF] = useState()
    const [status, setStatus] = useState()
    const [role, setRole] = useState()
    const [search, setSearch] = useState({})

    const filters = {
        name,
        email,
        phone,
    }

    const { state: { modals }} = useUsers()

    return (
        <>
            <Header />

            <Search
                setName={setName}
                setSearch={setSearch}
                filters={filters}
            />

            <Table
                filters={filters}
                search={search}
            />

            {
                modals.plan.isOpen && (
                    <PlansModal />
                )
            }
        </>
    )
}