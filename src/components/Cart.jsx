import CartItems from "./CartItems";
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import styles from "../styles/Cart.module.css"

function Cart() {
    const { cart, total } = useContext(CartContext)

    return (
        <div className={styles.listaContainer}>
            <CartItems items={cart} />
            <div>
                <span className={styles.totalCompra}>Total: ${total()}</span>
                <button className={styles.btnComprar}>Comprar</button>
            </div>
        </div>
    )
}

export default Cart