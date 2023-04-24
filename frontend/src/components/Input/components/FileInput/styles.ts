import styled from 'styled-components'

import { Container as GlobalContainer} from '../styles/globals'

export const Container = styled(GlobalContainer)`
    button {
        .input-file-label {
            color: ${({ theme }) => theme.colors.primary};
            font-size: 0.6rem;
            
            svg {
                fill: ${({ theme }) => theme.colors.primary};
                margin-left: 10px;
                transform: scale(2);
            }
        }

        :hover {
            .input-file-label {
                color: ${({ theme }) => theme.colors.White};
                svg {
                    fill: ${({ theme }) => theme.colors.White};
                    margin-left: 10px;
                }
            }
        }
    }

    input {
        display: none;
    }

    .file {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        margin-top: 20px;

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 10px;
            border: 1px solid #D1D1D1;
            border-radius: 10px;
        
            p {
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
            }
        }
    }
`