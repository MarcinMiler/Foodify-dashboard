import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Data from '../Components/Data'

class DataContainer extends Component {
    render() {
        const { balancePerDay } = this.props.balancePerDay
        const { fullMonthBalance } = this.props.fullMonthBalance
        return(
            <div>
                { balancePerDay && fullMonthBalance && <Data balancePerDay={balancePerDay} fullMonthBalance={fullMonthBalance} /> }
            </div>
        )
    }
}

const balancePerDayQuery = gql`
    query balancePerDay {
        balancePerDay {
            day,
            balance
        }
    }
`
const fullMonthBalanceQuery = gql`
    query fullMonthBalance {
        fullMonthBalance {
            day,
            balance
        }
    }
`

export default compose(
    graphql(balancePerDayQuery, { name: 'balancePerDay' }),
    graphql(fullMonthBalanceQuery, { name: 'fullMonthBalance' })
)(DataContainer)