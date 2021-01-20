const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const Product = mongoose.model('product');

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString}
  })
});

module.exports = ProductType;
