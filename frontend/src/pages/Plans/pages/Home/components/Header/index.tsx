import { 
    Button,
    LoadingProgress } from 'components'

import { Container } from './styles'

import { useUsers } from 'store'
import theme from 'styles/theme'

export function Header() {
    const { state, actions } = useUsers()

    return (
        <Container>
            <section>
                <h1>Planos: </h1>
                <LoadingProgress
                    isLoading={state.isLoading}
                    rects={1}
                >
                    <h2>{ state.plans.total } Planos cadastrados</h2>
                </LoadingProgress>
            </section>

            <Button 
                style={{ backgroundColor: theme.colors.primary, width: 200}}
                onClick={() => actions.openModal({
                    modal: 'plan',
                    title: 'Adicionar novo Plano?'
                })}
            >
                Adicionar novo Plano?
            </Button>
        </Container>
    )
}