import React from 'react'
import Axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'

import useReduxUser from '../../hooks/user.hook'

export default function PayButton({ amount, onComplete }) {
    const { currentUser, setUserBalance } = useReduxUser()

    const onSuccess = async (details, data) => {
        alert('Transaction completed by ' + details.payer.name.given_name)

        let payPalTrans = await Axios.post(
            'http://localhost:4000/paypal-transaction-complete',
            data,
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        )

        //await payPalTrans.data

        onComplete(data)
        setUserBalance(5 + currentUser.accountBalance)
    }

    return amount ? (
        <PayPalButton
            style={{
                layout: 'horizontal',
            }}
            amount={amount}
            onSuccess={onSuccess}
        />
    ) : null
}
