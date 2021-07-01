import { createSelector } from 'reselect';

const selectCharacters = state => state.characters;

export const selectPopularMovies = createSelector(
  [selectCharacters],
  characters => characters ? characters : []
)

