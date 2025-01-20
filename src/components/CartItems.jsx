import CartItem from "./CartItem";
import styles from "../styles/CartItems.module.css"
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartItems() {
    const { cart, deleteCart } = useContext(CartContext)
    return (
        <div>
            {cart.length > 0 ? (
                <div className={styles.listaItems}>
                    {cart.map(item => (
                        <CartItem item={item} key={item.id} />
                    ))}
                    <button className={styles.btnVaciar} onClick={deleteCart}>Vaciar Carrito</button>
                </div>
            ) : (
                <p className={styles.msgCarritoVacio}>No hay productos en el carrito.</p>
            )}
        </div>
    )
}


export default CartItems