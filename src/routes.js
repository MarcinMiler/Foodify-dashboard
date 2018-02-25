import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import decode from 'jwt-decode'

import LoginContainer from './Containers/LoginContainer'
import HomeContainer from './Containers/HomeContainer'
import DataContainer from './Containers/DataContainer'
import OrdersContainer from './Containers/OrdersContainer'
import ManageOrdersContainer from './Containers/ManageOrdersContainer'
import ProductsContainer from './Containers/ProductsContainer'
import ClientsContainer from './Containers/ClientsContainer'

const isAuthenticated = () => {
    const token = localStorage.getItem('token')
    try {
      decode(token)
    } catch (err) {
      return false
    }
    return true
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        (isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        ))}
    />
)

const Routes = () => (
    <Router>
        <div>
            <Route exact path='/login' component={LoginContainer} />
            <PrivateRoute exact path='/' component={HomeContainer} />
            <PrivateRoute exact path='/data' component={DataContainer} />
            <PrivateRoute exact path='/orders' component={OrdersContainer} />
            <PrivateRoute exact path='/manageOrders' component={ManageOrdersContainer} />
            <PrivateRoute exact path='/products' component={ProductsContainer} />
            <PrivateRoute exact path='/clients' component={ClientsContainer} />
        </div>
    </Router>
)

export default Routes