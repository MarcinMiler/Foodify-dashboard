import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'

const Nav = () => (
    <Container>
        
        <Sidebar />

    </Container>
)

export default Nav

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`