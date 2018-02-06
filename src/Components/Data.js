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
                            <Title>Month Balance</Title>
                            <CustomLineChart data={fullMonthBalance} xKey='day' lineKey='balance' name='Balance' />
                        </Wrap>
                    </Col>

                    <Col md={6}>
                        <Wrap>
                            <Title>Balance per day</Title>
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
    background-color: #E6F0F2;
`
const Wrap = styled.div`
    background-color: white;
    height: 500px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #e2e2e2;
    padding: 15px;
`
const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 10px 0;
    color: black;
`