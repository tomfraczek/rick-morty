import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
})

export const AppProviders = ({ children }) => 
<Provider store={store}>
    <ApolloProvider client={client}>
        <Router>
            <PersistGate persistor={persistor}>
                { children }
            </PersistGate>
        </Router>
    </ApolloProvider>
</Provider>;

