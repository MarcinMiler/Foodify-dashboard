import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Container, Wrap, Title } from '../Styled'

import TopBar from '../Components/Topbar'
import BalanceChart from '../Charts/BalanceChart'
import CustomLineChart from '../Charts/CustomLineChart' 
import PopularFoodChart from '../Charts/PopularFoodChart'
import Down from 'react-icons/lib/fa/angle-down'

const Home = ({
    monthBalance,
    weekOrders,
    popularFood,
    newUsers,
    changeChartSelect
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
                    <Wrap height='250px'>
                        <Head>
                            <Title>Daily orders</Title>
                            <Sort>
                                <Select onChange={e => changeChartSelect(e.target.value)}>
                                    <option value="last week">last week</option>
                                    <option value="last month">last month</option>
                                    <option value="all">all</option>
                                </Select>
                                <DownIcon />
                            </Sort>
                        </Head>
                        <CustomLineChart data={weekOrders} xKey='day' lineKey='orders' name='Orders' />
                    </Wrap>
                </Col>

                <Col md={2}>
                    <Wrap height='250px'>
                        <Title>Total Revenue</Title>
                        <Center>
                            <BalanceChart monthBalance={monthBalance} />
                            <Percent>{ Math.floor((monthBalance.balance / monthBalance.goal) * 100) } %</Percent>
                        </Center>
                        <Balance>Revenue: $ {monthBalance.balance}</Balance>
                        <Goal>Goal: $ {monthBalance.goal}</Goal>
                    </Wrap>
                </Col>

                <Col md={5}>
                    <Wrap height='250px'>
                        <Head>
                            <Title>New users</Title>
                            <Sort>
                                <Select>
                                    <option value="last week">last week</option>
                                    <option value="last month">last month</option>
                                    <option value="all">all</option>
                                </Select>
                                <DownIcon />
                            </Sort>
                        </Head>
                        <CustomLineChart data={newUsers} xKey='day' lineKey='number' name='Users' />
                    </Wrap>
                </Col>

            </Row>

            <Row>
                <Col md={4}>
                    <Wrap2>
                        <Head>
                        <Title>Popular food</Title>
                            <Sort>
                                <Select>
                                    <option value="last week">last week</option>
                                    <option value="last month">last month</option>
                                    <option value="all">all</option>
                                </Select>
                                <DownIcon />
                            </Sort>
                        </Head>
                        <PopularFoodChart popularFood={popularFood} />
                    </Wrap2>
                </Col>

                <Col md={8}>
                    <Wrap2>
                        <Title>Popular food</Title>
                        
                    </Wrap2>
                </Col>

            </Row>
        </Container>
    )
}


export default Home

const Head = styled.div`
    display: flex;
    justify-content: space-between;
`
const Sort = styled.div`
    position: relative;
    display: flex;
    padding: 0;
    margin: 0;
    width: 100px;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fff;
`
const Select = styled.select`
    padding: 5px 8px;
    width: 180%;
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    appearance: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;

    &:focus {
        outline: none;
    }
`
const DownIcon = styled(Down)`
    position: absolute;
    left: 75px;
    top: 9px;
    font-size: 20px;
    color: #ec407a;
    display: block;
    pointer-events: none;
`
const Center = styled.div`
    display: flex;
    justify-content: center;
`
const Percent = styled.p`
    position: absolute;
    top: 240px;
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