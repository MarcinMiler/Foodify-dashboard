import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = ({children}) => (
    <Container>
        <Sidebar>
            <Item to='/'style={{marginTop: '70px'}}>Home</Item>
            <Item to='/data'>Data</Item>
            <Item to='/'>Orders</Item>
            <Item to='/'>Clients</Item>
            <Item to='/'>Settings</Item>
        </Sidebar>
        
        <Topbar>
            
        </Topbar>
    </Container>
)

export default Nav

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`
const Sidebar = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Item = styled(Link)`
    margin-bottom: 40px;
    text-align: center;
    text-decoration: none;
    color: black;
`
const Topbar = styled.div`
    width: 100%;
    height: 60px;
`
