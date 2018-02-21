import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'
import Topbar from './Topbar'

const Orders = ({
    allOrders
}) => {
    const listOfOrders = allOrders.map((order, i) => {
        return(
            <Order key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.date}</P>
                <P>{order.orderStatus}</P>
                <P>{order.address}</P>
                <P>$ {order.totalPrice}</P>
            </Order>
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
                        <Order style={{backgroundColor: 'white', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                            <P>Order</P>
                            <P>Date</P>
                            <P>Status</P>
                            <P>Adrress</P>
                            <P>Total Price</P>
                        </Order>
                        <Scrollbars style={{height: '89%'}}>
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
    background-color: white;
    height: 800px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 35px #c9c9c9;
`
const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 10px 0;
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