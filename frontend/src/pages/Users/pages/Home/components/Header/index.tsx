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
                <h1>Usuários: </h1>
                <LoadingProgress
                    isLoading={state.isLoading}
                    rects={1}
                >
                    <h2>{ state.users.total } usuários cadastrados</h2>
                </LoadingProgress>
            </section>

            <Button 
                style={{ backgroundColor: theme.colors.primary, width: 200}}
                onClick={() => actions.openModal({
                    modal: 'user',
                    title: 'Novo Usuário Administrador'
                })}
            >
                Novo Usuário Administrador
            </Button>
        </Container>
    )
}