import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

//graph
import ProductQuery from '../queries/fetchProduct'

class ProductDetails extends Component {
    render() {
        console.log(this.props);
        const { product } = this.props.data
        if(!product) {return null}

        return (
            <div>
                <Link to="/"> Back</Link>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        );
    }
}

export default graphql(ProductQuery, {
    options: (props) => { return { variables: { id: props.match.params.id }}}
})(ProductDetails);
