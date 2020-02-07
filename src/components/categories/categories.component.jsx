import React from 'react'
import { useHistory } from 'react-router-dom'

import useCategories from '../../hooks/categories.hook'

import './categories.styles.scss'

export function Categories() {
    let history = useHistory()
    let testCategories = useCategories()

    return (
        <>
            <h1>Categories</h1>
            <div className="category-wrap">
                {testCategories &&
                    testCategories.map(category => (
                        <div
                            onClick={() =>
                                history.push(`/category/${category.catID}`)
                            }
                            key={category.catID}
                            className={`category-box category-${category.name.toLowerCase()}`}
                        >
                            <div className="category-content-box">
                                <div
                                    style={{
                                        backgroundImage: `url(${category.imgUrl})`,
                                    }}
                                    className="image"
                                ></div>
                                <h2>{category.name}</h2>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}
