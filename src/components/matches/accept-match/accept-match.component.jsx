import React from 'react'
import { useHistory } from 'react-router-dom'

import useReduxUser from '../../../hooks/user.hook'
import useReduxActiveMatch from '../../../hooks/active-match.hook'

import Button from '../../button/button.component'

export default function AcceptMatch({ onInsufficientFunds }) {
    const history = useHistory()
    const matchDetail = JSON.parse(localStorage.getItem('accept-match'))
    const { currentUser, setUserBalance } = useReduxUser()
    const { setMatch } = useReduxActiveMatch()

    const handleSufficientFunds = () => {
        let confirmation = window.confirm('are you sure you want to accept?')

        if (confirmation)
            setUserBalance(currentUser.accountBalance - matchDetail.price / 2)

        history.push(`/match/${matchDetail.matchID}`)
        setMatch(matchDetail)
    }

    const handleInsufficientFunds = () => {
        let confirmation = window.confirm(
            'You have insufficient funds, do you want to add funds?'
        )

        if (confirmation) {
            onInsufficientFunds()
        }
    }

    const handleAccept = () => {
        matchDetail.price / 2 > currentUser.accountBalance
            ? handleInsufficientFunds()
            : handleSufficientFunds()
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

            <p>Price to enter ${matchDetail.price / 2}</p>
            <Button onClick={handleAccept}>Accept Match</Button>
        </div>
    )
}
