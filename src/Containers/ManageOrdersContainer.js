import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import ManageOrders from '../Components/ManageOrders'
import Nav from '../Components/Nav'

class ManageOrdersContainer extends Component {

    componentDidMount() {
        this.unsubscribe = this.subscribe()
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe()
    }

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

    subscribe = () => {
        return this.props.currentOrders.subscribeToMore({
            document: newOrderSubscription,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev
                
                return Object.assign({}, prev, {
                    currentOrders: [ ...prev.currentOrders, subscriptionData.data.newOrder ]
                })
            }
        })
    }

    render() {
        const { currentOrders } = this.props.currentOrders
        return(
            <div>
                { currentOrders && 
                    <Nav>
                        <ManageOrders currentOrders={currentOrders} updateStatus={this.updateStatus} />
                    </Nav>
                }
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
const newOrderSubscription = gql`
    subscription newOrder {
        newOrder {
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
    graphql(currentOrdersQuery, { name: 'currentOrders' }),
    graphql(updateOrderStatusMutation, { name: 'updateOrderStatus' }),
)(ManageOrdersContainer)