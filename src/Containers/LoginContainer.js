import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Login from '../Components/Login'

class LoginContainer extends Component {

    state = {
        email: '',
        password: '',
        error: {}
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    login = async () => {
        console.log('login')
        const { email, password } = this.state
        const valid = this.validateLogin(email, password)

        if(valid.ok) {
            const loginResponse = await this.props.login({
                variables: {
                    email,
                    password
                }
            })
            if(loginResponse.data.login.ok) {
                const { token } = loginResponse.data.login
                localStorage.setItem('token', token)
                this.props.history.push('/')
            }
            else this.setState({ error: { error: true, message: [loginResponse.data.login.error.message]} })
        }
    }

    validateLogin = (email, password) => {
        let messages = []

        if(!email) messages = [...messages, 'Email is empty']

        else {
            let re = /\S+@\S+\.\S+/
            let emailTest = re.test(email)

            if(!emailTest) messages = [...messages, 'Email is incorrect']
        }

        if(!password) messages = [...messages, 'Password is empty']

        if(messages.length > 0) {
            this.setState({ error: { error: true, messages } })
            return { ok: false, messages }
        }
        else return { ok: true }
    }

    render() {
        return <Login changeState={this.handleChangeState} login={this.login} />
    }
}

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
          ok,
          token,
          error {
              message
          }
      }
  }
`

export default compose(
    graphql(loginMutation, { name: 'login' })
)(LoginContainer)