import Image from "next/image";
import { formatearFecha } from "@/utils/helpers";
import styles from "@/styles/blog.module.css"

export async function generateMetadata({ params, searchParams }) {
    const { data: post } = await getPost(params.url)
    try {
        return {
            title: `GuitarLA - ${post[0].attributes.titulo}`,
            description: `GuitarLA - ${post[0].attributes.titulo}, Venta de guitarras, blog de musica`
        }
    } catch (error) {
        console.error(error);
    }
}

async function getPost(url) {
    const res = await fetch(`${process.env.API_URL}/posts/?filters[url]=${url}&populate=imagen`)
    if (!res) undefined
    return res.json()
}

export default async function Post({ params: { url } }) {

    const { data: post } = await getPost(url)
    const { titulo, contenido, publishedAt, imagen } = post[0].attributes
    console.log(post)

    return (
        <article className={`${styles.post} ${styles["mt-3"]} `}>
            <Image
                src={imagen.data.attributes.url}
                alt={`Imagen de post ${titulo}`}
                width={1000}
                height={600}
            />

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
            </div>
        </article>
    )
}
