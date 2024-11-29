import logo from "../assets/logo-nom-nom-market.png"
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <nav style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "10px 40px", backgroundColor: "#35776E", height: "110px"}}>
            <div>
                <img src={logo} alt="logo" style={{ width: "98px", height: "auto", filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.3))" }} />
            </div>
            <ul style={{ position: "relative", right: "530px", display: "flex", justifyContent: "space-between", width: "480px", alignItems: "center" }}>
                <li className= "categorias-lista">
                    <a className="categoria-link" href="" >
                        Snacks
                    </a>
                </li>
                <li className= "categorias-lista">
                    <a className="categoria-link" href="" >
                        Golosinas
                    </a>
                </li>
                <li className= "categorias-lista">
                    <a className="categoria-link" href="" >
                        Bebidas
                    </a>
                </li>
                <li className= "categorias-lista">
                    <a className="categoria-link" href="" >
                        Ediciones Especiales
                    </a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar