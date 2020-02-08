import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import Modal from '../../components/modal/modal.component'
import Button from '../../components/button/button.component'
import Matches from '../../components/matches/matches.component'
import UserAuth from '../../components/user-auth/user-auth.component'

import CreateMatch from '../../components/matches/create-match/create-match.component'
import AcceptMatch from '../../components/matches/accept-match/accept-match.component'
import Funds from '../../components/matches/funds/funds-component'

import useModalView from '../../hooks/modal-view.hook'

import './platform.styles.scss'

const matches = [
    {
        matchView: '1v1',
        user: 'Username',
        platform: 'ps4',
        gameID: 'fortnut',
        price: 5,
        matchID: '11239',
    },
    {
        matchView: '1v1',
        user: 'Wow',
        platform: 'xbox',
        gameID: 'cod',
        price: 8,
        matchID: '11238',
    },
    {
        matchView: '1v1',
        user: 'This is Me',
        platform: 'switch',
        gameID: 'fortnut',
        price: 9,
        matchID: '11237',
    },
    {
        matchView: '1v1',
        user: 'New Guy',
        platform: 'ps4',
        gameID: 'cod',
        price: 1,
        matchID: '11238',
    },
]

export default function Platform({ match }) {
    const currentUser = useSelector(state => state.user.currentUser)
    const [views, setModalView] = useModalView([])
    const [isModalOpen, setModal] = useState(false)
    const { platform, categoryid } = useParams()
    const history = useHistory()

    let matchDetails =
        platform !== 'All'
            ? matches.filter(match => match.platform === platform.toLowerCase())
            : matches
    matchDetails = matchDetails.filter(match => match.gameID === categoryid)

    const toggleModal = () => {
        let newModalVal = !isModalOpen

        setModal(newModalVal)

        //Clear the view
        if (newModalVal === false) {
            setModalView(false, true)
        }
    }

    const handleMatchAccept = data => {
        toggleModal()
        setModalView('accept')
        localStorage.setItem('accept-match', JSON.stringify(data))

        if (currentUser.accountBalance < data.price / 2) {
            setModalView('addFunds')
        }
    }

    const handleCreatingMatch = () => {
        toggleModal()
        setModalView('create')
    }

    const modalViewController = () => {
        if (!currentUser.name) {
            return <UserAuth />
        }

        switch (views[views.length - 1]) {
            case 'create':
                return <CreateMatch />
            case 'accept':
                return (
                    <AcceptMatch
                        onInsufficientFunds={() => setModalView('addFunds')}
                    />
                )
            case 'addFunds':
                return (
                    <Funds amount={5} onComplete={() => setModalView(false)} />
                )
            default:
                break
        }
    }

    return (
        <div className="platform-page">
            <h2>Welcome to category: {categoryid}</h2>
            <p>This is the {platform} description</p>

            <div className="matched-results-wrap">
                <Button
                    className="create-match-button"
                    onClick={handleCreatingMatch}
                >
                    Create Match
                </Button>

                <Modal isModalOpen={isModalOpen} toggle={toggleModal}>
                    {modalViewController()}
                </Modal>

                <Matches
                    matchDetails={matchDetails}
                    handleMatchAccept={handleMatchAccept}
                />
            </div>
        </div>
    )
}
