import styled from 'styled-components'

export const Header  = styled.div<{ widths: Array<string>}>`
    display: grid;
    grid-template-columns: ${props => props.widths.join(' ')};
`
