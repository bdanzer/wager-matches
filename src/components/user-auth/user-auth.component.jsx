import React from 'react'

import Button from '../button/button.component'

export default function UserAuth() {
    return (
        <div>
            You Don't have access but log in here{' '}
            <Button onClick={() => console.log('clicked')}>
                Click to get auth
            </Button>
        </div>
    )
}
