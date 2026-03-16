import React from 'react'
import Reciever from './Reciever';

const Sender = () => {
    const name = "John Doe";
    const age = 30;

    return (
        <div>
            <Reciever na={name} ag={age} />
        </div>
        
    )
}

export default Sender
