import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Wrap, Title, List, ListWhite, P } from '../Styled'

import Topbar from './Topbar'

const Clients = ({
    users
}) => {
    const listOfUsers = users.map(user => {
        return(
            <List key={user.id}>
                <P>{user.id.substring(0,6)}</P>
                <P>{user.email}</P>
                <P>{user.orders.length}</P>
            </List>
        )
    }) 
    return(
        <Container>
            <Row>
                <Col md={12}>
                    <Topbar />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <Wrap height='790px' noPadd>
                        <Title padd>All clients</Title>
                        <ListWhite>
                            <P>ID</P>
                            <P>Email</P>
                            <P>Orders</P>
                        </ListWhite>

                        <Scrollbars style={{height: '87%'}}>
                            {listOfUsers}
                        </Scrollbars>
                    </Wrap>
                </Col>
            </Row>
        </Container>
    )
}

export default Clients