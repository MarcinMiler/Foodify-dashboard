import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Data from '../Components/Data'

class DataContainer extends Component {
    render() {
        if(this.props.fullMonthBalance.loading) "Loading"
        const { fullMonthBalance } = this.props.fullMonthBalance
        return(
            <div>
                { fullMonthBalance && <Data fullMonthBalance={this.props.fullMonthBalance.fullMonthBalance} /> }
            </div>
        )
    }
}

const fullMonthBalanceQuery = gql`
    query fullMonthBalance {
        fullMonthBalance {
            day,
            balance
        }
    }
`

export default graphql(fullMonthBalanceQuery, { name: 'fullMonthBalance' })(DataContainer)