import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Dashboard from 'react-icons/lib/fa/home'
import Chart from 'react-icons/lib/fa/line-chart'
import List from 'react-icons/lib/fa/book'
import Products from 'react-icons/lib/fa/cubes'
import Person from 'react-icons/lib/fa/group'
import Logo from 'react-icons/lib/fa/modx'


const Sidebar = () => {
    return(
        <Container>

            <Item to='/'>
                <LogoIcon />
            </Item>

            <Item to='/'>
                <DashboardIcon />
                <Text>Home</Text>
            </Item>

            <Item to='/data'>
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

        </Container>
    )
}

export default Sidebar

const Container = styled.div`
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
    color: gray;
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