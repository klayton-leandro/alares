import styled from 'styled-components'

export const Container = styled.div<{ sizes: string}>`
    header.alares-table-header {
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: ${props => props.sizes};        

        .active {
            svg {
                color: ${({ theme }) => theme.colors.primary};
            }

            h1 {
                color: ${({ theme }) => theme.colors.primary};
                opacity: 0.8;
            }
        }
    }
`

export const Body = styled.div<{ hasPagination: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: ${props => props.hasPagination? '0 0 10px 10px': 0};

    footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 18px 40px;
        background-color: ${({ theme }) => theme.colors.White};
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        margin-top: -16px;
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.06));
        border-radius: 0 0 10px 10px;

        section {
            p {
                font-weight: 700;
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 0.15px;
                color: rgba(0, 0, 0, 0.87);
            }

            :nth-child(2){
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }            
        }

       section.pagination{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 60px;
            
            svg {
                cursor: pointer;
                transform: scale(1.2);
                fill: rgba(0, 0, 0, 0.38);
            }
       }

       section.pagination.disabled {
            svg {
                cursor: default;
            }
       }

       select {
            border: 1px solid rgba(0, 0, 0, 0.12);
            border-radius: 4px;  
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.15px;
            color: rgba(0, 0, 0, 0.87);
            padding: 2px 0;
            text-align: center;
       }
    }
`

export const Row = styled.div<{ sizes: string, positions?: Array<any> }>`
    position: relative;
    display: grid;
    grid-template-columns: ${props => props.sizes};
    grid-auto-flow: column;
    align-items: center;
   
    
    p {
        margin: 0;
        padding: 0;
    }
`

export const Item = styled.div<{sort: boolean}>`
    cursor: ${props => props.sort? 'pointer': null};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
   
    h1 {
        font-weight: 700;
        font-size: 8px;
        line-height: 10px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        opacity: 0.8;
    }

    svg {
        cursor: ${props => props.sort? 'pointer': null};
    }
`