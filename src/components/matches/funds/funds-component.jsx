import React from 'react'

import PayButton from '../../pay-button/pay-button.component'

import useReduxUser from '../../../hooks/user.hook'

export default function Funds(props) {
    const { currentUser } = useReduxUser()

    return (
        <>
            <p>
                You do not have enough funds. You currently have $
                {currentUser.accountBalance} Fill up your wallet now.
            </p>
            <PayButton {...props} />
        </>
    )
}
