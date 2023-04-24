import { api } from 'libs'
import { toast, mountQueryParams, normalizeText, normalizePriceText } from 'utils'

import { getOptions } from 'utils/api'

import { User } from 'types/users'

type UserFilters = {
    name?: string 
    email?: string 
    phone?: string 
    pedido?: string 
    plano?: string
}

type FetchUsersRequest = {
    limit?: number
    page?: number
    filters: UserFilters
}

type FetchUsersResponse = {
    total: number | undefined,
    data: Array<User>
}

type AlterUserRoleRequest = {
    userId: number
    roleId: number
}

type AlterUserStatusRequest = {
    userId: number
    statusId: number
}

export const fetchUsers = async (request: FetchUsersRequest) => {
    try{
        const { limit, page, filters } = request
       
        const {
            name,
            email,
            phone,
            pedido,
            plano,
        } = filters
       
        // @ts-ignore
        const offset = page === '1'? 0: Number(limit) * (Number(page) - 1)

        const { data } = await api.get(
            '/users/?'
            + mountQueryParams('limit', limit)
            + mountQueryParams('offset', offset)    
            + mountQueryParams('name', name)    
            + mountQueryParams('email', email)  
            + mountQueryParams('phone', phone)  
            + mountQueryParams('pedido', pedido)  
            + mountQueryParams('plano', plano)  
        )

        return data as FetchUsersResponse
    }catch(error){
        toast.messsage('500')
    }
}


export const fetchPlans = async (request: FetchUsersRequest) => {
    try{
        const { limit, page, filters } = request
       
        const { name } = filters
       
        // @ts-ignore
        const offset = page === '1'? 0: Number(limit) * (Number(page) - 1)

        const { data } = await api.get(
            '/plans/?'
            + mountQueryParams('limit', limit)
            + mountQueryParams('offset', offset)    
            + mountQueryParams('name', name)    
        )

        return data as FetchUsersResponse
    }catch(error){
        toast.messsage('500')
    }
}

export const fetchAllPlans = async() => {
    try{
        const { data } = await api.get('/plans/all')
        return data as any
    }catch(error){
        toast.messsage('500')
    }
}


export const fetchPurchases = async (request: FetchUsersRequest) => {
    try{
        const { limit, page, filters } = request
       
        const { name } = filters
       
        // @ts-ignore
        const offset = page === '1'? 0: Number(limit) * (Number(page) - 1)

        const { data } = await api.get(
            '/purchases/?'
            + mountQueryParams('limit', limit)
            + mountQueryParams('offset', offset)    
            + mountQueryParams('name', name)    
        )

        return data as FetchUsersResponse
    }catch(error){
        toast.messsage('500')
    }
}

export const trashUser = async (id: number) => {
    try {
        await api.delete(`users/${id}`)
    }catch(error){
        toast.messsage('500')
    }
}

export const trashPlan = async (id: number) => {
    try {
        await api.delete(`plans/${id}`)
    }catch(error){
        toast.messsage('500')
    }
}


export const trashPurchase = async (id: number) => {
    try {
        await api.delete(`purchases/${id}`)
    }catch(error){
        toast.messsage('500')
    }
}

export const fetchUser = async (id: number) => {    
    console.log("id", id)
    try{
        if(!id) return

        const { data } = await api.get(`/users/me/?userId=${id}`)

        return data as User
    }catch(error){
        toast.messsage('500')
    }
}

export const fetchPlan = async (id: number) => {
    try{
        if(!id) return

        const { data } = await api.get(`/plans/${id}`)

        return data as any
    }catch(error){
        toast.messsage('500')
    }
}

export const fetchPurchase = async (id: number) => {
    try{
        if(!id) return

        const { data } = await api.get(`/purchases/${id}`)

        return data as any
    }catch(error){
        toast.messsage('500')
    }
}

export const fetchRoles = async () => {
    try{
        return getOptions('/roles')
    }catch(error){
        toast.messsage('500')
    }
}


export const alterUserRole = async (request: AlterUserRoleRequest) => {
    const { userId, roleId } = request
    try {
        const { data } = await  api.put(`/users/${userId}/roles`, { 
            roleId
        })

        return data
    }catch(error){
        toast.messsage('500')
    }
}

export const fetchUsersStatuses = async () => {
    try{
        return getOptions('/users/statuses')
    }catch(error){
        toast.messsage('500')
    }
}

export const alterUserStatus = async (request: AlterUserStatusRequest) => {
    const { userId,  statusId } = request

    try {
        const { data } = await  api.put(`/users/${userId}/statuses`, { 
            statusId
        })

        return data
    }catch(error){
        toast.messsage('500')
    }
}

export const storeAdminUser = async (values: any) => {
    try{
        const { data } = await api.post('/users/create', values)

        return data
    }catch(error: any){
        if(error?.response?.status !== 500){
            throw error.response.data
       }else{
            toast.messsage('500')
       }
    }
}


export const storePurchase = async (values: any) => {
    values = {
        ...values,
        price: normalizePriceText(values.price)
    }
    try{
        const { data } = await api.post('/purchase/create', values)

        return data
    }catch(error: any){
        if(error?.response?.status !== 500){
            throw error.response.data
       }else{
            toast.messsage('500')
       }
    }
}


export const storePlans = async (values: any) => { 
    try{
        const { data } = await api.post('/plans/create', values)

        return data
    }catch(error: any){
        if(error?.response?.status !== 500){
            throw error.response.data
       }else{
            toast.messsage('500')
       }
    }
}

export const updatePlans = async (values: any) => { 
    try{
        const { data } = await api.put(`/plans`, values)
        return data
    }catch(error: any){
        if(error?.response?.status !== 500){
            throw error.response.data
       }else{
            toast.messsage('500')
       }
    }
}

export const updatePurchase = async (values: any) => { 
    try{
        const { data } = await api.put(`/purchase`, values)
        return data
    }catch(error: any){
        if(error?.response?.status !== 500){
            throw error.response.data
       }else{
            toast.messsage('500')
       }
    }
}