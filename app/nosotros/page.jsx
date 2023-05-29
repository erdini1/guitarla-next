import Image from "next/image"
import styles from "@/styles/nosotros.module.css"

export const metadata = {
    title: "GuitarLA - Nosotros",
    description: 'GuitarLA - Venta de guitarras y blog de musica'
}

export default function Nosotros() {
    return (
        <main className="contenedor">
            <h2 className="heading">Nosotros</h2>

            <div className={styles.contenido}>
                <Image
                    src="/img/nosotros.jpg"
                    alt="Imagen sobre nosotros"
                    width={1000}
                    height={800}
                />

                <div>
                    <p>
                        Phasellus vitae dictum erat, ac ultrices odio. Suspendisse ac nisi ultrices, rutrum justo ac, sagittis ligula. Praesent vitae pretium augue. Nulla rhoncus egestas ullamcorper. Phasellus ultricies accumsan odio, aliquam ultrices neque mattis at. Vestibulum dictum tellus tempor libero vulputate placerat. Proin maximus egestas ligula, et condimentum sem tempus vitae.
                    </p>
                    <p>
                        Duis vulputate turpis vel ante convallis consequat. Integer a cursus nulla. Mauris at aliquam elit. Integer tincidunt justo ac euismod varius. Mauris fringilla est imperdiet lacus faucibus, quis tempus dolor gravida. Donec bibendum mi eu pharetra lacinia. Nunc laoreet, justo eget vulputate rhoncus, leo diam condimentum lacus, finibus imperdiet augue sapien quis lacus. Aliquam faucibus, mi id dapibus lacinia, lorem nisi tristique erat, nec tempus felis purus eu felis. Aenean sollicitudin pellentesque diam ut pharetra. Pellentesque pretium libero nec turpis condimentum, eu egestas velit placerat. Phasellus eget egestas sapien. Sed facilisis neque quis turpis lacinia, ac vestibulum ligula consequat.
                    </p>
                </div>
            </div>
        </main>
    )
}
