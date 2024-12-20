import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [item, setItem] = useState()

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("/data/data.json")
            const data = await response.json()

            const product = data.productos.flatMap(productos => productos.id)
            setItem(product)
            setData(data)
        }
        fetchData()
    }, []);

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer