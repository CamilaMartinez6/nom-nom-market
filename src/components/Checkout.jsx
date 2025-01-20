import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import styles from "../styles/Checkout.module.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Checkout() {

    const showSwal = () => {
        withReactContent(Swal).fire({
            title: "Compra Realizada con éxito",
            icon: "success",
            draggable: true
        });
    }
    return (
        <Form className={styles.formulario}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su apellido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Celular</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su número de celular" />
            </Form.Group>
            <Button onClick={showSwal} className={styles.btnEnviar}>Enviar Formulario</Button>
        </Form>
    )
}

export default Checkout