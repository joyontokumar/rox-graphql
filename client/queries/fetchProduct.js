import gql from 'graphql-tag'

export default gql`
    query ProductQuery($id: ID!) {
        product(id: $id) {
            id,
            title,
            description,
            price
        }
    }
`;