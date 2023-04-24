import styled from "styled-components";

export const GlobalContainer = styled.button<{ active?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px; 
    border-solid: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 17px;
    background-color: ${({ theme }) => theme.colors.secundary};
    color: ${({ theme }) => theme.colors.White};
    white-space: nowrap;

    :disabled {
        cursor: default;
        background: rgba(0, 0, 0, 0.05);
        color: #ADADAD;

        p {
            color: #ADADAD;
        }
    }
   
    svg{
        color: #ffffff;
        transform: scale(1.2);
        margin-right: 10px;
        margin-bottom: -1px;
    }

    p{ 
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.03em;
        color: ${({ theme }) => theme.colors.primary};        
    }

    transition: filter 0.4s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        filter: brightness(0.8);     
        
        p{ 
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: -0.03em;
            color: ${({ theme }) => theme.colors.White};
            };        
        }
    }
`