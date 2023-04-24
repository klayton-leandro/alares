import styled from 'styled-components'

import { 
    Modal,
    Button } from 'components'
import theme from 'styles/theme'

type Props = {
    isOpen: boolean
    onCancel: () => void
    onConfirm: (value: any) => void
    title?: string
    isLoading?: boolean
}

const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export function RemoveModal (props: Props) {
    const {
        isOpen,
        onCancel,
        onConfirm,
        title,
        isLoading
      } = props
    
    return(
        <Modal
            isOpen={isOpen}
            handleClose={onCancel}
            title={title || 'Tem certeza que deseja excluir este item?'}
            style={{ width: 500}}
        >
            <Body>
                <Button
                    onClick={onCancel}
                    style={{width:150, backgroundColor: theme.colors.primary}}
                    disabled={isLoading}
                >
                    Cancelar
                </Button>

                <Button
                    buttonType='danger'
                    onClick={onConfirm}
                    style={{
                    width:150
                    }}
                    disabled={isLoading}
                >
                    Excluir
                </Button>
            </Body>
        </Modal>
    )
}