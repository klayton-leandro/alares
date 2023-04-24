import { useState, useMemo, useRef, useId } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { forms } from 'consts/errors'

import { normalizeText } from 'utils'

import { Button, LoadingProgress } from 'components'
import { 
    Select,
    Input } from 'components/Input'

import { 
    Container,
    InputBox,
    Options } from './styles'

type Option = {
    label: string
    value: any
}

type Props = {
    name: string
    label: string
    register: any
    selectOptions: Array<Option> | undefined
    options:  Array<Option>
    setOption: (option: any) => void
    setError: (name: string, message: any) => void
    errors: any
    onSelectOption: () => void
    onRemoveOption: Function
    addingLabel?: string
    addingPlaceholder?: string
    onAddOption?: (option: string) => any
    onRemoveSelectedOption?: (option: any) => any
    isLoading?: boolean

}

export function SelectOptions (props: Props) {
    const { 
        name,
        label, 
        register,
        selectOptions,
        options, 
        setOption,
        errors,
        setError,
        onSelectOption,
        onRemoveOption,
        addingLabel,
        addingPlaceholder,
        onAddOption,
        onRemoveSelectedOption,
        isLoading } = props

    const [isToAdd, setIsToAdd] = useState(false)

    const optionRef = useRef<any>()
    const selectedOptionRef = useRef<any>()

    function addOption (){
        const option  = optionRef?.current?.value
       
        if(!option){
            return setError(name, { message: forms.REQUIRED })
        }

        setIsToAdd(false)

       if(onAddOption){
            onAddOption(option)
       } 
    }

    function removeOption () {
        const option  = selectedOptionRef?.current?.value

        if(option === 'Selecionar' || !option) return setError(name, { message: forms.INVALID_OPTION })
        
        if(onRemoveSelectedOption){
            onRemoveSelectedOption(option)
        }
    }

    const formatedSelectOption = useMemo(() => {
        const selected = 
            selectOptions
                ?   selectOptions
                    ?.filter(({ value }) => value !== 'select')
                    .sort((a, b) => normalizeText(a.label).localeCompare(normalizeText(b.label), undefined, { numeric: true }))
                : []
        
        return [           
            ...selected as any
        ]
        
    },[selectOptions])
    
    const formatedOptions = useMemo(() => {
        return options.sort((a, b) => normalizeText(a.label).localeCompare(normalizeText(b.label), undefined, { numeric: true }))
    }, [options])
            
    return (
        <Container>
            <InputBox
                optionsNumber={+!!onAddOption + +!!onRemoveSelectedOption}
            >
                {
                    isToAdd 
                    ? (
                        <Input 
                            label={addingLabel} 
                            {...register(name)}                          
                            placeholder={addingPlaceholder || 'Digitar'}
                            errors={errors}
                            onChange={() => setError(name, { message: undefined })}
                            ref={optionRef}
                        />
                    )
                    : (
                        <Select
                            label={label}
                            options={formatedSelectOption}
                            {...register(name)}
                            onChange={e => {
                                setOption(e.target.value as any)
                                setError(name, { message: undefined })
                            }}
                            errors={errors}
                            ref={selectedOptionRef}
                        />
                    )
                }

                <Button
                    onClick={isToAdd? addOption : onSelectOption}
                    type='button'
                    style={{ marginTop: errors?.[name]?.message && -16 }}
                    disabled={isLoading}
                >
                    { isToAdd ? 'Adicionar': 'Selecionar' }
                </Button>

                {
                    !!onAddOption && (
                        <Button
                            onClick={() => setIsToAdd(state => !state )}
                            type='button'
                            buttonType={isToAdd ? 'danger': 'outlined' }
                            style={{ marginTop: errors?.[name]?.message && -16 }}
                            disabled={isLoading}
                        >
                            { isToAdd? 'Cancelar': 'Novo' }
                        </Button>
                    )
                }
                {
                    !!onRemoveSelectedOption && (
                        <Button 
                            buttonType='icon-remove'
                            type='button'
                            style={{ marginTop: errors?.[name]?.message && -16 }}
                            onClick={removeOption}
                            disabled={isLoading}
                        />
                    )
                }
            </InputBox>

            <Options>
                    <LoadingProgress
                        isLoading={isLoading as boolean}
                        rects={1}
                    >
                        {   formatedOptions.map((option: any) => (
                                <span
                                    key={option.value}
                                >
                                    <p>{ option.label }</p>
                                    <AiOutlineClose
                                        onClick={() => onRemoveOption(option.value)}
                                    />
                                </span>
                            ))
                        }
                    </LoadingProgress>
            </Options>
        </Container>
    )
}