import React from 'react'
import styled from 'styled-components'

import Plus from 'react-icons/lib/fa/plus'

const TopBar = () => {
    return(
        <div>
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
    background-color: #ec407a;
    cursor: pointer;
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