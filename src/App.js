import React, { useEffect } from 'react';

import { AppRoutes } from './routing/app-routes';

import { fetchCharactersStartAsync } from './redux/characters/characters.actions';
import { connect } from 'react-redux';

export const App = ({fetchCharactersStartAsync}) => {

  useEffect(() => {
    fetchCharactersStartAsync()
  }, [fetchCharactersStartAsync])

  return <AppRoutes />;
};

const mapDispatchToProps = dispatch => ({
  fetchCharactersStartAsync: characters => dispatch(fetchCharactersStartAsync(characters))
});

export default connect(null, mapDispatchToProps)(App);
