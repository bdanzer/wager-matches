import { UserActionTypes } from './user.types'

export const setCurrentUser = userObj => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: userObj,
})

export const setCurrentUsername = name => ({
    type: UserActionTypes.SET_CURRENT_USERNAME,
    payload: name,
})

export const setCurrentUserBalance = balance => ({
    type: UserActionTypes.SET_CURRENT_USER_BALANCE,
    payload: balance,
})
