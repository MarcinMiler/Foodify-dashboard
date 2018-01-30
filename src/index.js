import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'

import HomeContainer from './Containers/HomeContainer'

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>

            <div>
                <Route exact path='/' component={HomeContainer} />
            </div>

        </Router>
    </ApolloProvider>,
    document.getElementById('root'))

registerServiceWorker()
