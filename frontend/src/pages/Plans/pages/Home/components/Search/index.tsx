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
}

type Props = {
    setName: (e: any) => void
    setSearch: (e: any) => void
    filters: Filters
}

export function Search (props: Props) {
    const { 
        setName, 
        setSearch,
        filters } = props

    function clearFilters (){
        setName('')
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