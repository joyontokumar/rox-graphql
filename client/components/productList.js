import React, {Component} from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'

//graph
import query from '../queries/fetchProductList'
import { description } from '../../server/schema/mutations'

class ProductList extends Component {

    rederProducts() {
        const {products} = this.props.data;
        return products.map(({id, title, description, price}) => (
            <li key={id} className="collection-item">
                <Link to={`/product/${id}`}>
                    {title} <br/>
                    {description} <br/>
                    {price}
                </Link>
                <i className="material-icons">delete</i>
            </li>
        ));
    }
    render() {
        const {loading} = this.props.data;
        if(loading) { return <div>Loading....</div> }
        return (
        <div>
            <h3 className="headline">Product Store</h3>
            <ul className="collection">
                {this.rederProducts()}
            </ul>
            <Link to="/products/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
        </div>
        )
    }
}
export default compose(
    graphql(query))(ProductList);
