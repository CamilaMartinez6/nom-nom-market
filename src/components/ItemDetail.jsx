import ItemCount from './ItemCount'

function ItemDetail({ item }) {
    return (
        <div>
            <img src={item.img[0]} alt={item.nombre} />
            <h3>(item.nombre)</h3>
            <p>(item.descripcion)</p>
            <h4>(item.precio)</h4>
            <ItemCount />
        </div>
    )
}

export default ItemDetail