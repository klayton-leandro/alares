import styled from 'styled-components'

import { IconBaseContainer } from '../IconButtonBase'

export const Container =  styled(IconBaseContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    width: 50px;
    height: 34px;
    background: #FF7C7C;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.White};
`