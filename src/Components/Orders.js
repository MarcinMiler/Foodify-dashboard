import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Wrap, Title, List, ListWhite, P, ProductsIcon } from '../Styled'

import Topbar from './Topbar'

const Orders = ({
    allOrders,
    changeState
}) => {
    const listOfOrders = allOrders.map((order, i) => {
        return(
            <List key={order.id}>
                <P>#{order.id.substring(0,8)}</P>
                <P>{order.date}</P>
                <P>{order.orderStatus}</P>
                <P>{order.address}</P>

                <div style={{width: '150px', textAlign: 'center'}}>
                    <ProductsIcon onClick={() => {
                        changeState('order', order.products)
                        changeState('open', true)
                    }} />
                </div>

                <P>$ {order.totalPrice}</P>
            </List>
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
                    <Wrap height='780px' noPadd>
                        <Title padd>All orders</Title>
                        <ListWhite>
                            <P>Order</P>
                            <P>Date</P>
                            <P>Status</P>
                            <P>Adrress</P>
                            <P>Products</P>
                            <P>Total Price</P>
                        </ListWhite>
                        <Scrollbars style={{height: '86%'}}>
                            {listOfOrders}
                        </Scrollbars>
                    </Wrap>
                </Col>
            </Row>
        </Container>
    )
}

export default Orders