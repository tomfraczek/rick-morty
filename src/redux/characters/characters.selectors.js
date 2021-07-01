import { createSelector } from 'reselect';

const selectCharacters = state => state.characters;

export const selectCharactersData = createSelector(
  [selectCharacters],
  characters => characters ? characters : []
)

export const selectIsCharactersFetching = createSelector(
  [selectCharacters],
  characters => characters.isFetching
);

