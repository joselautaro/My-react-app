import React from 'react'
import "./ItemListContainer.css";



const stock = [
    {
        id: 1,
        name: "producto 1",
        description: "lorem ipsum",
        price: 150,
        img: "https://via.placeholder.com/150",

    },
    {
        id: 1,
        name: "producto 2",
        description: "lorem ipsum",
        price: 200,
        img: "https://via.placeholder.com/150",

    },
    {
        id: 1,
        name: "producto 3",
        description: "lorem ipsum",
        price: 300,
        img: "https://via.placeholder.com/150",

    },
]


export const ItemListContainer = ({greeting}) => {
    return (
            <section>
                <h1>{greeting}</h1>
            </section>
    )
}
