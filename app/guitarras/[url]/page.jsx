import Image from "next/image"
import styles from "@/styles/guitarras.module.css"

export async function generateMetadata({ params, searchParams }) {
    const { data } = await getGuitarra(params.url)
    try {
        return {
            title: `GuitarLA - Guitarra ${data[0].attributes.nombre}`,
            description: `GuitarLA - Guitarra ${data[0].attributes.nombre}, Venta de guitarras, blog de musica`
        }
    } catch(error){
        console.error(error);
    }
    
}

async function getGuitarra(url) {
    const res = await fetch(`${process.env.API_URL}/guitarras/?filters[url]=${url}&populate=imagen`)
    return res.json()
}

const Producto = async ({ params: { url } }) => {
    const { data: guitarra } = await getGuitarra(url)
    const { nombre, descripcion, precio, imagen } = guitarra[0].attributes


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
            </div>
        </div>
    )
}

export default Producto