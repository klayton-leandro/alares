import { useQueryClient } from 'react-query'

export const useAddItem = (key: any) => {
    const queryClient = useQueryClient()

    const add = async (values: any) => {
        const keyParam = Array.isArray(key)? [...key]: [key]

        await queryClient.cancelQueries(keyParam)

        const previousData: any = queryClient.getQueryData(keyParam)
        
        const newData = [...previousData, values]
        
        queryClient.setQueryData(keyParam, newData)

        return previousData
    }

    const addPaginated = async (values: any) => {
        const keyParam = Array.isArray(key)? [...key]: [key]

        await queryClient.cancelQueries(keyParam)

        const previousData: any = queryClient.getQueryData(keyParam)
        
        const newData = {
            total: previousData.total + 1,
            data: [...previousData.data, values]
        }
        
        queryClient.setQueryData(keyParam, newData)

        return previousData
    }

    return {
        add,
        addPaginated
    }
}