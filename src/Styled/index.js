import styled from 'styled-components'
import { Grid } from 'react-flexbox-grid'

export const Container = styled(Grid)`
    width: 100%;
    height: 100vh;
    background-color: #f7f7f7;
`
export const Wrap = styled.div.attrs({
    height: props => props.height || '370px',
})`
    background-color: white;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 35px #c9c9c9;
    
    height: ${props => props.height};
    padding: ${props => props.noPadd ? '0px' : '25px'};
`
export const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 10px 0;
    color: black;

    padding: ${props => props.padd ? '25px' : '0px'};
    padding-bottom: 10px;
`
export const List = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    justify-content: space-around;
    align-items: center;
    position: realtive;

    &:nth-child(2n -1) {
        background-color: #F0F1F8;
    }
`
export const ListWhite = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    height: 40px;
`
export const P = styled.p`
    width: 150px;
    text-align: center;
`