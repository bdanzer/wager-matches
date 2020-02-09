import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveMatch } from '../redux/active-match/active-match.actions'

/**
 * Returns Object
 *
 * @returns object
 */
export default function useReduxActiveMatch() {
    const dispatch = useDispatch()
    const activeMatch = useSelector(state => state.activeMatch.matchInfo)

    //curryDispatch
    const cD = () => dispatch

    const setMatch = matchInfo => cD()(setActiveMatch(matchInfo))

    return { activeMatch, setMatch }
}
