import React from 'react'

import './match-info.styles.scss'

export default function MatchInfo(props) {
    const { children, platform, user, matchType, price } = props

    return (
        <div className="matched-result-box">
            <h2>{platform}</h2>
            <h2>{user}</h2>
            <h2>{matchType}</h2>
            <h2>Prize ${price}</h2>
            {children}
        </div>
    )
}
