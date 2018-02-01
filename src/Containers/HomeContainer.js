import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Home from '../Components/Home'

class HomeContainer extends Component {
    render() {
        if(this.props.data.loading) return "Loading"
        const { monthBalance } = this.props.data
        return <Home monthBalance={monthBalance} />
    }
}

const monthBalanceQuery = gql`
    query monthBalance {
        monthBalance {
            balance,
            balanceGoal,
            prevBalance,
            prevBalanceGoal
        }
    }
`

export default graphql(monthBalanceQuery)(HomeContainer)