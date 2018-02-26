import styled from 'styled-components'
import { Grid } from 'react-flexbox-grid'

export const Container = styled(Grid)`
    width: 100%;
    height: 100vh;
    background-color: #EEEBEC;
`
export const Wrap = styled.div.attrs({
    height: props => props.height || '370px',
})`
    background-color: white;
    margin: 20px;
    border-radius: 10px;
    
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
export const Group = styled.div`
    position: relative;
`
export const Label = styled.label`
    position: absolute;
    top: 5px;
    font-size: 14px;
    color: gray;
    transition: all 150ms ease-in;
    pointer-events: none;
`
export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid lightgray;
    font-size: 12px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    padding: 10px 0 5px 0;
    transition: all 300ms ease-out;
    margin: 30px 0 0 0;
    z-index: 200;
    display: block;
    &:focus {
        outline: none;
        border-bottom: 1px solid #5D94F5;
        color: #5D94F5;
    }
    &:focus + label, &:valid + label{
        position: absolute;
        top: -10px;
        font-size: 12px;
        color: #5D94F5;
    }
    
`