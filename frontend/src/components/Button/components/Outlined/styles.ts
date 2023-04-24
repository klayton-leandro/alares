import styled from "styled-components";

import { GlobalContainer } from '../styles/global'

export const Container = styled(GlobalContainer)`
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.primary}; 

   p {
        color: ${({ theme }) => theme.colors.primary}; 
    }

    :hover {
        border: ${({ theme }) => `1px solid ${theme.colors.White}`};
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.White}; 

        p {
            color: ${({ theme }) => theme.colors.White}; 
        }
    }

    :disabled {
        :hover {
            border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
            background-color: ${({ theme }) => theme.colors.White};
            color: ${({ theme }) => theme.colors.primary}; 

            p {
                color: ${({ theme }) => theme.colors.primary}; 
            }
        }
    }
`