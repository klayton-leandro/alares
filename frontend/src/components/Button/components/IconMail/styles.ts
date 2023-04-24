import styled from 'styled-components'

export const Container =  styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    width: 50px;
    height: 34px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.White};
`