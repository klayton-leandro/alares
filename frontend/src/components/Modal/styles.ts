import styled from 'styled-components'

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed; 
  z-index: 9999; 
  padding-top: 40px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  display: ${props => !props.isOpen? '': 'none'};
`

export const Body    = styled.div`
    @media(max-width: 800px){
        width: 90vw;
    }

    width: 60%;    
    margin: auto;
    background: ${({ theme }) => theme.colors.White};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04), 0px 5px 10px rgba(0, 0, 0, 0.05), 0px 1px 1px -1px rgba(0, 0, 0, 0.1), 0px 2px 1px -1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    margin-bottom: -10px;;

    h1 {
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: ${({ theme }) => theme.colors.black};
    }

    svg {
        cursor: pointer;
    }
`

export const Content = styled.div`
    padding: 55px;
`