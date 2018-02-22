import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Wrap, Title } from '../Styled'

import CustomLineChart from '../Charts/CustomLineChart' 
import Topbar from './Topbar'

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