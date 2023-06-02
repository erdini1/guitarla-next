"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/header.module.css"
import { usePathname } from "next/navigation"

const Header = () => {

    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={"/"}>
                    <Image
                        src="/img/logo.svg"
                        alt="Imagen Logo"
                        width={300}
                        height={40}
                    />
                </Link>

                <nav className={styles.navegacion}>
                    <Link
                        href="/"
                        className={pathname === "/" ? styles.active : ""}
                    >Inicio</Link>
                    <Link
                        href="/nosotros"
                        className={pathname === "/nosotros" ? styles.active : ""}
                    >Nosotros</Link>
                    <Link
                        href="/tienda"
                        className={pathname === "/tienda" ? styles.active : ""}
                    >Tienda</Link>
                    <Link
                        href="/blog"
                        className={pathname === "/blog" ? styles.active : ""}
                    >Blog</Link>
                    <Link href="/carrito">
                        <Image
                            src="/img/carrito.png"
                            alt="Imagen carrito"
                            width={30}
                            height={25}
                        />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header