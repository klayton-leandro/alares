import { 
    Container,
    Content,
    Main } from './styles'

import { 
    TopBar, 
    Planos} from './components'

export function Landing(){
    return (
        <Container>
            <TopBar />
            <Content>                
                <Main>
                    <Planos />
                </Main>
            </Content>
        </Container>
    )
}