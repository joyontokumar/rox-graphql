const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const AlbumType = require('./album_type');
const ProductType = require('./product_type');
const SongType = require('./song_type')
const Song = mongoose.model('song');
const Album = mongoose.model('album');
const Product = mongoose.model('product');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    albums: {
      type: new GraphQLList(AlbumType),
      resolve() {
        return Album.find({});
      }
    },
    album: {
      type: AlbumType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Album.findById(id);
      }
    },
    song: {
      type: SongType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Song.findById(id);
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        return Product.find({})
      }
    },
    product: {
      type: ProductType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, {id}) {
        return Product.findById(id)
      }
    }
  })
});

module.exports = RootQuery;
