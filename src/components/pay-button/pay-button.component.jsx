import React, { useState } from 'react'
import Axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../redux/user/user.actions'

export default function PayButton({ amount, onComplete }) {
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()

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
        dispatch(
            setCurrentUser({
                ...currentUser,
                accountBalance: 5 + currentUser.accountBalance,
            })
        )
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
