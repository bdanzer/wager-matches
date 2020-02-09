import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setCurrentUserBalance,
    setCurrentUsername,
    setCurrentUser,
} from '../redux/user/user.actions'

/**
 * Returns user Object
 *
 * @returns object
 */
export default function useReduxUser() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)

    //curryDispatch
    const cD = () => dispatch

    const setUser = userObj => cD()(setCurrentUser(userObj))
    const setUsername = name => cD()(setCurrentUsername(name))
    const setUserBalance = balance => cD()(setCurrentUserBalance(balance))

    return { currentUser, setUser, setUsername, setUserBalance }
}
