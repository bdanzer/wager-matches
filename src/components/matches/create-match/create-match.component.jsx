import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../button/button.component'

import './create-match.styles.scss'

export default function CreateMatch() {
    const history = useHistory()

    // matchType: '1v1',
    // user: 'Wow',
    // platform: 'xbox',
    // gameID: 'cod',
    // price: 8,
    return (
        <div className="create-match-wrapper">
            <p>
                <label htmlFor="platform-selection">
                    Select or Change platform
                </label>
                <select
                    id="platform-selection"
                    onChange={e => history.push('/category/fortnite/xbox')}
                >
                    <option value="xbox">Xbox</option>
                    <option value="ps4">PS4</option>
                </select>
            </p>

            <p>
                <label htmlFor="game-selection">Select or Change game</label>
                <select id="game-selection">
                    <option value="fortnite">Fortnite</option>
                    <option value="cod">Call of Duty</option>
                </select>
            </p>

            <p>
                <label htmlFor="match-type-selection">Match Type</label>
                <select id="match-type-selection">
                    <option value="1v1">1v1</option>
                    <option value="2v2">2v2</option>
                </select>
            </p>

            <p>
                <label htmlFor="price-selection">Price</label>
                <select id="price-selection">
                    <option value="15">$15</option>
                    <option value="20">$20</option>
                </select>

                <label>5</label>
                <input type="radio" name="gender" value="5" />
            </p>
            <Button>Create Match</Button>
        </div>
    )
}
