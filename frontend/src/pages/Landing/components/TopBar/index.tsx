import { BiMenu, BiLogIn } from 'react-icons/bi'
import { useNavigate } from "react-router-dom"
import { Container } from './styles'

// import { logout } from 'services/auth'

import AlaresLogo from "assets/logo/alares.png"
import theme from 'styles/theme'

export function TopBar() {
    const navigation = useNavigate();
    const handleLogin = () => { 
        navigation("/login")
    }
    return(
        <Container>
            <section>

                <img src={AlaresLogo} height={30} />
            </section>

            <section>
                <BiLogIn
                    color={theme.colors.black}
                    onClick={handleLogin} 
                />
            </section>
        </Container>
    )
}