import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import ManageOrders from '../Components/ManageOrders'

class ManageOrdersContainer extends Component {

    updateStatus = (newStatus, id) => {
        this.props.updateOrderStatus({
            variables: { newStatus, id },
            update: (store, { data: { updateOrderStatus }}) => {
                let data = store.readQuery({query: currentOrdersQuery})
                data.currentOrders.forEach(product => {
                    if(product.id === id) product.orderStatus = newStatus
                })
                store.writeQuery({query: currentOrdersQuery, data})
            }
        })
    }

    render() {
        const { currentOrders } = this.props.currentOrders
        console.log(currentOrders)
        return(
            <div>
                { currentOrders && <ManageOrders currentOrders={currentOrders} updateStatus={this.updateStatus} /> }
            </div>
        )
    }
}

const currentOrdersQuery = gql`
    query currentsOrders {
        currentOrders {
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
const updateOrderStatusMutation = gql`
    mutation updateOrderStatus($newStatus: String! $id: ID!) {
        updateOrderStatus(newStatus: $newStatus id: $id)
    }
`
export default compose(
    graphql(currentOrdersQuery, { name: 'currentOrders' }),
    graphql(updateOrderStatusMutation, { name: 'updateOrderStatus' }),
)(ManageOrdersContainer)