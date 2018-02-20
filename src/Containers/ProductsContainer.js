import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Products from '../Components/Products'

class ProductsContainer extends Component {

    state = {
        name: '',
        price: '',
        category: '',
        url: '',
        image: '',
        file: null
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    addProduct = () => {
        const { name, price, category, file } = this.state
        this.props.addProduct({
            variables: {
                name,
                price,
                category,
                url: file.name
            },
            update: (store, { data: { addProduct }}) => {
                let data = store.readQuery({query: allProductsQuery})
                data.allProducts.push(addProduct)
                store.writeQuery({query: allProductsQuery, data})
            }
        })
        let formData = new FormData()
        formData.append('file', this.state.file)

        fetch('http://localhost:4000/upload', {
            method: 'POST',
            body: formData
        })
    }

    deleteProduct = id => {
        this.props.deleteProduct({
            variables: { id },
            update: (store, { data: { deleteProduct }}) => {
                let data = store.readQuery({query: allProductsQuery})
                let data2 = data.allProducts.filter(product => product.id !== deleteProduct)
                data.allProducts = data2
                store.writeQuery({query: allProductsQuery, data})
            }
        })
    }

    render() {
        const { allProducts } = this.props.allProducts
        console.log(this.props)
        return(
            <div>
                { allProducts && 
                    <Products 
                        state={this.state}
                        allProducts={allProducts}
                        changeState={this.handleChangeState}
                        addProduct={this.addProduct}
                        deleteProduct={this.deleteProduct} />}
            </div>
        )
    }
}

const allProductsQuery = gql`
    query allProducts {
        allProducts {
            id,
            name,
            price,
            category
        }
    }
`
const addProductMutation = gql`
    mutation addProduct($name: String! $price: Float! $category: String! $url: String!) {
        addProduct(name: $name price: $price category: $category url: $url) {
            id,
            name,
            price,
            category,
        }
    }
`
const deleteProductMutation = gql`
    mutation deleteProduct($id: ID!) {
        deleteProduct(id: $id)
    }
`

export default compose(
    graphql(allProductsQuery, { name: 'allProducts' }),
    graphql(addProductMutation, { name: 'addProduct' }),
    graphql(deleteProductMutation, { name: 'deleteProduct' })
)(ProductsContainer)