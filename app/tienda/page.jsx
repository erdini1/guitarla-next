import Guitarra from "@/components/guitarra"
import styles from "@/styles/grid.module.css"

export const metadata = {
    title: "GuitarLa - Tienda",
    description: 'GuitarLA - Venta de guitarras'
}

async function getGuitarras() {
    const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`/* , {cache: "no-store"} */)
    return res.json()
}

const Tienda = async () => {

    const { data: guitarras } = await getGuitarras()

    return (
        <>
            <main className="contenedor">
                <h2 className="heading">Nuestra Colección</h2>

                <div className={styles.grid}>
                    {guitarras?.map(guitarra => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />
                    ))}
                </div>


            </main>
        </>
    )
}

export default Tienda