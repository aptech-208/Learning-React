import React from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0)
    const Increament = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1 className='text-2xl font-bold'>Counter</h1>
            <p className='Count-para'>This Is My Count {count} </p>
            <br />
            <button className='btn-counter' onClick={Increament}>Press</button>
        </>
    )
}

export default Counter
