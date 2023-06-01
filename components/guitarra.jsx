import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/guitarras.module.css"

const Guitarra = ({ guitarra }) => {

    const { nombre, descripcion, precio, url, imagen } = guitarra

    return (
        <div className={styles.guitarra}>
            <Image
                src={imagen.data.attributes.formats.medium.url}
                alt={`Imagen de guitarra ${nombre}`}
                height={600}
                width={400}
            />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link
                    href={`/guitarras/${url}`}
                    className={styles.enlace}
                >
                    Ver Producto
                </Link>
            </div>
        </div>
    )
}

export default Guitarra