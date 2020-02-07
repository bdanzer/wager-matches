import React from 'react'

export default function Button(otherProps) {
    return (
        <button className="button" {...otherProps}>
            {otherProps.children}
        </button>
    )
}
