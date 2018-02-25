import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Dashboard from 'react-icons/lib/fa/home'
import Chart from 'react-icons/lib/fa/line-chart'
import List from 'react-icons/lib/fa/book'
import Products from 'react-icons/lib/fa/cubes'
import Person from 'react-icons/lib/fa/group'
import Logo from 'react-icons/lib/fa/modx'
import Check from 'react-icons/lib/md/beenhere'
import Logout from 'react-icons/lib/fa/power-off'

const Sidebar = () => {
    return(
        <Container>

            <Item to='/'>
                <LogoIcon />
            </Item>

            <Item to='/'>
                <DashboardIcon />
            </Item>

            <Item to='/data'>
                <ChartIcon />
            </Item>

            <Item to='/orders'>
                <ListIcon />
            </Item>

            <Item to='/manageOrders'>
                <CheckIcon />
            </Item>

            <Item to='/products'>
                <ProductsIcon />
            </Item>

            <Item to='/clients'>
                <PersonIcon />
            </Item>

            <Item to='/login' onClick={() => localStorage.removeItem('token')}>
                <LogoutIcon />
            </Item>

        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    width: 100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 35px #c9c9c9;
`
const Item = styled(Link)`
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #D0D1D5;
    transition: all 300ms ease-out;

    &:hover {
        color: #5D94F5;
    }
`
const LogoIcon = styled(Logo)`
    font-size: 42px;
    display: block;
    margin: 40px auto 20px auto;
    color: #5D94F5;
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
const CheckIcon = styled(Check)`
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
const LogoutIcon = styled(Logout)`
    font-size: 32px;
    display: block;
    margin: 0 auto 0 auto;
`