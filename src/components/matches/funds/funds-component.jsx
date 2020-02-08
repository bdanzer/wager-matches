import React from 'react'

import PayButton from '../../pay-button/pay-button.component'

export default function Funds(props) {
    return (
        <>
            <p>You do not have enough funds. Fill up your wallet now.</p>
            <PayButton {...props} />
        </>
    )
}
