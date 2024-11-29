function ItemListContainer(props) {
    return (
        <div style={{display: "flex", justifyContent:"center", marginTop: "20px"}}>
            <h1 style={{fontFamily: "'TT Chocolates', sans-serif", color: "#6C3A1F"}}>{props.aviso}</h1>
        </div>
    )
}

export default ItemListContainer