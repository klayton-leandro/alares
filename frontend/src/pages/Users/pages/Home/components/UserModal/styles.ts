import styled from 'styled-components'

export const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .box {
            display: flex;
            gap: 20px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 15px;
        }
    }
`