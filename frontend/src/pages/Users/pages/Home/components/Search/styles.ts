import styled from 'styled-components'

export const Header = styled.div`
    width: 1100px;
    background-color: #F0F0F2;
    padding: 20px 16px;
    border-radius: 10px 10px 0 0;
    margin-bottom: -40px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1100px;
    padding: 20px 20px 10px 20px;
    background-color: ${({ theme }) => theme.colors.White};
    border-radius: 0 0 10px 10px;

    section {
        display: grid;
        grid-gap: 20px;
        margin-bottom: 20px;

        :nth-child(1){
            grid-template-columns: 6fr 4fr;
        }
        
        :nth-child(2){
            grid-template-columns: 3fr 3fr 3fr 3fr;
        }

        :nth-child(3) {
            grid-template-columns: 3fr 3fr 3fr 3fr;
        }
    }
`
