import CartItems from "./CartItems";
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Button } from "react-bootstrap";
import styles from "../styles/Cart.module.css"

import { Link } from 'react-router'

function Cart() {
    const { cart, total } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className={styles.listaContainer}>
                <CartItems items={cart} />
                <div>
                    <span className={styles.totalCompra}>Total: ${total()}</span>
                    <Button variant="link" as={Link} to={`/checkout`} className={styles.btnComprar} disabled>Comprar</Button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.listaContainer}>
                <CartItems items={cart} />
                <div>
                    <span className={styles.totalCompra}>Total: ${total()}</span>
                    <Button variant="link" as={Link} to={`/checkout`} className={styles.btnComprar}>Comprar</Button>
                </div>
            </div>
        )
    }

}

export default Cart