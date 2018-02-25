import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSelect } from '../Actions'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Home from '../Components/Home'
import Nav from '../Components/Nav'

class HomeContainer extends Component {

    changeChartSelect = select => this.props.changeSelect(select)

    render() {
        const { monthBalance, weekOrders, popularFood, newUsers } = this.props
        return(
            <div>
                { monthBalance.monthBalance && weekOrders.weekOrders && popularFood.popularFood && newUsers && 
                    <Nav>
                        <Home
                            changeChartSelect={this.changeChartSelect}
                            monthBalance={this.props.monthBalance.monthBalance}
                            weekOrders={this.props.weekOrders.weekOrders}
                            popularFood={this.props.popularFood.popularFood}
                            newUsers = {this.props.newUsers.newUsers} />
                    </Nav>
                }
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
    query weekOrders($limit: String!) {
        weekOrders(limit: $limit) {
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
const newUsersQuery = gql`
    query newUsers {
        newUsers {
            day,
            number
        }
    }
`

const mapStateToProps = state => ({
    select: state.settings.select
})

const mapDisptachToProps = { changeSelect }

export default compose(
    connect(mapStateToProps, mapDisptachToProps),
    graphql(monthBalanceQuery, { name: 'monthBalance' }),
    graphql(weekOrdersQuery, {
        name: 'weekOrders',
        options: props => ({ variables: { limit: props.select } })
    }),
    graphql(popularFoodQuery, { name: 'popularFood' }),
    graphql(newUsersQuery, { name: 'newUsers' }),
)(HomeContainer)