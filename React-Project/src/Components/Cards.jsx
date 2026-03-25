import React from 'react'
import cardApi from '../Assets/Api'

const Cards = () => {
    const cardData = cardApi

    return (
        <>
            <div className='card-container'>

                {cardData.map((c) => (
                    <div className='card'>
                        <div className="class-banner">
                            <img src={c.imageUrl} alt={c.title} />
                        </div>

                        <div className="class-comtemt">
                            <h2>{c.title}</h2>
                            <p>{c.content}</p>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Cards
