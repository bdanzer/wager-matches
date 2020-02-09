import React, { useState } from 'react'

import PayButton from '../../components/pay-button/pay-button.component'

import './payment.styles.scss'

export default function Payment(props) {
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
            <PayButton {...props} amount={amount} />
        </>
    )
}
