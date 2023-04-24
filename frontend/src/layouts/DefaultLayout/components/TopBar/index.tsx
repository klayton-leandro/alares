import { BiMenu, BiLogOutCircle } from 'react-icons/bi'

import { Container } from './styles'

import { logout } from 'services/auth'

export function TopBar() {
    return(
        <Container>
            <section>
                <BiMenu />

                <p>ADMIN</p>
            </section>

            <section>

                <BiLogOutCircle
                    onClick={logout}
                />
            </section>
        </Container>
    )
}