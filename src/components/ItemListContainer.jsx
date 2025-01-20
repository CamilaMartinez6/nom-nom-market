import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getItems, getItemsCategory } from "../firebase/db"
import ItemList from "./ItemList"
import styles from "../styles/ItemListContainer.module.css"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        categoria ? getItemsCategory(categoria, setItems) : getItems(setItems)
    }, [categoria])

    return (
        <div className={styles.bg}>
        <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer