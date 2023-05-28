import Link from "next/link"
import styles from "@/styles/footer.module.css"

const Footer = () => {

  return (
    <footer>
      <div className="contenedor">
        <nav className={styles.navegacion}>
          <Link
            href="/"
          >Inicio</Link>
          <Link
            href="/nosotros"
          >Nosotros</Link>
          <Link
            href="/tienda"
          >Tienda</Link>
          <Link
            href="/blog"
          >Blog</Link>
        </nav>
        <p>Todos los derechos reservados {new Date().getFullYear()}</p>

      </div>
    </footer>
  )
}

export default Footer