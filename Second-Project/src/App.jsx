import React from 'react'

function App() {
    const [count, setCount] = React.useState(0) 

    const handleClick = () => {
        setCount(count + 1)
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
        <h1>Counter: {count}</h1>
        <button className='bg-red-500 rounded-2xl' onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App
