import { ActiveMatchActionTypes } from './active-match.types'

const INITIAL_STATE = {
    matchInfo: false,
}

const activeMatchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActiveMatchActionTypes.SET_ACTIVE_MATCH:
            return {
                ...state,
                matchInfo: action.payload,
            }
        default:
            return state
    }
}

export default activeMatchReducer
