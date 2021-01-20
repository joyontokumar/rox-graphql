import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

//graph
import query from '../queries/fetchAlbumsList'

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.title)
        const {title, description, price} = this.state;
        const { history } = this.props;

        this.props.mutate({
            variables: { title, description, price },
            refetchQueries: [{ query }]
        }).then(() =>  history.push('/'))
    }
    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a new Product</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Prduct Title:</label>
                        <input
                            label="Product Title:"
                            onChange={e => this.setState({title: e.target.value})}
                            value={this.state.title}
                        />
                    <label>Product Description:</label>
                        <input
                            label="Product Description:"
                            onChange={e => this.setState({description: e.target.value})}
                            value={this.state.description}
                        />
                    <label>Product Price:</label>
                        <input
                            label="Product Description:"
                            onChange={e => this.setState({price: e.target.value})}
                            value={this.state.price}
                        />
                        <button>submit</button>
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddProduct($title: String, $description: String, $price: String){
        addProduct(title: $title, description: $description, price: $price) {
            id,
            title,
            description,
            price
        }
    }
`;
export default graphql(mutation)(CreateProduct);
