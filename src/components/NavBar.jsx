import logo from "../assets/logo-nom-nom-market.png"
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
                    <li className="categorias-lista">
                        <a className="categoria-link" href="" >
                            Snacks
                        </a>
                    </li>
                    <li className="categorias-lista">
                        <a className="categoria-link" href="" >
                            Golosinas
                        </a>
                    </li>
                    <li className="categorias-lista">
                        <a className="categoria-link" href="" >
                            Bebidas
                        </a>
                    </li>
                    <li className="categorias-lista">
                        <a className="categoria-link" href="" >
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