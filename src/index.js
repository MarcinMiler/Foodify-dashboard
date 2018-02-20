import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'

import HomeContainer from './Containers/HomeContainer'
import NavContainer from './Containers/NavContainer'
import DataContainer from './Containers/DataContainer'
import OrdersContainer from './Containers/OrdersContainer'
import ProductsContainer from './Containers/ProductsContainer'
import ClientsContainer from './Containers/ClientsContainer'

const store = createStore(rootReducer)

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Router>
                <div>
                    <NavContainer />

                    <Route exact path='/' component={HomeContainer} />
                    <Route exact path='/data' component={DataContainer} />
                    <Route exact path='/orders' component={OrdersContainer} />
                    <Route exact path='/products' component={ProductsContainer} />
                    <Route exact path='/clients' component={ClientsContainer} />

                </div>
            </Router>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root'))

registerServiceWorker()
