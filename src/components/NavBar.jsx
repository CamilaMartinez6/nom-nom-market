import logo from "/assets/logo-nom-nom.png"
import CartWidget from "./CartWidget"
import styles from "../styles/NavBar.module.css"
import { Link } from 'react-router'

function NavBar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logoCategoriasContainer}>
                <Link to='/'>
                    <img src={logo} alt="logo" className={styles.logoImg} />
                </Link>
                <ul className={styles.categoriasContainer}>
                    <li className={styles.categoriasLista}>
                        <Link className={styles.categoriaLink} to='/categoria/snacks' >
                            Snacks
                        </Link>
                    </li>
                    <li className={styles.categoriasLista}>
                        <Link className={styles.categoriaLink} to='/categoria/golosinas' >
                            Golosinas
                        </Link>
                    </li>
                    <li className={styles.categoriasLista}>
                        <Link className={styles.categoriaLink} to='/categoria/bebidas' >
                            Bebidas
                        </Link>
                    </li>
                    <li className={styles.categoriasLista}>
                        <Link className={styles.categoriaLink} to='/categoria/edicionesespeciales' >
                            Ediciones Especiales
                        </Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar