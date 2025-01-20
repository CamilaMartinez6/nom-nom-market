import { useContext } from 'react'
import { CartContext } from "../context/cartContext"
import styles from "../styles/CartItem.module.css"

function CartItem({ item }) {
    const { deleteItem } = useContext(CartContext)

    return (
        <div className={styles.item}>
            <img className={styles.itemImg} src={item.img} /> {item.nombre} x {item.units} 
            <button className={styles.btnBorrarItem} onClick={() => deleteItem(item.id)}>X</button>
            </div>
    )
}

export default CartItem