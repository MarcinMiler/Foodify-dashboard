import React from 'react'
import styled from 'styled-components'

import LogOut from 'react-icons/lib/md/power-settings-new'

const TopBar = () => {
    return(
        <Container>
            <Text>Welcome, Marcin</Text>
            <UserPhoto style={{backgroundImage: 'url(https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg)'}} />
            <LogOutIcon />
        </Container>
    )
}

export default TopBar

const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Text = styled.p`
    font-size: 14px;
    color: black;
    margin-right: 10px;
`
const UserPhoto = styled.div`
    margin-right: 30px;
    width: 40px;
    height: 40px;
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