import { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import styles from "../styles/ItemCount.module.css"

function ItemCount({ item }) {
    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    const { addToCart } = useContext(CartContext)
    
    const handleAddToCart = () => {
        addToCart({...item, units: count})
    }

    return (
        <div className={styles.buttonsDetailContainer}>
            <div className={styles.contadorContainer}>
                <button className={styles.btnUnidades} onClick={sumar}>+</button>
                <span className={styles.unidadesCount}>{count}</span>
                <button className={styles.btnUnidades} onClick={restar} disabled={count < 1}>-</button>
            </div>
            <button onClick={handleAddToCart} className={styles.btnAñadirCarrito} disabled={count < 1}>Añadir al Carrito</button>
        </div>
    )
}

export default ItemCount