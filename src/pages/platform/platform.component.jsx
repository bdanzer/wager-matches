import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import Modal from '../../components/modal/modal.component'
import Button from '../../components/button/button.component'
import Matches from '../../components/matches/matches.component'
import UserAuth from '../../components/user-auth/user-auth.component'

import CreateMatch from '../../components/matches/create-match/create-match.component'
import AcceptMatch from '../../components/matches/accept-match/accept-match.component'

import './platform.styles.scss'

const matches = [
    {
        matchType: '1v1',
        user: 'Username',
        platform: 'ps4',
        gameID: 'fortnut',
        price: 5,
    },
    {
        matchType: '1v1',
        user: 'Wow',
        platform: 'xbox',
        gameID: 'cod',
        price: 8,
    },
    {
        matchType: '1v1',
        user: 'This is Me',
        platform: 'switch',
        gameID: 'fortnut',
        price: 9,
    },
    {
        matchType: '1v1',
        user: 'New Guy',
        platform: 'ps4',
        gameID: 'cod',
        price: 1,
    },
]

export default function Platform({ match }) {
    const currentUser = useSelector(state => state.user.currentUser)

    const [isModalOpen, setModal] = useState(false)
    const [type, setType] = useState()

    const { platform, categoryid } = useParams()
    const history = useHistory()

    let matchDetails =
        platform !== 'All'
            ? matches.filter(match => match.platform === platform.toLowerCase())
            : matches
    matchDetails = matchDetails.filter(match => match.gameID === categoryid)

    const handleClose = (type = null) => {
        if (type) setType(type)
        setModal(!isModalOpen)
    }

    const handleAccept = data => {
        handleClose('accept')
        localStorage.setItem('accept-match', JSON.stringify(data))
    }

    const modalContentsController = () => {
        if (!currentUser) {
            return <UserAuth />
        }

        switch (type) {
            case 'create':
                return <CreateMatch />
            case 'accept':
                return <AcceptMatch />
            default:
                break
        }
    }

    return (
        <div className="platform-page">
            <h2>Welcome to category: {categoryid}</h2>
            <p>This is the {platform} description</p>
            <div className="matched-results-wrap">
                <Button onClick={() => handleClose('create')}>
                    Create Match
                </Button>

                {isModalOpen && (
                    <Modal toggle={handleClose}>
                        {modalContentsController()}
                    </Modal>
                )}

                <Matches
                    matchDetails={matchDetails}
                    handleAccept={handleAccept}
                />
            </div>
        </div>
    )
}
