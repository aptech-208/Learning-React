import React, { use, useEffect } from 'react'

const UseEffect = () => {

    const [count, setCount] = React.useState(0)
    const [togggle, setToggle] = React.useState(false) //Initial value can be any data type (string, number, boolean, array, object)

    const handleCounter = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handleToggler = () => {
        setToggle(!togggle) // This will toggle the boolean value of togggle (true to false or false to true = !toggle)
        console.log(togggle)
    }

    useEffect(() => {
        console.log('useEffect is running') // This will run every time the component renders (initial render and every update) This Code Wont Trigger cus of other stuff
    }, [count]) // This will run the effect whenever count changes

    return (
        <>
            <button onClick={handleCounter}>Increment</button>
            <button onClick={handleToggler}>Toggle</button>
        </>
    )
}

export default UseEffect
