import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

import Check from 'react-icons/lib/md/check'
import Close from 'react-icons/lib/md/close'
import TopBar from './Topbar'

const ManageOrders = ({
    currentOrders,
    updateStatus
}) => {
    const newOrders = currentOrders
    .filter(order => order.orderStatus === 'Order placed')
    .map(order => {
        return(
            <Order key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>
                <div style={{width: '150px', textAlign: 'center'}}>
                    <CheckIcon onClick={() => updateStatus('Order confirmed', order.id)} />
                    <CloseIcon />
                </div>
            </Order>
        )
    })
    const ordersPreparing = currentOrders
    .filter(order => order.orderStatus === 'Order Confirmed')
    .map(order => {
        return(
            <Order key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>
                <div style={{width: '150px', textAlign: 'center'}}>
                    <CheckIcon onClick={() => updateStatus('Order preparing', order.id)} />
                </div>
            </Order>
        )
    })
    const ordersInDelivery = currentOrders
    .filter(order => order.orderStatus === 'Order preparing')
    .map(order => {
        return(
            <Order key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>
                <div style={{width: '150px', textAlign: 'center'}}>
                    <CheckIcon onClick={() => updateStatus('Order in delivery', order.id)} />
                </div>
            </Order>
        )
    })
    const ordersComplete = currentOrders
    .filter(order => order.orderStatus === 'Order in delivery')
    .map(order => {
        return(
            <Order key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>
                <div style={{width: '150px', textAlign: 'center'}}>
                    <CheckIcon onClick={() => updateStatus('Order complete', order.id)} />
                </div>
            </Order>
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
                    <Wrap>
                        <Title>New orders</Title>

                        <Order style={{backgroundColor: 'white', height: '40px'}}>
                            <P>Order</P>
                            <P>Adrress</P>
                            <P>Total Price</P>
                            <P>Action</P>
                        </Order>

                        <Scrollbars style={{height: '70%'}}>
                            {newOrders}
                        </Scrollbars>
                    </Wrap>
                </Col>

                <Col md={6}>
                    <Wrap>
                        <Title>Order confirmed</Title>

                        <Order style={{backgroundColor: 'white', height: '40px'}}>
                            <P>Order</P>
                            <P>Adrress</P>
                            <P>Total Price</P>
                            <P>Action</P>
                        </Order>

                        <Scrollbars style={{height: '70%'}}>
                            {ordersPreparing}
                        </Scrollbars>
                    </Wrap>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Wrap>
                        <Title>Order preparing</Title>

                        <Order style={{backgroundColor: 'white', height: '40px'}}>
                            <P>Order</P>
                            <P>Adrress</P>
                            <P>Total Price</P>
                            <P>Action</P>
                        </Order>

                        <Scrollbars style={{height: '70%'}}>
                            {ordersInDelivery}
                        </Scrollbars>
                    </Wrap>
                </Col>

                <Col md={6}>
                    <Wrap>
                        <Title>Order in delivery</Title>

                        <Order style={{backgroundColor: 'white', height: '40px'}}>
                            <P>Order</P>
                            <P>Adrress</P>
                            <P>Total Price</P>
                            <P>Action</P>
                        </Order>

                        <Scrollbars style={{height: '70%'}}>
                            {ordersComplete}
                        </Scrollbars>
                    </Wrap>
                </Col>
            </Row>
        </Container>
    )
}

export default ManageOrders

const Container = styled(Grid)`
    width: 100%;
    height: 100vh;
    background-color: #f7f7f7;
`
const Wrap = styled.div`
    background-color: white;
    height: 370px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 35px #c9c9c9;
`
const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    padding: 25px 25px 0 25px;
    color: black;
`
const Order = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    justify-content: space-around;
    align-items: center;

    &:nth-child(2n -1) {
        background-color: #F0F1F8;
    }
`
const P = styled.p`
    width: 150px;
    text-align: center;
`
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