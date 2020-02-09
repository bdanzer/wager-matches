import React from 'react'

import MatchInfo from './match-info/match-info.component'
import Button from '../button/button.component'

import './matches.styles.scss'

export default function Matches({ matchDetails, onMatchAccept }) {
    return matchDetails.length ? (
        matchDetails.map((matchDetail, i) => (
            <MatchInfo key={i} {...matchDetail}>
                <Button onClick={() => onMatchAccept(matchDetail)}>
                    Accept
                </Button>
            </MatchInfo>
        ))
    ) : (
        <div className="no-results">
            <h2>No Results</h2>
        </div>
    )
}
