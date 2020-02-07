import React from 'react'

import Button from '../button/button.component'

export default function Matches({ matchDetails, handleAccept }) {
    return matchDetails.length ? (
        matchDetails.map((matchDetail, i) => (
            <div key={i} className="matched-result-box">
                <h2>{matchDetail.platform}</h2>
                <h2>{matchDetail.user}</h2>
                <h2>{matchDetail.matchType}</h2>
                <h2>Prize ${matchDetail.price}</h2>
                <Button onClick={() => handleAccept(matchDetail)}>
                    Accept
                </Button>
            </div>
        ))
    ) : (
        <h2>No Results</h2>
    )
}
