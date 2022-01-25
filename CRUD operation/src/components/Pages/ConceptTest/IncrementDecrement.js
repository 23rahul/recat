import React, { useState } from 'react'

const IncrementDecrement = () => {
    const [count, setCount] = useState(0)

    const dec = () => {
        if(count <= 0) {
          return;
        } else {
          setCount(count - 1);
        }
      }
    return (
        <div>
            <h1>INcrement Decrement</h1>
            <h2>Count : {count}</h2>
            <button onClick={dec}>Touch me </button>
            <button onClick={setCount(count + 1)}>  Touch me </button>
        </div>
    )
}

export default IncrementDecrement
