import { useLocation, Link } from 'react-router-dom'
import { RiMoneyDollarCircleLine, RiHomeLine } from 'react-icons/ri'
import { HiOutlineUsers } from 'react-icons/hi'
import { setCookie, parseCookies } from "nookies"

import { Container } from './styles'

export function SideNav() {
    const { pathname } = useLocation()

    const menuItems = [
        {
            title: 'Início',
            icon: <RiHomeLine />,
            link: '/'
        },
        {
            title: 'Usuários',
            icon: <HiOutlineUsers />,
            link: '/usuarios'
        },
        {
            title: 'Planos',
            icon: <RiMoneyDollarCircleLine />,
            link: '/Planos'
        },
        {
            title: 'Pedidos',
            icon: <RiMoneyDollarCircleLine />,
            link: '/pedidos'
        }
      
    ]

    const { 'alares.activeMenuItem': activeMenuItem } = parseCookies()


    function setActiveMenu(item: string) {
        setCookie(undefined, "alares.activeMenuItem", item)
    }

   
    return (
        <Container>
            <h1>Alares</h1>
            
            <ul>
                {
                    menuItems.map(item => (
                        <li 
                            key={item.title}
                            className={`${ 
                                !!pathname.split('/')
                                .filter((item: any) => !!item.length)
                                .find((menu: any) => item.link.split('/')
                                .includes(menu)) || item.title === activeMenuItem
                                    ? 'active'
                                    : ''
                                }`
                            }
                        >
                            <Link 
                                to={item.link}
                                onClick={() => setActiveMenu(item.title)}
                            >   
                                { item.icon }
                                { item.title }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Container>
    )
}