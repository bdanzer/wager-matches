import { ActiveMatchActionTypes } from './active-match.types'

export const setActiveMatch = activeMatch => ({
    type: ActiveMatchActionTypes.SET_ACTIVE_MATCH,
    payload: activeMatch,
})
