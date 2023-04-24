import styled from 'styled-components'

export const Container = styled.div<{ label?: string, icon?: any, error?: boolean, active?: boolean, type?: string, width?: number, height?: number }>`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
   
    .box {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 20px;
        gap: 0px;
        min-width: 250px;
        height: 56px;
        background: ${props => props.active? 'linear-gradient(0deg, #EEFAF5, #EEFAF5), #FFFFFF': props.theme.colors.White};
        border: ${props => props.active? `1px solid ${props.theme.colors.primary}`: '1px solid rgba(0, 0, 0, 0.15)'}; 
        border-radius: 10px;

        input[type="radio"]{
            display: none;
        }

        input[type="checkbox"]{
            display: none;
        }

        input[type="radio"]:checked + .circle{
           display: flex;
           align-items: center;
           justify-content: center;
        }

        input[type="radio"]:checked + .circle .point{
            width: 13px;
            height: 13px;
            border-radius: 100px;
            background-color: #00CF83;
        }

        .circle {
            width: 19px;
            height: 19px;
            background: #FFFFFF;
            border: ${props => props.active? props.theme.colors.primary: '1px solid rgba(0, 0, 0, 0.15)'};
            border-radius: 100px;
        }

        .square {
            width: 20px;
            height: 20px;
            background: #FFFFFF;
            border: 1px solid #00BD77;
            border-radius: 6px;

            .check {
                display: none;
            }
        }

        .divider {
            width: 30px;
            height: 0px;           
            border: 1px solid rgba(0, 0, 0, 0.2);
            transform: rotate(90deg);
        }

        p{
            font-weight: 500;
            font-size: 14px;
            line-height: 14px;
            color: ${({ theme }) => theme.colors.black};
        }
    }

    span {
        font-weight: 700;
        font-size: 8px;
        line-height: 10px;
        letter-spacing: 0.2em;
        white-space: nowrap;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        opacity: 0.8;  
    }

    .input-error {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        font-weight: 700;
        font-size: 11px;
        line-height: 14px;
        color: ${({ theme }) => theme.colors.red};

        p {
            margin-top: 2px;
        }

        svg {
            transform: scale(1.4);
        }
    }

    p.show-password {
        cursor: pointer;
        text-align: end;
        font-weight: 500;
        font-size: 14px;
    }

    select {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 20px;
        gap: 15px;
        height: ${props => props.height ? `${props.height}px`: '56px'};
        min-width: ${props => props.width? `${props.width}px`: '250px'};
        background: ${props => {
            if(props.error){
                return props.theme.colors.redLigth;
            }

            if(props.active){
                return '#EEFAF5'
            }

            return props.theme.colors.White
        }};
         border: ${props => {
            if(props.error){
                return '1px solid #CF0000'
            }

            if(props.active){
                return '1px solid #00CF83'
            }

            return '1px solid rgba(0, 0, 0, 0.15)'
        }};
        border-radius: 10px;
        color: #AAAAAA;
        /* font-weight: 400; */
        font-size: 14px;
        line-height: 14px;
        appearance: none;              
    }

    .selectIcon {
        position: absolute;
        top: ${props => props.label? '30px': `${ 15 - (56 - (!!props.height? Number(props.height): 56) )/2 }px`};
        right: 5px;
        color: ${props => props.error? props.theme.colors.red: props.theme.colors.primary};
    }

    input {
        display: flex;
        flex-direction: row;
        align-items:1 center;
        padding: ${ props =>  props.icon === undefined && props.type !== 'password'? '5px 4px 5px 20px': '5px 4px 5px 60px'};
        gap: 15px;
        height: 44px;
        background: ${props => {
            if(props.error){
                return props.theme.colors.redLigth;
            }

            if(props.active){
                return '#EEFAF5'
            }

            return props.theme.colors.White
        }};
        border: ${props => {
            if(props.error){
                return '1px solid #CF0000'
            }

            if(props.active){
                return '1px solid #00CF83'
            }

            return '1px solid rgba(0, 0, 0, 0.15)'
        }};
        border-radius: 14px;

        ::placeholder{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #C1C1C1;
        }
    }

    .percent-box-input {
        position: relative;
        display: flex;
        flex-direction: column;

        .percent-box-input-icon {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            right: 0;
            height: 56px;
            width: 50px;
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 0 14px 14px 0;

            svg {
                transform: scale(1.4)
            }
        }
        
    }
`
