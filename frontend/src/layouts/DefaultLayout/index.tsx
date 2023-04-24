import { Outlet } from "react-router-dom"

import { 
    Container,
    Content,
    Main } from './styles'

import { 
    TopBar,
    SideNav } from './components'

export function DefaultLayout(){
    return (
        <Container>
            <TopBar />
            <Content>
                <SideNav />
                
                <Main>
                    <Outlet />
                </Main>
            </Content>
        </Container>
    )
}