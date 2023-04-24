import styled from 'styled-components'

export const Wrapper = styled.div`
    .rdrInputRange{
        display: none;
    }
`

export const Icon = styled.div<{ label?: string}>`
    position: absolute;
    top: ${props => props?.label?.length? '30px': '20px'};
    right: 10px;
    margin-top: 2px;

    svg {
        margin: 2px 10px auto 10px;
        transform: scale(1.4);
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const ConfirmBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
        width: 60%;
    }
`