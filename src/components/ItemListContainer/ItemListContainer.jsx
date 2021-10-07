import React from 'react'
import "./ItemListContainer.css";

export const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <section>
                <h1>{greeting}</h1>
            </section>
        </div>
    )
}
