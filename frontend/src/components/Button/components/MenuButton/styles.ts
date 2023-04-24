import styled from "styled-components";


export const Container = styled.button<{ active?: boolean }>`  
    :nth-child(1){
        @media(max-width: 800px){
            p {
                width: 168px;
            }
        }
    }

    :nth-child(2){
        @media(max-width: 800px){
            p {
                width: 328px;
            }
        }
    }
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 20px;
    gap: 10px;
    height: 50px;
    background: ${props => props.active? '#00BD77': props.theme.colors.White};
    border-radius: 33px;
    border: ${props => props.active? 'none': '1px solid #D7D7D7'};

    :hover {
        background: #00BD77;
        border: none;

        p {
            color: ${props => props.theme.colors.White};
        }
    }

    p {         
        height: 40px;
        font-family: 'Mark Pro';
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 40px;
        color: ${props => props.active? props.theme.colors.White: props.theme.colors.black};
        flex: none;
        order: 0;
        flex-grow: 0;
    }
`