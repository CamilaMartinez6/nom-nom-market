import styles from "../styles/CartWidget.module.css"

function CartWidget() {
    return (
        <div className={styles.widgetContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="54" viewBox="0 0 62 60" fill="none">
                <path d="M60 30C60 45.4027 47.0786 58 31 58C14.9214 58 2 45.4027 2 30C2 14.5973 14.9214 2 31 2C47.0786 2 60 14.5973 60 30Z" fill="#F9E4C5" stroke="#6C3A1F" strokeWidth="4" />
            </svg>
            <svg className={styles.carritoWidget} xmlns="http://www.w3.org/2000/svg" width="34" height="36" viewBox="0 0 37 39" fill="none" >
                <path d="M8.1488 11.3H29.4084C29.8392 11.3001 30.2651 11.3952 30.6589 11.5794C31.0526 11.7636 31.4054 12.0327 31.6944 12.3693C31.9835 12.706 32.2024 13.1028 32.3371 13.5341C32.4717 13.9654 32.5192 14.4216 32.4763 14.8734L31.5513 24.6234C31.4752 25.4254 31.1192 26.1689 30.5522 26.7097C29.9853 27.2505 29.248 27.55 28.4834 27.55H13.7605C13.0474 27.5503 12.3563 27.2901 11.8048 26.8137C11.2533 26.3373 10.8755 25.6741 10.7357 24.937L8.1488 11.3Z" stroke="#6C3A1F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.1488 11.3L6.90005 6.03011C6.81654 5.67871 6.62402 5.3668 6.35308 5.14393C6.08214 4.92105 5.74832 4.8 5.40464 4.79999H3.5238" stroke="#6C3A1F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.7738 34.05H15.8571" stroke="#6C3A1F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.1071 34.05H28.1904" stroke="#6C3A1F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className={styles.cantidadCarritoContainer} >
                <span className={styles.cantidadCarrito}>4</span>
            </div>
        </div>
    )
}

export default CartWidget