import React from 'react'
import styled from 'styled-components'

import LogOut from 'react-icons/lib/md/power-settings-new'

const TopBar = () => {
    return(
        <Container>
            <Text>Marcin Miler</Text>
            <UserPhoto style={{backgroundImage: 'url(https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg)'}} />
        </Container>
    )
}

export default TopBar

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: white;
    border-radius: 7px;
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
const LogOutIcon = styled(LogOut)`
    margin-right: 30px;
    color: black;
    font-size: 32px;
`