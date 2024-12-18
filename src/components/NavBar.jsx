import logo from "/assets/logo-nom-nom.png"
import CartWidget from "./CartWidget"
import styles from "../styles/NavBar.module.css"

function NavBar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logoCategoriasContainer}>
                <div>
                    <img src={logo} alt="logo" className={styles.logoImg} />
                </div>
                <ul className={styles.categoriasContainer}>
                    <li className={styles.categoriasLista}>
                        <a className={styles.categoriaLink} href="" >
                            Snacks
                        </a>
                    </li>
                    <li className={styles.categoriasLista}>
                        <a className={styles.categoriaLink} href="" >
                            Golosinas
                        </a>
                    </li>
                    <li className={styles.categoriasLista}>
                        <a className={styles.categoriaLink} href="" >
                            Bebidas
                        </a>
                    </li>
                    <li className={styles.categoriasLista}>
                        <a className={styles.categoriaLink} href="" >
                            Ediciones Especiales
                        </a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar