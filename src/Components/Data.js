import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

import FullMonthBalanceChart from '../Charts/FullMonthBalanceChart'

const Data = ({
    fullMonthBalance
}) => {
    return(
        <Container>
            <Row>

                <Col md={12}>
                    <Wrap>
                        <Title>Month Balance</Title>
                        <FullMonthBalanceChart fullMonthBalance={fullMonthBalance} />
                    </Wrap>
                </Col>

            </Row>
        </Container>
    )
}

export default Data

const Container = styled(Grid)`
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #F7F7F7;
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
    font-size: 20px;
    margin: 0 0 10px 0;
    color: #b907bc;
`