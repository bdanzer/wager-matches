import React from 'react'

import MatchInfo from './match-info/match-info.component'
import Button from '../button/button.component'

import './matches.styles.scss'

export default function Matches({ matchDetails, handleMatchAccept }) {
    return matchDetails.length ? (
        matchDetails.map((matchDetail, i) => (
            <MatchInfo {...matchDetail}>
                <Button onClick={() => handleMatchAccept(matchDetail)}>
                    Accept
                </Button>
            </MatchInfo>
        ))
    ) : (
        <div class="no-results">
            <h2>No Results</h2>
        </div>
    )
}
