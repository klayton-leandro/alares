import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    /* width: 110%; */
    min-width: 100%;
    padding: 18px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    section {
        svg {
            transform: scale(2.5);
            cursor: pointer;

            :nth-child(2){
                transform: scale(2);
                margin-top: 5px;
            }
        }

        display: flex;
        flex-direction: row;
        gap: 60px;
        color: ${({ theme }) => theme.colors.White};
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
    }

    img {        
        height: 30px;
    }
`