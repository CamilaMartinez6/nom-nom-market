import { useState, useEffect } from "react"
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import styles from "../styles/ItemDetailContainer.module.css"

function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("/data/data.json")
            const data = await response.json()

            const obtenerItem = data.categorias
                .flatMap((categoria) => categoria.productos)
                .find((producto) => producto.id === parseInt(id))
            setItem(obtenerItem)
        }
        fetchData()
    }, [id]);

    return (
        <div className={styles.containerDetail}>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer