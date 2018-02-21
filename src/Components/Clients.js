import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

import Topbar from './Topbar'

const Clients = ({
    users
}) => {
    const listOfUsers = users.map(user => {
        return(
            <User key={user.id}>
                <P>{user.id.substring(0,6)}</P>
                <P>{user.email}</P>
                <P>{user.orders.length}</P>
            </User>
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
                    <Wrap>
                        <User style={{backgroundColor: 'white', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                            <P>ID</P>
                            <P>Email</P>
                            <P>Orders</P>
                        </User>
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

const Container = styled(Grid)`
    width: 100%;
    height: 100vh;
    background-color: #f7f7f7;
`
const Wrap = styled.div`
    background-color: white;
    height: 720px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 35px #c9c9c9;
`
const User = styled.div`
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