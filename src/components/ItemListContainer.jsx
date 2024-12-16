import styles from "../styles/ItemListContainer.module.css"

function ItemListContainer(props) {
    return (
        <div className={styles.mensajeContainer}>
            <h1 className={styles.mensaje}>{props.aviso}</h1>
        </div>
    )
}

export default ItemListContainer