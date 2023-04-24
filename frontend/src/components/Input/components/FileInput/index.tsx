import { useState, forwardRef, InputHTMLAttributes } from 'react'
import { RiSpamLine } from 'react-icons/ri'
import { AiOutlineUpload } from 'react-icons/ai'

import { Button } from 'components'

import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    isLoading?: boolean
    onChangeFile?: () => any
    errors?: string |  any 
    hideFile?: boolean  
}

function BaseFile(props: Props, ref: any) {
    const { isLoading, label, errors, hideFile, ...rest } = props
    const [file, setFile] = useState<any>()
    
    const fileInputId = `file-input-${props.name}`

    const onChange = (e: any) => {
        const [file] = e?.target?.files
        setFile(file?.name)
        props.onChange? props.onChange(file): null
    }
   
    return (
        <Container>
            <Button
                type='button'
                buttonType='outlined'
                onClick={() => document.getElementById(fileInputId)?.click()}
                disabled={isLoading}
            >
                <span className='input-file-label'>
                    { label || 'Carregar Arquivo ' } <AiOutlineUpload />
                </span>
            </Button>

            <input 
                { ...rest }
                type="file"
                id={fileInputId} 
                ref={ref}
                disabled={isLoading}              
                onChange={onChange}
            />

            {
                (file && !hideFile) && (
                    <div className="file">
                        <span>
                            <p>
                               { file }
                            </p>
                        </span>

                        <Button 
                            type='button'
                            buttonType='icon-remove'
                            placeholder='Excluir Arquivo'
                            onClick={() => {
                                setFile(null)  
                                  // @ts-ignore
                                document.getElementById(fileInputId).value = ''                            
                            }}
                            disabled={isLoading}
                        />
                    </div>
                )
            }

            {
                (errors && errors[rest.name as any]?.message) && (
                    <div className="input-error">
                      <RiSpamLine />  <p>{ errors[rest?.name as any]?.message }</p>
                    </div>
                )
            }
        </Container>
    )
}

export const FileInput = forwardRef(BaseFile)