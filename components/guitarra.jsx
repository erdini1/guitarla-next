"use client"
import Image from "next/image"

const Guitarra = ({ guitarra }) => {

    const {nombre, descripcion, precio, url, imagen} = guitarra
    // console.log(guitarra)

    return (
        <div>
            <h1>{nombre}</h1>
            <Image 
                src={imagen.data.attributes.formats.medium.url}
                alt={`Imagen de guitarra ${nombre}`}
                height={400}
                width={300}
            />
        </div>
    )
}

export default Guitarra