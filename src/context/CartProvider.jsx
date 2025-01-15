import { CartContext } from './cartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => setCart ([...cart, item])

    const getUnits = () => {
        const units = cart.map(item => item.units)
        const totalUnits = units.reduce((acc, current) => acc + current, 0) 

        return totalUnits
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, getUnits }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider