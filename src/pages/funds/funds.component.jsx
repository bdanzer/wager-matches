import React, { useState } from 'react'

import { PayPalButton } from 'react-paypal-button-v2'
import Axios from 'axios'

export default function Funds() {
    const [amount, setAmount] = useState(0)

    return (
        <>
            <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={e => {
                    let roundedAmount =
                        Math.round(
                            (1 * e.target.value + Number.EPSILON) * 100
                        ) / 100
                    setAmount(roundedAmount)
                }}
                placeholder="5.00"
                value={amount ? amount : ''}
            />
            {amount ? (
                <PayPalButton
                    amount={amount}
                    onSuccess={async (details, data) => {
                        alert(
                            'Transaction completed by ' +
                                details.payer.name.given_name
                        )

                        console.log(data)
                        let payPalTrans = await Axios.post(
                            'http://localhost:4000/paypal-transaction-complete',
                            data,
                            {
                                headers: {
                                    Accept: 'application/json',
                                },
                            }
                        )

                        let transData = await payPalTrans.data

                        console.log('recieved data', transData)
                    }}
                />
            ) : (
                ''
            )}
        </>
    )
}
