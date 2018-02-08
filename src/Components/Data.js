import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Scrollbars } from 'react-custom-scrollbars'
import styled from 'styled-components'

import CustomLineChart from '../Charts/CustomLineChart' 
import Topbar from './Topbar';

const Data = ({
    balancePerDay,
    fullMonthBalance
}) => {
    return(
        <Container>
            <Row>
                <Col md={12}>
                    <Topbar />
                </Col>
            </Row>
            <Scrollbars style={{width: '99%', height: '860px'}}>
                <Row>

                    <Col md={6}>
                        <Wrap>
                            <Title>Month Revenue</Title>
                            <CustomLineChart data={fullMonthBalance} xKey='day' lineKey='balance' name='Balance' />
                        </Wrap>
                    </Col>

                    <Col md={6}>
                        <Wrap>
                            <Title>Revenue per day</Title>
                            <CustomLineChart data={balancePerDay} xKey='day' lineKey='balance' name='Balance' />
                        </Wrap>
                    </Col>

                </Row>

            </Scrollbars>
        </Container>
    )
}

export default Data

const Container = styled(Grid)`
    width: 100%;
    height: 100vh;
    background-color: #f7f7f7;
`
const Wrap = styled.div`
    background-color: white;
    height: 500px;
    margin: 20px;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 0px 35px #c9c9c9;
`
const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 10px 0;
    color: black;
`