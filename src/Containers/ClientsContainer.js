import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Clients from '../Components/Clients'

class ClientsContainer extends Component {
    render() {
        const { users } = this.props.users
        console.log(users)
        return(
            <div>
                { users && <Clients users={users} />}
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