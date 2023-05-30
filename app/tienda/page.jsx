import ListadoGuitarras from "@/components/listado-guitarras"

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
    console.log(guitarras)


    return (
        <>
            <main className="contenedor">
                <h2 className="heading">Nuestra Colección</h2>

                <ListadoGuitarras
                    guitarras={guitarras}
                />

            </main>
        </>
    )
}

export default Tienda