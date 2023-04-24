import { Container } from './styles'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { HiOutlineUsers } from 'react-icons/hi'

import { Card } from './components'

export function Home(){
    const items = [
        {
            title: 'Planos',
            icon: <RiMoneyDollarCircleLine />,
            link: '/planos'
        },
        {
            title: 'Pedidos',
            icon: <RiMoneyDollarCircleLine />,
            link: '/pedidos'
        },
        {
            title: 'Usuários',
            icon: <HiOutlineUsers />,
            link: '/usuarios'
        }
    ]

    return (
        <Container>
            { items.map(item => (
                <Card 
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    link={item.link}
                />
            ))}
        </Container>
    )
}