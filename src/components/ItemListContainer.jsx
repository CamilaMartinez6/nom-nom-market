import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const [itemsFiltrados, setItemsFiltrados] = useState([])
    const [data, setData] = useState(null)
    const { nombre } = useParams()
   
    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("/data/data.json")
            const data = await response.json()

            const allProducts = data.categorias.flatMap(categoria => categoria.productos)
            setItems(allProducts)
            setData(data)
        }
        fetchData()
    }, []);
 
    //filtrado
    useEffect(() => {
        if (items.length > 0) {
            if (!nombre) {
                setItemsFiltrados(items);
            } else {
                const filtrado = items.filter((item) => {
                    const categoria = data.categorias.find(categoria => categoria.nombre === nombre)
                    return categoria ? categoria.productos.some(producto => producto.id === item.id) : false;
                })
                setItemsFiltrados(filtrado);
            }
        }
    }, [nombre, items, data]);

    return (
        <ItemList items={itemsFiltrados} />
    )
}

export default ItemListContainer