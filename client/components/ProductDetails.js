import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

//graph
import ProductQuery from '../queries/fetchProduct'

class ProductDetails extends Component {
    render() {
        console.log(this.props);
        const { products } = this.props.data
        if(!products) {return null}

        return (
            <div>
                <Link to="/"> Back</Link>
                <h4>{products.title}</h4>
                <p>{products.description}</p>
                <p>{products.price}</p>
            </div>
        );
    }
}

export default graphql(ProductQuery, {
    options: (props) => { return { variables: { id: props.match.params.id }}}
})(ProductDetails);
