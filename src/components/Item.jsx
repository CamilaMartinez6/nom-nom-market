import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from "../styles/Item.module.css"
import { Link } from 'react-router'

function Item({ item }) { 
    return (
        <Card className={styles.cardItem} key={item.id} >
            <Card.Img variant="top" src={item.img} />
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitulo}>{item.nombre}</Card.Title>
                <Card.Text className={styles.cardDescripcion}>{item.descripcion}</Card.Text>
            </Card.Body>
            <Card.Text className={styles.cardPrecio}>${item.precio}</Card.Text>
            <Button as={Link} to={`/item/${item.id}`} className={styles.btnVerMas}>Ver más</Button>
        </Card>
    );
}

export default Item