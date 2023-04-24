import { queryClient } from 'libs'

export const useRemoveItem = (key: any) => {
    const remove = async (idToRemove: any, item?: string, fieldToRemove?: string) => {
        const keyParam = Array.isArray(key)? [...key]: [key]

        await queryClient.cancelQueries(keyParam)

        const previousData: any = queryClient.getQueryData(keyParam)
       
        const dataItem = item ? previousData[item] : previousData
       
        const newData = dataItem.filter((item: any) => {
            if(fieldToRemove){
                return item[fieldToRemove] !== idToRemove
            }

            return +item.id !== +idToRemove
        }) as any
        
        const data = item? {
            ...previousData,
            [item]: newData
        }: newData
        
        queryClient.setQueryData(keyParam, data)

        return previousData
    }

    const removePaginated = async (idToRemove: any) => {
        const keyParam = Array.isArray(key)? [...key]: [key]

        await queryClient.cancelQueries(keyParam)

        const previousData: any = queryClient.getQueryData(keyParam)
        
        const newData = {
            total: previousData.total - 1,
            data: previousData.data.filter(({ id }: any) => id !== idToRemove) as any
        }
        
        queryClient.setQueryData(keyParam, newData)

        return previousData
    }

    return {
        remove,
        removePaginated
    }
}