import React from 'react'
import styled from 'styled-components'
import { Title } from '../Styled'

import Close from 'react-icons/lib/md/close'

const Modal = ({
    products,
    order,
    changeState
}) => {
    const listOfProducts = order.map(product => {
        const findName = id => products.find(p => id === p.id)
        const { name } = findName(product.productID)
        return(
            <p key={product.productID}>{product.quantity}x {name}</p>
        )
    })
    return(
        <Background onClick={() => changeState('open', false)}>
            <Content>
                <Title>Order Products</Title>
                <CloseIcon onClick={() => changeState('open', false)}/>
                {listOfProducts}
            </Content>
        </Background>
    )
}

export default Modal

const Background = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, .5);
`
const Content = styled.div`
    position: absolute;
    margin: auto;
    padding: 20px;
    top: 0; left: 0; bottom: 0; right: 0;
    background: white;
    border-radius: 5px;
    width: 750px;
    height: 750px;
`
const CloseIcon = styled(Close)`
    font-size: 26px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`