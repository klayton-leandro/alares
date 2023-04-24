import {
    LoadingProgress, 
    Text,
    Input,
    Button } from 'components'

import { 
    Container,
    Header } from './styles'
import theme from 'styles/theme'

type Filters = {
    name?: string 
    email?: string 
    phone?: string  
    role?: number 
}

type Props = {
    setName: (e: any) => void
    setEmail: (e: any) => void
    setPhone: (e: any) => void
    setSearch: (e: any) => void
    filters: Filters
}

export function Search (props: Props) {
    const { 
        setName, 
        setEmail,
        setPhone,
        setSearch,
        filters } = props

    function clearFilters (){
        setName('')
        setEmail('')
        setPhone('')
        setSearch({
            ...filters,
            clear: true
        })
    }

    return (
        <LoadingProgress
            isLoading={false}
            rects={5}
        >
           <>
           <Header>
                <Text type='bold'>
                    Filtros
                </Text>
           </Header>
            <Container>
                <section>
                    <Input 
                        label='Nome'
                        placeholder='Buscar por nome'
                        value={filters.name}
                        onChange={e => setName(e.currentTarget.value)}
                    />

                    <Input 
                        label='E-mail'
                        value={filters.email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    />
                </section>

                <section>
                    <Input 
                        label='Telefone'
                        placeholder='Buscar por telefone'
                        mask='phone'
                        value={filters.phone}
                        onChange={e => setPhone(e.currentTarget.value)}
                    />
                </section>

                <section>
                    <div/>
                    <div/>
                    <Button 
                        buttonType='outlined'
                        onClick={clearFilters}
                    >
                        Limpar Filtros
                    </Button>
                    <Button
                        onClick={() => setSearch(filters)}
                        style={{ backgroundColor: theme.colors.primary}}
                    >
                        Buscar    
                    </Button> 
                </section>
            </Container>
           </>
        </LoadingProgress>
    )
}