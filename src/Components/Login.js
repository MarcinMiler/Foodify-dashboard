import React from 'react'
import styled from 'styled-components'
import { Group, Input, Label } from '../Styled'

const Login = ({
    changeState,
    login
}) => {
    return(
        <Container>

            <Group>
                <Input type="text" required key={1} onChange={e => changeState('email', e.target.value)} />
                <Label>Email</Label>
            </Group>

            <Group>
                <Input type="text" required key={2} onChange={e => changeState('password', e.target.value)}/>
                <Label>Password</Label>
            </Group>

            <Button onClick={() => login()}>Login</Button>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
`
const Button = styled.div`
    width: 100px;
    height: 40px;
    margin: 20px;
    background-color: lightblue;
`