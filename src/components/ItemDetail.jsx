import ItemCount from './ItemCount'
import styles from "../styles/ItemDetail.module.css"

function ItemDetail({ item }) {

    return (
        <div className={styles.detail}>
            <img src={item?.img} alt={item?.nombre} className={styles.itemImg} />
            <div className={styles.bodyDetail}>
                <div>
                    <h3 className={styles.itemNombre}>{item?.nombre}</h3>
                    <p className={styles.itemDescripcion}>{item?.descripcion}</p>
                </div>
                <div className={styles.precioContainer}>
                    <h4 className={styles.precio}>${item?.precio}</h4>
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail