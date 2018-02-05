import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Home from '../Components/Home'

class HomeContainer extends Component {
    render() {
        if(this.props.monthBalance.loading) return "Loading"
        const { monthBalance, weekOrders, popularFood } = this.props
        return(
            <div>
                { monthBalance.monthBalance && weekOrders.weekOrders && popularFood.popularFood && <Home 
                    monthBalance={this.props.monthBalance.monthBalance}
                    weekOrders={this.props.weekOrders.weekOrders}
                    popularFood={this.props.popularFood.popularFood} />}
            </div>
        )
    }
}

const monthBalanceQuery = gql`
    query monthBalance {
        monthBalance {
            balance,
            goal
        }
    }
`
const weekOrdersQuery = gql`
    query weekOrders {
        weekOrders {
            day,
            orders
        }
    }
`
const popularFoodQuery = gql`
    query popularFood {
        popularFood {
            type,
            orders
        }
    }
`

export default compose(
    graphql(monthBalanceQuery, { name: 'monthBalance' }),
    graphql(weekOrdersQuery, { name: 'weekOrders' }),
    graphql(popularFoodQuery, { name: 'popularFood' }),
)(HomeContainer)