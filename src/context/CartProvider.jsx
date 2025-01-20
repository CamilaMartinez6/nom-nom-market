import { CartContext } from './cartContext'
import { useState } from 'react'

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (newItem) => {
        setCart(firstCart => {
            const checkItemExist = firstCart.find(item => item.id === newItem.id)
            if (checkItemExist) {
                return firstCart.map(item =>
                    item.id === newItem.id
                        ? { ...item, units: item.units + newItem.units }
                        : item
                )
            } else {
                return [...firstCart, { ...newItem }]
            }
        })
    }
    const getUnits = () => {
        const units = cart.map(item => item.units)
        const totalUnits = units.reduce((acc, current) => acc + current, 0)

        return totalUnits
    }

    const total = () => {
        const cantidades = cart.map(item => item.units * item.precio)
        const totalCompra = cantidades.reduce((acc, current) => acc + current, 0)

        return totalCompra
    }

    const deleteItem = (id) => {
        setCart(currentCart => {
            const newCart = currentCart.filter(item => item.id !== id);
    
            if (newCart.length === 0) {
                cart.lenght === 0
            }
    
            return newCart;
        });
    }
    
    const deleteCart = () =>{
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getUnits, total, deleteItem, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider