import gql from 'graphql-tag'

export default gql`
    {
        products {
            id
            title
            description
            price
        }
    }
`;