import {  IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

type Props = {
    order : {
        type: 'asc' |  'desc',
        field: string
    }
    name: string
}

export function SortIcon(props: Props) {
    const { order, name } = props
   
    if(order.field === name && order.type === 'desc') return <IoMdArrowDropup />

   return <IoMdArrowDropdown />

}