import CharactersActionTypes from './characters.types';

const INITIAL_STATE = {
  characters: null,
  isFetching: false,
  errorMessage: undefined,
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharactersActionTypes.FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true
      };
    case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload
      };
    case CharactersActionTypes.FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default charactersReducer;