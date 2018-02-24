import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Scrollbars } from 'react-custom-scrollbars'
import styled from 'styled-components'
import { Container, Wrap, Title, List, ListWhite, P, Group, Input, Label } from '../Styled'

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
            <List key={product.id}>
                <P>{product.id.substring(0,8)}</P>
                <P>{product.name}</P>
                <P>{product.category}</P>
                <P>{product.price} $</P>
                <StyledClose onClick={() => deleteProduct(product.id)}/>
            </List>
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
                    <Wrap height='790px' noPadd>
                        <Title padd>All products</Title>

                        <ListWhite>
                            <P>ID</P>
                            <P>Name</P>
                            <P>Category</P>
                            <P>Price $</P>
                            <P>Delete</P>
                        </ListWhite>

                        <Scrollbars style={{height: '84.5%'}}>
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
const StyledClose = styled(Close)`
    color: black;
    width: 150px;
    font-size: 20px;
    cursor: pointer;
`