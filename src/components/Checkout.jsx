import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import styles from "../styles/Checkout.module.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createOrder } from '../firebase/db'
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { serverTimestamp } from 'firebase/firestore';

function Checkout() {

    const { total, cart } = useContext(CartContext)

    const handleSubmit = e => {
        e.preventDefault()
        
        const form = e.target
        const [name, email, phone] = form

        const order = {
            buyer: { name: name.value, email: email.value, phone: phone.value},
            total: total(),
            items: cart,
            time: serverTimestamp()
        }

        createOrder(order)
    }
   
    const showSwal = () => {
        withReactContent(Swal).fire({
            title: "Compra Realizada con éxito",
            icon: "success",
            draggable: true
        });
    }

    return (
        <Form className={styles.formulario} onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su número de celular" />
            </Form.Group>
            <Button onClick={showSwal} type="submit" className={styles.btnEnviar}>Enviar Formulario</Button>
        </Form>
    )
}

export default Checkout