import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

// const authLink = setContext(async (_, { headers }) => {
//   let token = await AsyncStorage.getItem('token')
//     return {
//       headers: {
//         ...headers,
//         'x-token': token
//       }
//     }
// })

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/subscriptions`,
    options: {
      reconnect: true
    }
})

const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    }, 
    wsLink,
    httpLink,
)

export const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    link,
    cache: new InMemoryCache(),
})