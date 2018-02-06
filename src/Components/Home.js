import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

import TopBar from '../Components/Topbar'
import BalanceChart from '../Charts/BalanceChart'
import CustomLineChart from '../Charts/CustomLineChart' 
import PopularFoodChart from '../Charts/PopularFoodChart'
import Down from 'react-icons/lib/fa/angle-down'

const Home = ({
    monthBalance,
    weekOrders,
    popularFood
}) => {

    return(
        <Container>
            <Row>
                <Col md={12}>
                    <TopBar />
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Wrap>
                        <Head>
                            <Title>Daily orders</Title>
                            <Sort>
                                <SortText>last week</SortText>
                                <DownIcon />
                            </Sort>
                        </Head>
                        <CustomLineChart data={weekOrders} xKey='day' lineKey='orders' name='Orders' />
                    </Wrap>
                </Col>

                <Col md={2}>
                    <Wrap>
                        <Title>Total Balance</Title>
                        <Center>
                            <BalanceChart monthBalance={monthBalance} />
                            <Percent>{ Math.floor((monthBalance.balance / monthBalance.goal) * 100) } %</Percent>
                        </Center>
                        <Balance>Balance: $ {monthBalance.balance}</Balance>
                        <Goal>Goal: $ {monthBalance.goal}</Goal>
                    </Wrap>
                </Col>

                <Col md={5}>
                    <Wrap>
                    <Title>Your Company</Title>
                    </Wrap>
                </Col>

            </Row>

            <Row>
                <Col md={4}>
                    <Wrap2>
                        <Head>
                            <Title>Popular food</Title>
                            <Sort>
                                <SortText>last week</SortText>
                                <DownIcon />
                            </Sort>
                        </Head>
                        <PopularFoodChart popularFood={popularFood} />
                    </Wrap2>
                </Col>

                <Col md={4}>
                    <Wrap2>
                        <Title>Popular food</Title>
                        
                    </Wrap2>
                </Col>

                <Col md={4}>
                    <Wrap2>
                        <Title>Popular food</Title>
                    </Wrap2>
                </Col>
            </Row>
        </Container>
    )
}


export default Home

const Container = styled(Grid)`
    width: 100%;
    height: 100vh;
    background-color: #E6F0F2;
`
const Wrap = styled.div`
    background-color: white;
    height: 240px;
    margin: 20px;
    border-radius: 10px;
    padding: 25px;
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
`
const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 10px 0;
    color: black;
`
const Sort = styled.div`
    display: flex;
`
const SortText = styled.p`
    font-size: 12px;
    margin: 0;
`
const DownIcon = styled(Down)`
    color: #5D94F5;
    display: block;
`
const Center = styled.div`
    display: flex;
    justify-content: center;
`
const Percent = styled.p`
    position: absolute;
    top: 210px;
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
    height: 400px;
`