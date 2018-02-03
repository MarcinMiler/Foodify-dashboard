import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

import Chart from './Chart'
import MonthBalanceChart from './MonthBalanceChart'
import PopularFoodChart from './PopularFoodChart'

const Home = ({
    monthBalance,
    weekOrders,
    popularFood
}) => {

    return(
        <Container>
            <Row>
                <Col md={5}>
                    <Wrap>
                        <Title>Daily orders</Title>
                        <MonthBalanceChart weekOrders={weekOrders} />
                    </Wrap>
                </Col>

                <Col md={2}>
                    <Wrap>
                        <Title>Total Balance</Title>
                        <Center>
                            <Chart monthBalance={monthBalance} />
                            <Percent>{ Math.floor((monthBalance.balance / monthBalance.goal) * 100) } %</Percent>
                        </Center>
                        <Balance>Balance: $ {monthBalance.balance}</Balance>
                        <Goal>Goal: $ {monthBalance.goal}</Goal>
                    </Wrap>
                </Col>

                <Col md={5}>
                    <Wrap>
                    <Title>Balance</Title>
                    </Wrap>
                </Col>

            </Row>

            <Row>
                <Col md={6}>
                    <Wrap2>
                        <Title>Popular food</Title>
                        <PopularFoodChart popularFood={popularFood} />
                    </Wrap2>
                </Col>
            </Row>
        </Container>
    )
}


export default Home

const Container = styled(Grid)`
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #F7F7F7;
`
const Wrap = styled.div`
    background-color: white;
    height: 240px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #e2e2e2;
    padding: 15px;
`
const Title = styled.p`
    font-size: 24px;
    margin: 0;
`
const Center = styled.div`
    display: flex;
    justify-content: center;
`
const Percent = styled.p`
    position: absolute;
    top: 163px;
    font-size: 24px;
`
const Balance = styled.p`
    font-size: 18px;
    margin: 0;
    text-align: center;
`
const Goal = styled.p`
    font-size: 18px;
    margin-top: 10px;
    color: gray;
    text-align: center;
`
const Wrap2 = styled(Wrap)`
    height: 500px;
`