import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Orders from '../Components/Orders'
import Nav from '../Components/Nav'
import Modal from '../Components/Modal'

class OrdersContainer extends Component {

    state = {
        open: false,
        order: null
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    render() {
        const { allOrders } = this.props.allOrders
        const { allProducts } = this.props.allProducts
        const { open, order } = this.state
        return(
            <div>
                { allOrders && 
                    <Nav>
                        <Orders allOrders={allOrders} changeState={this.handleChangeState} />
                        { open ? <Modal products={allProducts} order={order} changeState={this.handleChangeState} /> : <div></div> }
                    </Nav>
                }
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
const allProductsQuery = gql`
    query allProducts {
        allProducts {
            id,
            name
        }
    }
`

export default compose(
    graphql(allOrdersQuery, { name: 'allOrders'}),
    graphql(allProductsQuery, { name: 'allProducts' }),
)(OrdersContainer)