import styled from 'styled-components'

import { Container as GlobalContainer } from '../styles/globals'

type CheckboxType = 'active' | undefined

export const Container = styled(GlobalContainer)<{  checkboxType: CheckboxType }>`
    input[type="checkbox"]:checked + .square{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #00CF83;
    }

    input[type="checkbox"]:checked + .square .check{
        display: block;
        color: ${({ theme }) => theme.colors.White};
    }

    .box {  
        height: 56px;
        background: ${props => {
            if(props.checkboxType === 'active') return 'linear-gradient(0deg, #EEFAF5, #EEFAF5), #FFFFFF' 

            return props.theme.colors.White
         }};
        border: ${props => {
            if(props.checkboxType === 'active') return '1px solid #00CF83'

            return '1px solid rgba(0, 0, 0, 0.1)'
        }};

        .square {
            width: 20px;
            height: 20px;
            background: #FFFFFF;
            border: ${props => {
                if(props.checkboxType === 'active') return '1px solid #00BD77'

                return '1px solid rgba(0, 0, 0, 0.1)'
            }};
            border-radius: 6px;

            .check {
                display: none;
            }
        }
    }
`