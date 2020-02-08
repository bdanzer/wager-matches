import React from 'react'

import './button.styles.scss'

export default function Button(otherProps) {
    return (
        <button className="button" {...otherProps}>
            {otherProps.children}
        </button>
    )
}
