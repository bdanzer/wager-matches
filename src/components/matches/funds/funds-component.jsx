import React from 'react'

import PayButton from '../../pay-button/pay-button.component'

import useReduxUser from '../../../hooks/user.hook'

export default function Funds(props) {
    const { currentUser } = useReduxUser()
    const matchInfo = JSON.parse(localStorage.getItem('accept-match'))
    console.log(matchInfo)

    return (
        <>
            <p>
                {`You do not have enough funds. You currently have $${
                    currentUser.accountBalance
                } and the match requires 
                $${matchInfo.price / 2}. Fill up your wallet now.`}
            </p>
            <PayButton {...props} />
        </>
    )
}
