import Item from "./Item"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from "../styles/ItemList.module.css"

function ItemList({ items }) {
    return (
        <Container className={styles.productosContainer}>
            <Row className={styles.cardsContainer}>
                {items.map(item => (
                    <Item item={item} key={item.id} />
                ))}
            </Row>
        </Container>
    )
}

export default ItemList