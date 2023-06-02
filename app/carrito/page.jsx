import styles from "@/styles/carrito.module.css"

export const metadata = {
    title: "GuitarLA - Carrito de Compras"
}

export default function Carrito() {
    return (
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>

            <div>
                <div>
                    <h2>Articulos</h2>
                </div>

                <aside>
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: $</p>
                </aside>
            </div>

        </main>
    )
}
