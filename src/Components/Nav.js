import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import Topbar from './Topbar'

const Nav = () => (
    <Container>
        
        <Sidebar />
        <Topbar />

    </Container>
)

export default Nav

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`