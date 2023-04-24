import styled from 'styled-components'


export const Container= styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    span {
        font-weight: 700;
        font-size: 8px;
        line-height: 10px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        opacity: 0.8;  
    }
`

export const Box = styled.select`
    height: 56px;
    padding: 15px 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.colors.White};
    border-radius: 10px;

    .placeholder {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;
            color: #AAAAAA;
        }

        svg {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    .select-error: { 
        color: ${({ theme }) => theme.colors.red};
    }
`