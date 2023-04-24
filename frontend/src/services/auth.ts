import { destroyCookie, setCookie } from "nookies"
import { api } from 'libs'
import { toast } from 'utils'

type Login = {
    email: string
    password: string
}

const ERROR = 'E-mail ou senha incorretos'

export async function login (payload: Login){
    try{
        const { email, password } = payload
       
        const { data }: any = await api.post('/users/auth', {
            email,
            password
        })          

        const token = data?.refreshToken ? data?.refreshToken : '';
       
        setCookie(undefined, "alares.token", token, {
            maxAge: 60 * 60 * 24 * 30, //30 dias
            path: "/",
        })
        
        api.defaults.headers.common['Authorization'] = `Bearer  ${data?.refreshToken}`

        const { data:  user } = await api.get('/users/me')

        setCookie(undefined, "alares.user", JSON.stringify(user), {
            maxAge: 60 * 60 * 24 * 30, //30 dias
            path: "/",
        })

        setCookie(undefined, "alares.activeMenuItem", 'Início')

        return user
    }catch(error: any){
        if(error) { 
            toast.messsage('401', error)
        }
        if(error?.response?.status !== 500){
            toast.messsage('500')
       }else{
            toast.messsage('500')
       }
    }
}

export async function logout() {
    destroyCookie(undefined, "alares.token")
    destroyCookie(undefined, "alares.user")
    window.location.reload()
}