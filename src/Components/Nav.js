import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Dashboard from 'react-icons/lib/md/dashboard'
import Chart from 'react-icons/lib/fa/line-chart'
import List from 'react-icons/lib/md/list'
import Products from 'react-icons/lib/fa/cubes'
import Person from 'react-icons/lib/md/person'
import Logo from 'react-icons/lib/fa/google'

const Nav = () => (
    <Container>
        <Sidebar>

            <Item to='/'>
                <LogoIcon />
            </Item>

            <Item to='/'>
                <DashboardIcon />
                <Text>Home</Text>
            </Item>

            <Item to='/lol'>
                <ChartIcon />
                <Text>Data</Text>
            </Item>

            <Item to='/'>
                <ListIcon />
                <Text>Orders</Text>
            </Item>

            <Item to='/'>
                <ProductsIcon />
                <Text>Products</Text>
            </Item>

            <Item to='/'>
                <PersonIcon />
                <Text>Clients</Text>
            </Item>

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
    width: 100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Item = styled(Link)`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    transition: all 300ms ease-out;

    &:hover {
        color: #b907bc;
    }
`
const LogoIcon = styled(Logo)`
    font-size: 42px;
    display: block;
    margin: 10px auto 30px auto;
    color: #b907bc;
`
const DashboardIcon = styled(Dashboard)`
    font-size: 32px;
    display: block;
    margin: 0 auto 0 auto;
`
const ChartIcon = styled(Chart)`
    font-size: 32px;
    display: block;
    margin: 0 auto 0 auto;
`
const ListIcon = styled(List)`
    font-size: 32px;
    display: block;
    margin: 0 auto 0 auto;
`
const ProductsIcon = styled(Products)`
    font-size: 32px;
    display: block;
    margin: 0 auto 0 auto;
`
const PersonIcon = styled(Person)`
    font-size: 32px;
    display: block;
    margin: 0 auto 0 auto;
`
const Text = styled.p`
    text-align: center;
`
const Topbar = styled.div`
    width: 100%;
    height: 60px;
`
