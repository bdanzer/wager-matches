import { useEffect, useState } from 'react'

export default function useModalView(defaultVal = []) {
    const [views, setViews] = useState(defaultVal)

    const setModalView = (view = false, clear = false) => {
        if (clear) setViews([])

        if (views.find(viewDest => viewDest === view)) return

        if (view) {
            views.push(view)
            setViews(views)
        } else {
            views.pop()
            setViews(views)
        }
    }

    return [views, setModalView]
}
