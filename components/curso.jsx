"use client"

import styles from "@/styles/curso.module.css"

function Curso({ curso }) {

    const { titulo, contenido, imagen } = curso

    return (
        <section className={`${styles.curso} curso`}>

            <style jsx>
                {`
                    .curso{
                        background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen.data.attributes.url})
                    }
                `}
            </style>

            <div className={`contendor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className="heading">{titulo}</h2>
                    <p className="texto">{contenido}</p>
                </div>
            </div>
        </section>
    )
}

export default Curso