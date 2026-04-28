import styles from './Header.module.css'
import ContenedorListaContactos from '../contactos/ContenedorListaContactos';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ContenedorListaContactos />
            <p>&copy; 2026 - Mi Aplicación React</p>
        </footer>
    )
}

export default Footer
