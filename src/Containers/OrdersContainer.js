import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Orders from '../Components/Orders'

class OrdersContainer extends Component {
    render() {
        const { allOrders } = this.props
        return(
            <div>
                { allOrders.allOrders && <Orders allOrders={allOrders.allOrders} />}
            </div>
        ) 
    }
}

const allOrdersQuery = gql`
    query allOrders {
        allOrders {
            id,
            date,
            orderStatus,
            products {
                productID,
                quantity
            }
            totalPrice,
            address
        }
    }
`

export default compose(
    graphql(allOrdersQuery, { name: 'allOrders'}),
)(OrdersContainer)