import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Clients from '../Components/Clients'
import Nav from '../Components/Nav'

class ClientsContainer extends Component {
    render() {
        const { users } = this.props.users
        return(
            <div>
                { users && 
                    <Nav>
                        <Clients users={users} />
                    </Nav>
                }
            </div>
        )
    }
}

const usersQuery = gql`
    query users {
        users {
            id,
            email,
            orders
        }
    }
`

export default compose(
    graphql(usersQuery, { name: 'users'})
)(ClientsContainer)