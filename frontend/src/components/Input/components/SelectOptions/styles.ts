import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const InputBox = styled.div<{ optionsNumber: number }>`
    display: grid;
    align-items: center;
    grid-template-columns: ${props => {        
        if(+props.optionsNumber === 1) return '8fr 4fr 2fr'

        if(+props.optionsNumber === 2) return '6fr 3fr 2fr 1fr'

        return '8fr 4fr'
    }};
    column-gap: 10px;

    button {
        height: 56px;
        margin-top: 15px;
    }
`

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;            

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 15px 10px;
        border: 1px solid #D1D1D1;
        border-radius: 10px;
        cursor: pointer;
        
        p {
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
        }
    }
`