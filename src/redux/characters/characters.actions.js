import CharactersActionTypes from './characters.types';

export const fetchCharactersStart = () => ({
  type: CharactersActionTypes.FETCH_CHARACTERS_START
});

export const fetchCharactersSuccess = characters => ({
  type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS,
  payload: characters
});

export const fetchCharactersFailure = errorMessage => ({
  type: CharactersActionTypes.FETCH_CHARACTERS_FAILURE,
  payload: errorMessage
});


export const fetchCharactersStartAsync = () => {
  return dispatch => {
    dispatch(fetchCharactersStart());

    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch(fetchCharactersSuccess(data));
    })
    .catch(error => dispatch(fetchCharactersFailure(error.message)));
  };
};

