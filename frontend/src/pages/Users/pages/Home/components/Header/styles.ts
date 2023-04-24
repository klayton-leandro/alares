import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    section {
       display: flex;
       flex-direction: column;
       gap: 8px;

        h1 {
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
        }

        h2 {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: -0.03em;
        }
    }
`