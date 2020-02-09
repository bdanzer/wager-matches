import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import activeMatchReducer from './active-match/active-match.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
}

const rootReducer = combineReducers({
    user: userReducer,
    activeMatch: activeMatchReducer,
})

export default persistReducer(persistConfig, rootReducer)
