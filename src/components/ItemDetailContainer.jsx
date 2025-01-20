import { useState, useEffect } from "react"
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getItem } from '../firebase/db'
import styles from "../styles/ItemDetailContainer.module.css"

function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getItem(id, setItem)
    }, [id]);

    return (
        <div className={styles.containerDetail}>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer