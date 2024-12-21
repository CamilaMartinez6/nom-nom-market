import { useState } from 'react'
import styles from "../styles/ItemCount.module.css"

function ItemCount() {
    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    return (
        <div className={styles.buttonsDetailContainer}>
            <div className={styles.contadorContainer}>
                <button className={styles.btnUnidades} onClick={sumar}>+</button>
                <span className={styles.unidadesCount}>{count}</span>
                <button className={styles.btnUnidades} onClick={restar} disabled={count < 1}>-</button>
            </div>
            <button className={styles.btnAñadirCarrito}>Añadir al Carrito</button>
        </div>
    )
}

export default ItemCount