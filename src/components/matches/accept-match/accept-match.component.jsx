import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../button/button.component'

export default function AcceptMatch() {
    const currentUser = useSelector(state => state.user.currentUser)

    let matchDetail = JSON.parse(localStorage.getItem('accept-match'))
    return (
        <div>
            {currentUser ? (
                currentUser.name
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
                        ? window.confirm(
                              'You do not have sufficient balance, do you want to add funds?'
                          )
                        : console.log('Yay the user has enough balance')
                }
            >
                Accept Match
            </Button>
        </div>
    )
}
