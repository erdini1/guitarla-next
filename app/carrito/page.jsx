import styles from "@/styles/carrito.module.css"

export const metadata = {
    title: "GuitarLA - Carrito de Compras"
}

export default function Carrito() {
    return (
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                </div>

                <aside className={styles.resumen}>
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: $</p>
                </aside>
            </div>

        </main>
    )
}
