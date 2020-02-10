import React from 'react'

import MatchInfo from '../../components/matches/match-info/match-info.component'

import useReduxActiveMatch from '../../hooks/active-match.hook'

import './match.styles.scss'

export default function Match() {
    const { activeMatch } = useReduxActiveMatch()

    return [
        <h2>Get Ready to rumble!</h2>,
        <div className="match-info-wrap">
            <MatchInfo {...activeMatch} />
        </div>,
    ]
}
