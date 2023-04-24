import { 
    USER_NOT_FOUND,
    WRONG_PASSWORD,
    FIELD_EXISTS
} from 'consts/errors'

type Message = {
    message: string
}

type Props = {
    error: {
        type: string
        fields: []
    }
    setError: (error: string, { message }: Message) => void
}

export const displayError = ({ error, setError  }: Props) => {
    if(error){
        if(error?.type === USER_NOT_FOUND){
            setError('email', { message: 'Usuário não encontrado.' })
        }

        if(error?.type === WRONG_PASSWORD){
            setError('password', { message: 'Senha inválida.' })
        }

        if(error?.type === FIELD_EXISTS){
            for(const field in error.fields){
                if(error.fields[field]){
                    setError(field, { message: 'Usuário já cadastrado com este campo' })                   
                }
            }
        }

    }
}

