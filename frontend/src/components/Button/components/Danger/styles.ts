import styled from "styled-components";

import { GlobalContainer } from '../styles/global'

export const Container = styled(GlobalContainer)`
    display: flex;
    flex-direction: row;
    background: #FFF7F7;
    border: 1px solid rgba(255, 0, 0, 0.22);    
    color:  #E40000; 

    p {
        color:  #E40000; 
    }

    svg {
        color: #E40000;        
    }
`