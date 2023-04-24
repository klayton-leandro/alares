import { setCookie } from "nookies"

type Props = {
    icon: any
    title: string
    link: string
}

import { Container } from './styles'

export function Card (props: Props) {
    function setActiveMenu(item: string) {
        setCookie(undefined, "alares.activeMenuItem", item)
    }

    return(
        <Container
            onClick={() => setActiveMenu(props.title)}
            to={props.link}
        >
            { props.icon }

            <p>{ props.title }</p>
        </Container>
    )
}