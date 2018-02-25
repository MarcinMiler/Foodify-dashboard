import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'

const Nav = ({
    children
}) => (
    <Container>
        
        <Sidebar />

        <Main>
            { children }
        </Main>

    </Container>
)

export default Nav

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`
const Main = styled.div`
    width: calc(100% - 100px);
    height: 100vh;
`