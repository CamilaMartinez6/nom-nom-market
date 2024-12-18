import { useState, useEffect } from "react"
import ItemList from "./ItemList"

function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(() => {
    
        const fetchData = async () => {
            const response = await fetch("/data/data.json")
            const data = await response.json()
         
            const allProducts = data.categorias.flatMap(categoria => categoria.productos)
            setItems(allProducts)
        }
        fetchData()
    }, []);

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer