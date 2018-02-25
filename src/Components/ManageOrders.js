import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Scrollbars } from 'react-custom-scrollbars'
import styled from 'styled-components'
import { Container, Wrap, Title, List, ListWhite, P } from '../Styled'

import Check from 'react-icons/lib/md/check'
import Close from 'react-icons/lib/md/close'
import Products from 'react-icons/lib/md/shopping-cart'
import TopBar from './Topbar'

const Legend = () => (
    <ListWhite>
        <P>Order</P>
        <P>Adrress</P>
        <P>Total Price</P>
        <P>Products</P>
        <P>Action</P>
    </ListWhite>
)

const Hover = () => (
    <Lol>
        lol
    </Lol>
)

const optionsCursorTrueWithMargin = {
    followCursor: false,
    shiftX: 20,
    shiftY: 0
  }

const ManageOrders = ({
    currentOrders,
    updateStatus
}) => {
    const newOrders = currentOrders
    .filter(order => order.orderStatus === 'Order placed')
    .map(order => {
        return(
            <List key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>

                <div style={{width: '150px', textAlign: 'center'}}>
                    <ProductsIcon />
                </div>

                <div style={{width: '150px', textAlign: 'center'}}>
                    <CheckIcon onClick={() => updateStatus('Order confirmed', order.id)} />
                    <CloseIcon />
                </div>
            </List>
        )
    })
    const ordersPreparing = currentOrders
    .filter(order => order.orderStatus === 'Order Confirmed')
    .map(order => {
        return(
            <List key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>

                <div style={{width: '150px', textAlign: 'center'}}>
                    <ProductsIcon />
                </div>

                <div style={{width: '150px', textAlign: 'center'}}>
                    <CheckIcon onClick={() => updateStatus('Order preparing', order.id)} />
                </div>
            </List>
        )
    })
    const ordersInDelivery = currentOrders
    .filter(order => order.orderStatus === 'Order preparing')
    .map(order => {
        return(
            <List key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>

                <div style={{width: '150px', textAlign: 'center'}}>
                    <ProductsIcon />
                </div>

                <div style={{width: '150px', textAlign: 'center'}}>
                    <CheckIcon onClick={() => updateStatus('Order in delivery', order.id)} />
                </div>
            </List>
        )
    })
    const ordersComplete = currentOrders
    .filter(order => order.orderStatus === 'Order in delivery')
    .map(order => {
        return(
            <List key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>

                <div style={{width: '150px', textAlign: 'center'}}>
                    <ProductsIcon />
                </div>

                <div style={{width: '150px', textAlign: 'center'}}>
                    <CheckIcon onClick={() => updateStatus('Order complete', order.id)} />
                </div>
            </List>
        )
    })
    
    return(
        <Container>
            <Row>
                <Col md={12}>
                    <TopBar />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Wrap noPadd>
                        <Title padd>New orders</Title>

                        <Legend />

                        <Scrollbars style={{height: '68%'}}>
                            {newOrders}
                        </Scrollbars>
                    </Wrap>
                </Col>

                <Col md={6}>
                    <Wrap noPadd>
                        <Title padd>Order confirmed</Title>

                        <Legend />

                        <Scrollbars style={{height: '68%'}}>
                            {ordersPreparing}
                        </Scrollbars>
                    </Wrap>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Wrap noPadd>
                        <Title padd>Order preparing</Title>

                        <Legend />

                        <Scrollbars style={{height: '68%'}}>
                            {ordersInDelivery}
                        </Scrollbars>
                    </Wrap>
                </Col>

                <Col md={6}>
                    <Wrap noPadd>
                        <Title padd>Order in delivery</Title>

                        <Legend />

                        <Scrollbars style={{height: '68%'}}>
                            {ordersComplete}
                        </Scrollbars>
                    </Wrap>
                </Col>
            </Row>
        </Container>
    )
}

export default ManageOrders

const CheckIcon = styled(Check)`
    color: #42f465;
    font-size: 30px;
    margin: 10px;
    cursor: pointer;
`
const CloseIcon = styled(Close)`
    color: red;
    font-size: 30px;
    margin: 10px;
    cursor: pointer;
`
const ProductsIcon = styled(Products)`
    font-size: 30px;
    margin: 10px;
    cursor: pointer;
    color: gray;
`
const Lol = styled.div`
    position: absolute;
    top: 0px;
    left: 150px;
    background-color: red;
    width: 150px;
    height: 150px;
`