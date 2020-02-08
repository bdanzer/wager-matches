import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

import './modal.styles.scss'

let modalRoot = document.getElementById('modal-root')

if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.id = 'modal-root'
    document.querySelector('body').appendChild(modalRoot)
}

export default function Modal({ children, toggle, isModalOpen }) {
    let el = document.createElement('div')

    useEffect(() => {
        modalRoot.appendChild(el)

        return () => {
            modalRoot.removeChild(el)
        }
    }, [])

    return createPortal(
        isModalOpen ? (
            <>
                <div id="backdrop" onClick={toggle}></div>
                <div className="modal-content">{children}</div>
                <div className="close-button" onClick={toggle}>
                    x
                </div>
            </>
        ) : (
            ''
        ),
        modalRoot
    )
}
