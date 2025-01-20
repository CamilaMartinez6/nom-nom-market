import Checkout from "./Checkout"
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import styles from "../styles/CheckoutContainer.module.css"

function CheckoutContainer() {

    const { cart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className={styles.msgAlertaContainer}>
                <p className={styles.msgAlerta}>Primero agrega productos al carrito</p>
            </div>
        )
    } else {
        return (
            <div className={styles.formContainer}>
                <Checkout />
            </div>
        )
    }

}

export default CheckoutContainer