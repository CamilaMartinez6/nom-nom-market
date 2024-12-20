import { useState } from 'react'

function ItemCount() {
    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }
    
    return (
        <div>
            <button onClick={sumar}>+</button>
            <span>0</span>
            <button onclick={restar} disabled={count < 1}></button>
        </div>
    )
}

export default ItemCount