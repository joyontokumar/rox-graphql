import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import './style/style.css'

import AlbumList from './components/AlbumsList'
import AlbumCreate from './components/AlbumCreate'
import ProductCreate from './components/createProduct'
import AlbumDetail from './components/AlbumDetail'
import ProductDetails from './components/ProductDetails'

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
});

const client = new ApolloClient({
  link: createHttpLink({ uri: "/graphql" }),
  cache
});
const Root = () => {
  return (
      <ApolloProvider client={client}>
        <HashRouter >
            <Route exact path="/" component={AlbumList} />
            <Route exact path="/albums/new" component={AlbumCreate} />
            <Route exact path="/products/new" component={ProductCreate}/>
            <Route exact path="/product/:id" component={ProductDetails}/>
            <Route path="/albums/:id" component={AlbumDetail} />
        </HashRouter>
      </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
