import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../../redux/user/user.actions'
import { useHistory } from 'react-router-dom'

import Button from '../../button/button.component'

export default function AcceptMatch({ onInsufficientFunds }) {
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()

    let history = useHistory()
    let matchDetail = JSON.parse(localStorage.getItem('accept-match'))

    const handleSufficientFunds = () => {
        let confirmation = window.confirm('are you sure you want to accept?')

        if (confirmation)
            dispatch(
                setCurrentUser({
                    ...currentUser,
                    accountBalance:
                        currentUser.accountBalance - matchDetail.price / 2,
                })
            )

        history.push(`/match/${matchDetail.matchID}`)
    }

    const handleInsufficientFunds = () => {
        let confirmation = window.confirm(
            'You have insufficient funds, do you want to add funds?'
        )

        if (confirmation) {
            onInsufficientFunds()
        }
    }

    return (
        <div>
            {currentUser.name ? (
                <h2>{currentUser.name}</h2>
            ) : (
                <>
                    <label>Username for Game</label>
                    <input placeholder="Set Username" />
                </>
            )}

            <label>Price to enter ${matchDetail.price / 2}</label>
            <Button
                onClick={() =>
                    matchDetail.price / 2 > currentUser.accountBalance
                        ? handleInsufficientFunds()
                        : handleSufficientFunds()
                }
            >
                Accept Match
            </Button>
        </div>
    )
}
