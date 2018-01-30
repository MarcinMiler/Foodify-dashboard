import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'

const httpLink = new HttpLink({ uri: 'http://192.168.0.103:4000/graphql' })

// const authLink = setContext(async (_, { headers }) => {
//   let token = await AsyncStorage.getItem('token')
//     return {
//       headers: {
//         ...headers,
//         'x-token': token
//       }
//     }
// })

export const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    link: httpLink,
    cache: new InMemoryCache(),
})