import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

import Close from 'react-icons/lib/md/close'
import DropZone from 'react-dropzone'
import TopBar from '../Components/Topbar'

const Products = ({
    state,
    allProducts,
    addProduct,
    deleteProduct,
    changeState
}) => {
    const listOfProducts = allProducts.map(product => {
        return(
            <Product key={product.id}>
                <P>{product.id.substring(0,8)}</P>
                <P>{product.name}</P>
                <P>{product.category}</P>
                <P>{product.price} $</P>
                <StyledClose onClick={() => deleteProduct(product.id)}/>
            </Product>
        )
    })
    return(
        <Container>
            <Row>
                <Col md={12}>
                    <TopBar />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Wrap style={{padding: 0}}>
                        <Product style={{backgroundColor: 'white', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                            <P>ID</P>
                            <P>Name</P>
                            <P>Category</P>
                            <P>Price $</P>
                        </Product>

                        <Scrollbars style={{height: '87%'}}>
                            {listOfProducts}
                        </Scrollbars>
                    </Wrap>
                </Col>

                <Col md={6}>
                    <Wrap>
                        <Title>Add product</Title>

                        <Flex>
                            <Left>
                                <Group>
                                    <Input type="text" required key={1} onChange={e => changeState('name', e.target.value)}/>
                                    <Label>Name</Label>
                                </Group>

                                <Group>
                                    <Input type="text" required key={1} onChange={e => changeState('category', e.target.value)}/>
                                    <Label>Category</Label>
                                </Group>

                                <Group>
                                    <Input type="text" required key={1} onChange={e => changeState('price', e.target.value)}/>
                                    <Label>Price</Label>
                                </Group>

                                <Button onClick={() => addProduct()}>Add product</Button>
                            </Left>

                            <Right>
                                <StyledDropZone onDrop={file => changeState('file', file[0])}>
                                    { state.file ? <img width='250px' height='250px' alt='preview' src={state.file.preview} /> : <div></div>}
                                </StyledDropZone>
                            </Right>
                        </Flex>
                    </Wrap>
                </Col>
            </Row>
        </Container>
    )
}

export default Products

const Container = styled(Grid)`
    width: 100%;
    height: 100vh;
    background-color: #f7f7f7;
`
const Wrap = styled.div`
    background-color: white;
    height: 500px;
    margin: 20px;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0px 0px 35px #c9c9c9;
`
const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 10px 0;
    color: black;
`
const Group = styled.div`
    position: relative;
`
const Label = styled.label`
    position: absolute;
    top: 5px;
    font-size: 14px;
    color: gray;
    transition: all 150ms ease-in;
    pointer-events: none;
`
const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid lightgray;
    font-size: 12px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    padding: 10px 0 5px 0;
    transition: all 300ms ease-out;
    margin: 30px 0 0 0;
    z-index: 200;
    display: block;
    &:focus {
        outline: none;
        border-bottom: 1px solid #5D94F5;
        color: #5D94F5;
    }
    &:focus + label, &:valid + label{
        position: absolute;
        top: -10px;
        font-size: 12px;
        color: #5D94F5;
    }
    
`
const Flex = styled.div`
    display: flex;
    flex-direction: row;
`
const Left = styled.div`
    width: 50%;
    margin: 0 20px 0 0;
`
const Button = styled.div`
    width: 150px;
    height: 40px;
    margin-top: 30px;
    border-radius: 4px;
    background-color: #5D94F5;
    color: white;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
`
const Right = styled.div`
    width: 50%;
    margin: 0 20px 0 0;
    display: flex;
    justify-content: center;
`
const StyledDropZone = styled(DropZone)`
    width: 250px;
    height: 250px;
    border: 1px dashed black;
`
const Product = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 1px solid lightgray;
    position: relative;

    &:nth-child(2n -1) {
        background-color: #F0F1F8;
    }
`
const P = styled.p`
    font-size: 14px;
    width: 150px;
    text-align: center;
`
const StyledClose = styled(Close)`
    color: black;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 23px;
`