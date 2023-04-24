import styled from 'styled-components'

export const Container = styled.div`
    .alares-table-header {
        background-color: #F0F0F2;
        padding: 20px 16px;
        border-radius: 10px 10px 0 0;
    }

    .alares-table-body {
        background-color: ${({ theme }) => theme.colors.White};
        margin-top: -20px;
    }

    .alares-table-row {
        background-color: ${({ theme }) => theme.colors.White};
        cursor: pointer;
        padding: 10px 16px;    
       
    }

    .alares-table-row-active {
        background-color: ${({ theme }) => theme.colors.primaryLigth};
        margin: 0;
    }

    .alares-table-trash-icon{
        cursor: pointer;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-left: -150px;
    max-width: 420px;
`