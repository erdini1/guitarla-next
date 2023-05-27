import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Image
                    src="/img/logo.svg"
                    alt="Imagen Logo"
                    width={300}
                    height={40}
                />

                <nav className={styles.navegacion}>
                    <Link href="/" >Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/tienda">Tienda</Link>
                    <Link href="/blog">Blog</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header