import React from 'react'
import { useRouteMatch, useHistory, useParams } from 'react-router-dom'

import './category.styles.scss'

const supportedPlatforms = ['PC', 'PS4', 'XBOX', 'Switch', 'All']

export default function Category() {
    let history = useHistory()
    let { url } = useRouteMatch()
    let { categoryid } = useParams()

    const styles = {
        // backgroundImage: "url(https://m.media-amazon.com/images/M/MV5BMzc2MzEzNjc4OV5BMl5BanBnXkFtZTgwOTQ4MTI1NjM@._V1_UY1200_CR90,0,630,1200_AL_.jpg)",
        minHeight: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: 'lightblue',
    }

    return (
        <div className="ask-wrapper">
            <div className="background-image" style={styles}>
                {categoryid}
            </div>

            <h2>What Platform?</h2>
            <div className="platform-wrapper">
                {supportedPlatforms.map((platform, i) => (
                    <div
                        key={i}
                        className="platform-box"
                        onClick={() => history.push(`${url}/${platform}`)}
                    >
                        <div className="platform-info">{platform}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
