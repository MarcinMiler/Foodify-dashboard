import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'

import Routes from './routes'

const store = createStore(rootReducer)

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Routes />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
)

registerServiceWorker()
