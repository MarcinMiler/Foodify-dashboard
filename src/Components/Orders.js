import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'
import Topbar from './Topbar';

const Orders = ({
    allOrders
}) => {
    let numbers = allOrders.length+2
    const listOfOrders = allOrders.map((order, i) => {
        numbers--
        return(
            <OrderWrap>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.date}</P>
                <P>{order.orderStatus}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>
            </OrderWrap>
        )
    }).reverse()
    return(
        <Container>
            <Row>
                <Col md={12}>
                    <Topbar />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Wrap>
                        <Title>Orders</Title>
                        <Legend>
                            <P>Order</P>
                            <P>Date</P>
                            <P>Status</P>
                            <P>Adrress</P>
                            <P>Total Price</P>
                        </Legend>
                        <Scrollbars style={{width: '100%'}}>
                            {listOfOrders}
                        </Scrollbars>
                    </Wrap>
                </Col>
            </Row>
        </Container>
    )
}

export default Orders

const Container = styled(Grid)`
    width: 100%;
    height: 100vh;
    background-color: #f7f7f7;
`
const Wrap = styled.div`
    dispaly: flex;
    height: 750px;
    flex-direction: column;
    margin: 20px;
`
const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 10px 0;
    color: black;
`
const Legend = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 99.11%;
`
const OrderWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 99%;
    height: 80px;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    margin: 0 0 20px 0;
    border: 1px solid lightgray;
    border-radius: 7px;
`
const P = styled.p`
    width: 150px;
    text-align: center;
`