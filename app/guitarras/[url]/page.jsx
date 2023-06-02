

// import { useState } from "react"
import Image from "next/image"
import styles from "@/styles/guitarras.module.css"

export async function generateMetadata({ params, searchParams }) {
    const { data } = await getGuitarra(params.url)
    try {
        return {
            title: `GuitarLA - Guitarra ${data[0].attributes.nombre}`,
            description: `GuitarLA - Guitarra ${data[0].attributes.nombre}, Venta de guitarras, blog de musica`
        }
    } catch (error) {
        console.error(error);
    }
}

async function getGuitarra(url) {
    const res = await fetch(`${process.env.API_URL}/guitarras/?filters[url]=${url}&populate=imagen`)
    return res.json()
}

const Producto = async ({ params: { url } }) => {

    // const [cantidad, setCantidad] = useState(0)

    const { data: guitarra } = await getGuitarra(url)
    const { nombre, descripcion, precio, imagen } = guitarra[0].attributes

    /* SI LO PONGO DEL LADO DEL CLIENTE NO ME FUNCIONA POR LO QUE NO PUEDO USAR HOOKS, VER SI MAS ADELANTE SACAN ALGUNA FORMA DE SOLUCIONARLO */
    // console.log(cantidad)

    // const handleSubmit = e => {
    //     e.preventDefault()
    // }


    return (
        <div className={styles.guitarra}>
            <Image
                src={imagen.data.attributes.url}
                alt={`Imagen de guitarra ${nombre}`}
                height={600}
                width={400}
            />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <form
                    className={styles.formulario}
                    // onSubmit={handleSubmit}
                >
                    <label htmlFor="cantidad">Cantidad:</label>

                    <select
                        id="cantidad"
                        // onChange={e => setCantidad(+e.target.value)}
                    >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input
                        type="submit"
                        value="Agregar al carrito"
                    />
                </form>
            </div>
        </div>
    )
}

export default Producto