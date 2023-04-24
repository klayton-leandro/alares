import { useState } from 'react'

type Order = {
    field: string
    type: 'asc' | 'desc'
}


export const useOrder = (object: any) => {
    const [order, setOrder] = useState<Order>({
        field: '',
        type: 'asc'
    })

    const handleOrder = (field: string) => {
        if(order?.type === 'asc') {
            setOrder({
                field,
                type: 'desc'
            })
        }else {
            setOrder({
                field,
                type: 'asc'
            })
        }
    }

    const checkType = (a: any, b: any, type: string) => {
        return typeof a[order.field] ===  type || typeof b[order.field] ===  type 
    }

    const normalizeText = (text: string) => text.replace(/ /g, '').toLocaleLowerCase()

    const data = object.length > 0? object.sort((a: any, b: any) => {
        if(checkType(a, b, 'number') ) {
            if(order.type === 'desc'){
                return b[order.field] - a[order.field]
            }

            return a[order.field] - b[order.field]
        }

        if(checkType(a, b, 'string')){
            if(order.type === 'desc'){
                return normalizeText(b[order.field]).localeCompare(normalizeText(a[order.field]))
            }

            return normalizeText(a[order.field]).localeCompare(normalizeText(b[order.field]))
        }

        return 0
    }): []
    
    return {
        handleOrder,
        order,
        data
    }
}