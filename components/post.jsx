import Link from "next/link"
import Image from "next/image"

export default function Post({ post }) {

    const { titulo, contenido, url, imagen, publishedAt } = post

    return (
        // las entradas de los posts se colocan usualmente en article
        <article>
            <Image
                src={imagen.data.attributes.formats.medium.url}
                alt={`Imagen de post ${titulo}`}
                width={600}
                height={400}
            />

            <div className="">
                <h3>{titulo}</h3>
                <p>{publishedAt}</p>
                <p>{contenido}</p>
                <Link href={`/blog/${url}`}>
                    Ver entrada
                </Link>
            </div>
        </article>
    )
}
