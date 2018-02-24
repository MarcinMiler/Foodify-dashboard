import React from 'react'
import styled from 'styled-components'

import Plus from 'react-icons/lib/fa/plus'
import Navbar from './Nav'

const TopBar = () => {
    return(
        <div>
            <Navbar />
            <Container>
                <Wrap>
                    <Cirlce>
                        <PlusIcon />
                    </Cirlce>

                    <P>Help</P>
                    <P>Contact</P>
                </Wrap>

                <User>
                    <Text>Marcin Miler</Text>
                    <UserPhoto style={{backgroundImage: 'url(https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg)'}} />
                </User>
            </Container>
        </div>
    )
}

export default TopBar

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin: 20px;
    background-color: white;
    border-radius: 7px;
    box-shadow: 0px 0px 35px #c9c9c9;
`
const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Cirlce = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px 0 20px;
    background: linear-gradient(#69BCFF, #3392F7);
    cursor: pointer;
    box-shadow: 0px 0px 15px #c9c9c9;
`
const P = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-left: 20px;
    cursor: pointer;
`
const User = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: black;
    margin-right: 20px;
`
const UserPhoto = styled.div`
    margin-right: 35px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
const PlusIcon = styled(Plus)`
    color: white;
    font-size: 16px;
`