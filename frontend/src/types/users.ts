export type User = {
    id?: number
    name: string
    email: string
    phone: string
    birthDate: string
    cpf: string
    experience: boolean
    status?: string
    statusId?: number
    role?: string
    roleId?: number
    address : {
        cityId: number
        number: string
        publicArea: string
        neighbourhood: string
        additionalInformation: string
        postalCode: string
    }
}