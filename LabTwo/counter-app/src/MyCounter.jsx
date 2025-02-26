import { useState } from 'react'
import CounterDisplay from './CounterDisplay.jsx';
function MyCounter() {
    const [counter, setCount] = useState(0)
    return (
        <>
            <CounterDisplay counter={counter} />
            <button className='w-25' onClick={() => setCount((counter) => counter + 1)}>
                Add one
            </button>
            <button className='w-25' onClick={() => setCount((counter) => counter - 1)}>
                Deduct one
            </button>
        </>
    )
}
export default MyCounter