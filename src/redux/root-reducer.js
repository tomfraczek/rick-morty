import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import charactersReducer from './characters/characters.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['characters']
}

const rootReducer = combineReducers({
    characters: charactersReducer,
}) 

export default persistReducer(persistConfig, rootReducer);