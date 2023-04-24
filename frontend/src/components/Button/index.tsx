import { ButtonHTMLAttributes, ReactNode } from 'react'

import { 
    MenuButton,
    Outlined,
    Danger,
    Select,
    Clear,
    IconShow,
    IconRemove,
    IconDownload,
    IconMail,
    IconWhatsapp,
    IconAdd,
    IconEdit,
    IconSave,
    IconCancel,
    IconLock 

} from './components'

import { GlobalContainer as Container } from './components/styles/global'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string
    active?: boolean
    label?: string
    placeholder?: string
    value?: any
    buttonType?: 'menu' | 'outlined' | 'danger' | 'select' | 'clear' | 'icon-show' | 'icon-remove' | 'icon-download' | 'icon-mail' | 'icon-whatsapp' | 'icon-edit' | 'icon-add' | 'icon-save' | 'icon-cancel' | 'icon-lock'
    children?: ReactNode
    isLoading?: boolean
}

export function Button(props: Props) {
    if(props.buttonType === 'menu') return <MenuButton {...props} />

    if(props.buttonType === 'outlined') return <Outlined {...props} />

    if(props.buttonType === 'danger') return <Danger {...props} />

    if(props.buttonType === 'select') return <Select {...props} />

    if(props.buttonType === 'clear') return <Clear {...props} />

    if(props.buttonType === 'icon-show') return <IconShow {...props} />

    if(props.buttonType === 'icon-remove') return <IconRemove {...props} />

    if(props.buttonType === 'icon-download') return <IconDownload {...props} />

    if(props.buttonType === 'icon-mail') return <IconMail {...props} />

    if(props.buttonType === 'icon-whatsapp') return <IconWhatsapp {...props} />

    if(props.buttonType === 'icon-add') return <IconAdd {...props} />

    if(props.buttonType === 'icon-edit') return <IconEdit {...props} />

    if(props.buttonType === 'icon-save') return <IconSave {...props} />

    if(props.buttonType === 'icon-cancel') return <IconCancel {...props} />

    if(props.buttonType === 'icon-lock') return <IconLock {...props} />

    return (
        <Container
            { ...props }
            disabled={props.disabled? props.disabled: props.isLoading}
        >            
            { props.title? (
                <p>
                  { props.title }
                </p>
            ): props.children }
        </Container>
    )
}