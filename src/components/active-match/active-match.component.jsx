import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../button/button.component'

import useReduxActiveMatch from '../../hooks/active-match.hook'

export default function ActiveMatch() {
    const { activeMatch } = useReduxActiveMatch()
    const history = useHistory()

    return activeMatch ? (
        <Button onClick={() => history.push(`/match/${activeMatch.matchID}`)}>
            See Active Match
        </Button>
    ) : (
        <Button>No Active Matches</Button>
    )
}
